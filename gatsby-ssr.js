/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';

import AppContextProvider from './src/components/5-Utils/AppProvider/AppProvider';
import PageContextProvider from './src/components/5-Utils/PageProvider/PageProvider';
import { store } from './src/redux/store';
import { initialAppData } from './src/settings';

export const wrapRootElement = ({ element }) => {
  return (
    <AppContextProvider appData={initialAppData}>
      <Provider store={store}>{element}</Provider>
    </AppContextProvider>
  );
};

export const wrapPageElement = ({ element, props }) => {
  const pageData = props.pageContext;
  return (
    <PageContextProvider pageData={pageData}>{element}</PageContextProvider>
  );
};
