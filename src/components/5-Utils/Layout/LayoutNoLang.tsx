import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import Resize from 'components/1-Atoms/Resize'
import Language from 'components/3-Blocks/Language'
import WelcomeCover from 'components/3-Blocks/WelcomeCover'

import GlobalStyle from 'style/Global'
import themes from 'theme'

import 'style/font.scss'

const LayoutNoLang: FC = () => {
  const theme = themes.default

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WelcomeCover />
      <Language />
      <Resize />
    </ThemeProvider>
  )
}

export default LayoutNoLang
