import React, { FC, ReactNode, useMemo, useRef, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Resize from 'components/1-Atoms/Resize'
import Alphabet from 'components/3-Blocks/Alphabet'
import Footer from 'components/3-Blocks/Footer'

import { useDevice, usePageContext } from 'hooks'
import GlobalStyle from 'style/Global'
import themes from 'theme'

import 'style/font.scss'

interface Props {
  children: ReactNode
}

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const App = styled.div`
  overflow: hidden;
  position: relative;
`

const Content = styled.div`
  height: 100%;
  box-sizing: content-box;
  margin: 0 5rem 0 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  line-height: 1.4;

  ${({ theme }) => `
    ${theme.mediaQueries.sm} {
      line-height: 1.6;
      margin: 0 8rem 0 0;
    }
  `}
`

const offsetDeltaMobile = 200
const offsetDeltaOther = 400
const offsetTrigger = 500

const Layout: FC<Props> = ({ children }) => {
  const device = useDevice()
  const isLaptop = device.isDesktop || device.isTabletLandscape

  const { pageData } = usePageContext()
  const lang = pageData.lang
  const theme = themes[lang as keyof typeof themes]

  const [isFooterVisible, setFooterVisible] = useState(true)
  const [, setOffsetTop] = useState(0)

  const contentRef = useRef<HTMLDivElement>(null)
  const offsetDelta = useMemo(
    () => (device.isMobile ? offsetDeltaMobile : offsetDeltaOther),
    [device?.isMobile]
  )

  const handleScroll = (): void => {
    const element = contentRef?.current
    if (element !== null) {
      const { scrollTop } = element
      if (scrollTop > offsetTrigger) {
        setOffsetTop((prevOffset) => {
          if (prevOffset > scrollTop + offsetDelta) {
            setFooterVisible(true)
            return scrollTop
          }
          if (prevOffset > scrollTop) {
            return prevOffset
          }
          if (isFooterVisible) {
            setFooterVisible(false)
          }
          return scrollTop
        })
      } else {
        setFooterVisible(true)
      }
    }
  }

  const content = useMemo(
    () => (
      <Content onScroll={handleScroll} ref={contentRef}>
        {children}
      </Content>
    ),
    [children]
  )

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledMain>
        <App>
          {content}
          <Alphabet />
        </App>

        {!isLaptop && <Footer isVisible={isFooterVisible} />}
      </StyledMain>

      <Resize />
    </ThemeProvider>
  )
}

export default Layout
