/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { FC, memo, useEffect, useState } from 'react'
import { useIntl } from 'gatsby-plugin-react-intl'
import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation
} from 'styled-components'

import Link from 'components/5-Utils/Link'

import DesarchitectesLogo from 'assets/svg/desarchitectes.svg'

import { useDevice } from 'hooks'
import { footerSlideIn, footerSlideOut } from 'style/keyframes'

interface Props {
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
  width: 100%;
  background: ${({ theme }) => theme.colors.invertedContrast};
  display: flex;
  position: absolute;
  bottom: 0;
  z-index: 100;
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

const Styledlink = styled(Link)`
  padding: 0;
  margin: 0 auto;
`

const Logo = styled(DesarchitectesLogo)`
  height: auto;

  ${({ theme }) =>
    `
    width: 12rem;

      ${theme.mediaQueries.sm} {
        width: 9rem;
      }

      ${theme.mediaQueries.lg} {
        width: 9rem;
      }
  `}
`

const Footer: FC<Props> = memo(({ isVisible }) => {
  const { isMobile } = useDevice()
  const { messages } = useIntl()
  const [firstRender, setFirstRender] = useState(isVisible)

  useEffect(() => {
    if (firstRender && !isVisible) {
      setFirstRender(false)
    }
  }, [firstRender, isVisible])

  return (
    <StyledFooter
      isMobile={isMobile}
      isHide={!isVisible}
      isVisible={!firstRender && isVisible}
    >
      <Styledlink to='' title={String(messages.homepage)}>
        <Logo />
      </Styledlink>
    </StyledFooter>
  )
})

export default Footer
