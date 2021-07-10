import React, { FC, useEffect, useRef, useState } from 'react'
import RssParser from 'rss-parser/dist/rss-parser'
import styled from 'styled-components'

import { Direction } from 'components/1-Atoms/Slider'
import PlayerControls from 'components/2-Molecules/PlayerControls'
import Playlist from 'components/2-Molecules/Playlist'
import ProgressBar from 'components/2-Molecules/ProgressBar'

import { usePageContext } from 'hooks'

import { EpisodeType, FeedType } from 'types/rss'

type StatusType = {
  currentEpisode: EpisodeType | undefined
  currentEpisodeIdx: number
  currentTime: number
  isPlaying: boolean
}

type Props = {
  className?: string
  isPlaylist?: boolean
  isTitle?: boolean
}

const StyledTitle = styled.div`
  text-align: center;
`

const StyledTitleEpisode = styled.span`
  font-family: ${({ theme }) => theme.fonts.bold};
`

const StyledTitleName = styled.span`
  font-family: ${({ theme }) => theme.fonts.italic};
`

const StyledControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledProgressBar = styled(ProgressBar)`
  margin-left: 2rem;
`

const StyledTimeWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0.8rem 0.6rem;
  margin-left: 1.2rem;
  font-size: 1.2rem;
  line-height: 1.33;
  text-align: center;
`

const StyledTimeBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: '#eee';
  border-radius: 1.6rem;
  transform-origin: left top;
`

const StyledTime = styled.span`
  display: inline-block;
  font-size: 1.4rem;
  min-width: 4.8rem;
`

const Player: FC<Props> = ({
  className,
  isPlaylist = false,
  isTitle = false
}) => {
  const { pageData } = usePageContext()
  const { appData } = pageData

  const [isLoading, setLoading] = useState(false)
  const [feed, setFeed] = useState<FeedType | undefined>(undefined)
  const [status, setStatus] = useState<StatusType>({
    currentEpisode: undefined,
    currentEpisodeIdx: 0,
    currentTime: 0,
    isPlaying: false
  })

  const audioElement = useRef<HTMLAudioElement>(new Audio())
  const rssParser = new RssParser()

  const fetchRssData = async (url: string) => {
    setLoading(true)
    const feed: FeedType | undefined = await rssParser.parseURL(url)

    if (!feed || feed.items.length === 0) return

    let episode = feed.items[0]
    const word = appData?.word

    if (word !== undefined) {
      const selectedEpisode = feed.items.find(
        ({ title }) => title.indexOf(word.toLocaleLowerCase()) !== -1
      )
      if (selectedEpisode !== undefined) {
        episode = selectedEpisode
      }
    }

    if (episode.enclosure !== undefined) {
      audioElement.current.src = episode.enclosure.url
      setStatus((prevState) => ({
        ...prevState,
        currentEpisode: episode
      }))
    }
    setFeed(feed)
    setLoading(false)
  }

  const formatTime = (time: number): string | undefined => {
    if (time === undefined || time === null) {
      return
    }
    // Cleanse time input depending on in seconds or full format
    if (isNaN(time)) {
      return '-:--'
    }

    const padZero = (digit: number) => `${digit < 10 ? '0' : ''}${digit}`

    const prefix = time < 0 ? '-' : ''
    const absTime = Math.abs(time)
    let hours: number | string = Math.floor(absTime / 3600)
    let minutes: number | string = Math.floor((absTime % 3600) / 60)
    let seconds: number | string = Math.floor(absTime % 60)

    return hours > 0
      ? `${prefix}${hours}:${padZero(minutes)}:${padZero(seconds)}`
      : `${prefix}${minutes}:${padZero(seconds)}`
  }

  const handlePlayPause = (isNewEpisode: boolean = false) => {
    if (status.isPlaying && !isNewEpisode) {
      audioElement.current.pause()
      setStatus((prevState) => ({ ...prevState, isPlaying: false }))
    } else {
      audioElement.current.play()
      setStatus((prevState) => ({ ...prevState, isPlaying: true }))
    }
  }

  const handlePrevious = () => {
    if (feed === undefined) return

    if (status.currentTime < 3 && status.currentEpisodeIdx > 0) {
      setEpisode(feed.items[status.currentEpisodeIdx - 1])
    } else {
      audioElement.current.currentTime = 0
      setStatus((prevState) => ({ ...prevState, currentTime: 0 }))
    }
  }

  const handleTimeChange = (value: number) => {
    const newTime = value * audioElement.current.duration
    audioElement.current.currentTime = newTime
    setStatus((prevState) => ({ ...prevState, currentTime: newTime }))
  }

  const setEpisode = (episode: EpisodeType) => {
    handlePlayPause()
    if (episode.title !== status.currentEpisode?.title) {
      audioElement.current.src = episode.enclosure.url
      audioElement.current.currentTime = 0
      setStatus((prevState) => ({
        ...prevState,
        currentEpisode: episode,
        currentEpisodeIdx:
          feed?.items.findIndex((item) => item.title === episode.title) ?? 0,
        currentTime: 0
      }))
      handlePlayPause(true)
    }
  }

  useEffect(() => {
    if (!process.env.GATSBY_ANCHOR_RSS_URL) return
    fetchRssData(process.env.GATSBY_ANCHOR_RSS_URL).catch(alert)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((prevState: StatusType) => {
        const { currentTime, isPlaying } = prevState
        if (isPlaying && currentTime < audioElement.current.duration) {
          return {
            ...prevState,
            currentTime: currentTime + 0.5
          }
        }
        return prevState
      })
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={className}>
      {isLoading ||
      feed === undefined ||
      status?.currentEpisode === undefined ||
      audioElement.current.src === undefined ||
      audioElement.current.src === null ? (
        'Loading...'
      ) : (
        <>
          {isPlaylist && (
            <Playlist
              currentEpisode={status.currentEpisode}
              list={feed.items}
              setEpisode={setEpisode}
            />
          )}
          {isTitle && (
            <StyledTitle>
              <StyledTitleEpisode>{`Épisode ${status.currentEpisode.itunes.episode}: `}</StyledTitleEpisode>
              <StyledTitleName>{`${status.currentEpisode.title}`}</StyledTitleName>
            </StyledTitle>
          )}
          <StyledControls>
            <PlayerControls
              handlePlayPause={() => handlePlayPause()}
              handlePrevious={() => handlePrevious()}
              isPlaying={status.isPlaying}
            />
            <StyledProgressBar
              isEnabled
              direction={Direction.HORIZONTAL}
              handleChange={handleTimeChange}
              onClick={handleTimeChange}
              value={status.currentTime / audioElement.current.duration}
            />
            <StyledTimeWrapper>
              <StyledTimeBackground />
              <StyledTime>{formatTime(status.currentTime)}</StyledTime>
            </StyledTimeWrapper>
          </StyledControls>
        </>
      )}
    </div>
  )
}

export default Player
