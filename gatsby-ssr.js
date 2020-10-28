/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';

import PageContextProvider from './src/components/5-Utils/PageProvider/PageProvider';
import { store } from './src/redux/store';

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <PageContextProvider pageContext={props.pageContext}>
      {element}
    </PageContextProvider>
  );
};
