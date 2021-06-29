import React, { FC } from 'react'
import styled from 'styled-components'

import { EpisodeType } from 'types/rss'

type Props = {
  currentEpisode: EpisodeType
  list: EpisodeType[]
  setEpisode: (episode: EpisodeType) => void
}

interface ThemedProps {
  isActive: boolean
}

const StyledOrderedList = styled.ol`
  list-style-type: decimal-leading-zero;
  counter-reset: li;
`

const StyledListItem = styled.li<ThemedProps>`
  margin: 0;
  padding: 0 0 0 2em;
  text-indent: -2em;
  list-style-type: none;
  counter-increment: item;

  ${({ isActive, theme }) =>
    isActive &&
    `
      font-family: ${theme.fonts.bold};  
    `}

  &:before {
    counter-increment: li;
    content: counter(li, decimal-leading-zero) '.';
    display: inline-block;
    font-family: ${({ theme }) => theme.fonts.boldItalic};
    margin-right: 0.25em;
  }
`

const Playlist: FC<Props> = ({ currentEpisode, list, setEpisode }) => (
  <StyledOrderedList>
    {list.map((episode) => (
      <StyledListItem
        key={episode.guid}
        isActive={currentEpisode.title === episode.title}
      >
        <button type='button' onClick={() => setEpisode(episode)}>
          {episode.title}
        </button>
      </StyledListItem>
    ))}
  </StyledOrderedList>
)

export default Playlist
