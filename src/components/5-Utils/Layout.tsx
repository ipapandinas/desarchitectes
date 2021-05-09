import React, { FC, ReactNode, useRef } from 'react'
import { animated } from 'react-spring'
import styled, { ThemeProvider } from 'styled-components'
import { IntlProvider, IntlContextProvider } from 'gatsby-plugin-intl'

import Resize from 'components/1-Atoms/Resize'
import Alphabet from 'components/3-Blocks/Alphabet'
import Footer from 'components/3-Blocks/Footer'
import PageContextProvider from 'components/5-Utils/PageProvider/PageProvider'

import { useDevice } from 'hooks'
import GlobalStyle from 'style/Global'
import themes from 'theme'
import { PageDataType } from 'types/app'

import 'style/font.scss'

interface Props {
  children: ReactNode
  pageData: PageDataType
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

const Content = styled(animated.div)`
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
// TO DO: Handle footer hide on scroll
// const offsetDeltaMobile = 200
// const offsetDeltaOther = 400
// const offsetTrigger = 500

const Layout: FC<Props> = ({ children, pageData }) => {
  const device = useDevice()
  const isLaptop = device.isDesktop || device.isTabletLandscape

  const intl = pageData.intl
  const { defaultLanguage, language: lang, messages } = intl
  const theme = themes[lang as keyof typeof themes]

  // const [isFooterVisible, setFooterVisible] = useState(true)
  // const [, setOffsetTop] = useState(0)

  const contentRef = useRef<HTMLDivElement>(null)
  // const offsetDelta = useMemo(
  //   () => (device.isMobile ? offsetDeltaMobile : offsetDeltaOther),
  //   [device?.isMobile]
  // )

  // const handleScroll = (): void => {
  //   const element = contentRef?.current
  //   if (element !== null && !isLaptop) {
  //     const { scrollTop } = element
  //     if (scrollTop > offsetTrigger) {
  //       setOffsetTop((prevOffset) => {
  //         if (prevOffset > scrollTop + offsetDelta) {
  //           setFooterVisible(true)
  //           return scrollTop
  //         }
  //         if (prevOffset > scrollTop) {
  //           return prevOffset
  //         }
  //         if (isFooterVisible) {
  //           setFooterVisible(false)
  //         }
  //         return scrollTop
  //       })
  //     } else {
  //       setFooterVisible(true)
  //     }
  //   }
  // }
  console.log('Render Layout')

  return (
    <IntlProvider
      locale={lang}
      defaultLocale={defaultLanguage}
      messages={messages}
    >
      <IntlContextProvider value={intl}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledMain>
            <App>
              <PageContextProvider pageData={pageData}>
                <Content
                  id='content'
                  ref={contentRef}
                  style={{
                    ...(pageData?.appData?.alphabet === undefined && {
                      margin: 0
                    })
                  }}
                >
                  {children}
                </Content>
                <Alphabet />
              </PageContextProvider>
            </App>

            {!isLaptop && <Footer isVisible />}
          </StyledMain>

          <Resize />
        </ThemeProvider>
      </IntlContextProvider>
    </IntlProvider>
  )
}

export default Layout
