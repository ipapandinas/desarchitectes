import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import PauseLogo from 'assets/svg/pause.svg'
import PlayLogo from 'assets/svg/play.svg'
import PreviousLogo from 'assets/svg/previous.svg'

type Props = {
  handlePlayPause: () => void
  handlePrevious: () => void
  isPlaying: boolean
}

const svgDimensions = css`
  height: 2.4rem;
  width: 2.4rem;
`

const StyledPauseLogo = styled(PauseLogo)`
  ${svgDimensions}
`

const StyledPlayLogo = styled(PlayLogo)`
  ${svgDimensions}
`

const StyledPreviousLogo = styled(PreviousLogo)`
  ${svgDimensions}
`

const PlayerControls: FC<Props> = ({
  handlePlayPause,
  handlePrevious,
  isPlaying
}) => (
  <>
    <button onClick={handlePrevious}>
      <StyledPreviousLogo />
    </button>
    <button onClick={handlePlayPause}>
      {isPlaying ? <StyledPauseLogo /> : <StyledPlayLogo />}
    </button>
  </>
)

export default PlayerControls
