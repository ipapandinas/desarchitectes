import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'

import IgIcon from 'assets/svg/ig.svg'
import MailIcon from 'assets/svg/mail.svg'
import PodcastIcon from 'assets/svg/podcast.svg'
import TelmoIcon from 'assets/svg/telmo.svg'

import Separator from 'components/1-Atoms/Separator'
import Player from 'components/3-Blocks/Player'
import Link from 'components/5-Utils/Link'

import { useDevice } from 'hooks'
import formatNewLine from 'services/textFormat'

interface Props {
  content: string
}

const Home: FC<Props> = ({ content }) => {
  const { isLaptop } = useDevice()
  const { messages } = useIntl()

  const StyledHome = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `

  const StyledLabel = styled.span`
    font-size: 20rem;
    position: fixed;

    ${({ theme }) =>
      `
        ${theme.mediaQueries.md} {
          font-size: 12rem;
        }

        ${theme.mediaQueries.lg} {
          font-size: 10rem;
        }

        ${theme.mediaQueries.xl} {
          font-size: 12rem;
        }
    `}
  `

  const StyledLabelTop = styled(StyledLabel)`
    ${({ theme }) =>
      `
        ${theme.mediaQueries.md} {
          top: -5.6rem;
          left: 4.8rem;
        }

        ${theme.mediaQueries.lg} {
          top: -5.6rem;
          left: 4.8rem;
        }

        ${theme.mediaQueries.xl} {
          top: -7.2rem;
          left: 4.8rem;
        }
    `}
  `

  const StyledLabelBottom = styled(StyledLabel)`
    ${({ theme }) =>
      `
        ${theme.mediaQueries.md} {
          bottom: -5.6rem;
          right: 10rem;
        }

        ${theme.mediaQueries.lg} {
          bottom: -5.6rem;
          right: 10rem;
        }

        ${theme.mediaQueries.xl} {
          bottom: -7.2rem;
          right: 12rem;
        }
    `}
  `

  const StyledContent = styled.div`
    margin: 0 2.4rem;

    ${({ theme }) =>
      `
        ${theme.mediaQueries.md} {
          font-size: 2rem;
          margin: 0 0 0 4.8rem;
        }
    `}
  `

  const StyledPlayer = styled(Player)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0 4rem 0 0;

    ${({ theme }) =>
      `
        ${theme.mediaQueries.lg} {
          width: 19rem;
        }

        ${theme.mediaQueries.xl} {
          right: 38.8rem;
          width: 34rem;
        }
    `}
  `

  const StyledSocials = styled.div`
    position: fixed;
    right: 8rem;
    top: 1.6rem;

    > * {
      margin: 0 2rem 0 0;

      &:last-child {
        margin: 0;
      }
    }

    ${({ theme }) =>
      `
        ${theme.mediaQueries.sm} {
          right: 12rem;
        }
    `}
  `

  const StyledIgIcon = styled(IgIcon)`
    color: ${({ theme }) => theme?.colors?.contrast ?? '#000'};
    height: auto;
    width: 2.2rem;
  `

  const StyledMailIcon = styled(MailIcon)`
    color: ${({ theme }) => theme?.colors?.contrast ?? '#000'};
    height: auto;
    width: 2.8rem;
  `

  const StyledPodcastIcon = styled(PodcastIcon)`
    color: ${({ theme }) => theme?.colors?.contrast ?? '#000'};
    height: auto;
    width: 2.8rem;
  `

  const StyledSeparator = styled(Separator)`
    background: transparent;
    top: 0;

    ${({ theme }) =>
      `
        ${theme.mediaQueries.lg} {
          right: 35rem;
        }

        ${theme.mediaQueries.xl} {
          right: 51.7rem;
        }
    `}
  `

  const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0.8rem;
    left: 1.6rem;
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.fonts.bold};
  `

  const StyledTelmoLink = styled(Link)`
    display: flex;
    align-items: flex-end;
    color: ${({ theme }) => theme?.colors?.contrast ?? '#000'};
  `

  const StyledTelmoIcon = styled(TelmoIcon)`
    height: auto;
    width: 1rem;
    margin: 0 0.8rem 0 0;
  `

  const StyledTelmoTag = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1;
    font-size: 1rem;
  `

  const creditsLabel = `© ${new Date().getFullYear()} desarchitectes`

  return (
    <StyledHome className='fade-in'>
      {isLaptop && (
        <StyledLabelTop>{String(messages.abecedary)}</StyledLabelTop>
      )}
      {content !== '' && (
        <StyledContent>{formatNewLine(content)}</StyledContent>
      )}
      {isLaptop && <StyledLabelBottom>desarchitectes</StyledLabelBottom>}

      <StyledSeparator />

      {process.env.GATSBY_ANCHOR_RSS_URL && isLaptop && (
        <StyledPlayer isPlaylist />
      )}

      <StyledSocials>
        <Link
          to='https://www.instagram.com/desarchitectes/'
          hideArrow
          title={String(messages.instagram)}
        >
          <StyledIgIcon />
        </Link>

        <Link
          to='mailto:abcdesarchitectes@gmail.com'
          hideArrow
          title={String(messages.contact)}
        >
          <StyledMailIcon />
        </Link>

        <Link
          to='https://www.instagram.com/desarchitectes/'
          hideArrow
          title='Podcast desarchitectes'
        >
          <StyledPodcastIcon />
        </Link>
      </StyledSocials>

      <StyledFooter>
        <span>{creditsLabel}</span>
        <StyledTelmoLink
          hideArrow
          to='https://www.mrtelmo.com'
          title='Mister Telmo Website'
        >
          <StyledTelmoIcon />
          <StyledTelmoTag>
            <span>mr. telmo</span>
            <span>code some more</span>
          </StyledTelmoTag>
        </StyledTelmoLink>
      </StyledFooter>
    </StyledHome>
  )
}

export default Home
