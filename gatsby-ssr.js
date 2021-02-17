/* eslint-disable react/jsx-filename-extension */
import React from 'react'

import AppContextProvider from './src/components/5-Utils/AppProvider/AppProvider'
import PageContextProvider from './src/components/5-Utils/PageProvider/PageProvider'
import UiContextProvider from './src/components/5-Utils/UiProvider/UiProvider'

import { initialAppData, initialUiData } from './src/settings/providers'

export const wrapRootElement = ({ element }) => (
  <UiContextProvider uiData={initialUiData}>
    <AppContextProvider appData={initialAppData}>{element}</AppContextProvider>
  </UiContextProvider>
)

export const wrapPageElement = ({ element, props }) => {
  const pageData = props.pageContext
  return (
    <PageContextProvider pageData={pageData}>{element}</PageContextProvider>
  )
}
