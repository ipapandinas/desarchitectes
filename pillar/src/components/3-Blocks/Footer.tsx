/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { FC, memo, useEffect, useState } from 'react'
import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation
} from 'styled-components'

import Player from 'components/3-Blocks/Player'

import { useDevice } from 'hooks'
import { footerSlideIn, footerSlideOut } from 'style/keyframes'

interface Props {
  className?: string
  isVisible: boolean
}

interface ThemedProps {
  theme: DefaultTheme
  isMobile: boolean
  isHide: boolean
  isVisible: boolean
}

const footerHideStyle = (isMobile: boolean): FlattenSimpleInterpolation => css`
  animation: ${footerSlideOut(isMobile)} 0.5s cubic-bezier(0.96, 0, 1, 1)
    forwards;
`

const footerVisibleStyle = (
  isMobile: boolean
): FlattenSimpleInterpolation => css`
  animation: ${footerSlideIn(isMobile)} 0.5s cubic-bezier(0, 0.52, 0, 1)
    forwards;
`

const StyledFooter = styled.footer<ThemedProps>`
  background: ${({ theme }) => theme.colors.invertedContrast};
  display: flex;

  ${({ isMobile, isHide }) => isHide && footerHideStyle(isMobile)}
  ${({ isMobile, isVisible }) => isVisible && footerVisibleStyle(isMobile)}

  ${({ theme }) =>
    `
      padding: 2rem 3.2rem 2rem;

      ${theme.mediaQueries.sm} {
        padding: 3.5rem 6.4rem 3.5rem;
      }

      ${theme.mediaQueries.lg} {
        padding: 2rem 3.2rem 2rem;
      }
  `}
`

const StyledPlayer = styled(Player)`
  width: 100%;
`

const Footer: FC<Props> = memo(({ className, isVisible }) => {
  const { isMobile } = useDevice()

  const [firstRender, setFirstRender] = useState(isVisible)

  useEffect(() => {
    if (firstRender && !isVisible) {
      setFirstRender(false)
    }
  }, [firstRender, isVisible])

  return (
    <StyledFooter
      className={className}
      isMobile={isMobile}
      isHide={!isVisible}
      isVisible={!firstRender && isVisible}
    >
      {process.env.GATSBY_ANCHOR_RSS_URL && <StyledPlayer isTitle />}
    </StyledFooter>
  )
})

export default Footer
