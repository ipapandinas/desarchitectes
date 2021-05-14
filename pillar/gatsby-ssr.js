/* eslint-disable react/jsx-filename-extension */
import React from 'react'

import Layout from './src/components/5-Utils/Layout'
import UiContextProvider from './src/components/5-Utils/UiProvider/UiProvider'

import { initialUiData } from './src/settings/providers'

export const wrapRootElement = ({ element }) => (
  <UiContextProvider uiData={initialUiData}>{element}</UiContextProvider>
)

export const wrapPageElement = ({ element, props }) => (
  <Layout pageData={props.pageContext}>{element}</Layout>
)
