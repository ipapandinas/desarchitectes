/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';

import { store } from './src/redux/store';

// eslint-disable-next-line react/prop-types
export const wrapPageElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
