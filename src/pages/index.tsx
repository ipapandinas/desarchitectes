import React, { FC } from 'react'

import Resize from 'components/1-Atoms/Resize'
import Seo from 'components/1-Atoms/SEO'
import Language from 'components/3-Blocks/Language'
import WelcomeCover from 'components/3-Blocks/WelcomeCover'

import GlobalStyle from 'style/Global'

const IndexPage: FC = () => (
  <>
    <Seo />
    <GlobalStyle />
    <WelcomeCover />
    <Language />
    <Resize />
  </>
)

export default IndexPage
