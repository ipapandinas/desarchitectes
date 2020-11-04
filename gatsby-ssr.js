/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';

import AppContextProvider from './src/components/5-Utils/AppProvider/AppProvider';
import PageContextProvider from './src/components/5-Utils/PageProvider/PageProvider';
import UiContextProvider from './src/components/5-Utils/UiProvider/UiProvider';
import { store } from './src/redux/store';
import { initialAppData, initialUiData } from './src/settings';

export const wrapRootElement = ({ element }) => {
  return (
    <AppContextProvider appData={initialAppData}>
      <UiContextProvider uiData={initialUiData}>
        <Provider store={store}>{element}</Provider>
      </UiContextProvider>
    </AppContextProvider>
  );
};

export const wrapPageElement = ({ element, props }) => {
  const pageData = props.pageContext;
  return (
    <PageContextProvider pageData={pageData}>{element}</PageContextProvider>
  );
};
