import React, { useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from 'contexts';

import appDataReducer, {
  APP_DATA_SET,
  LETTER_SET,
  PREVIEW_TOGGLE,
  WORD_SET,
} from './appDataReducer';

export default function AppContextProvider(props) {
  const { appData: appDataProps, children } = props;
  const [appData, dispatchAppData] = useReducer(appDataReducer, appDataProps);

  const setAppData = useCallback(
    data =>
      dispatchAppData({
        data,
        type: APP_DATA_SET,
      }),
    []
  );

  const setLetter = useCallback(
    runLetter =>
      dispatchAppData({
        runLetter,
        type: LETTER_SET,
      }),
    []
  );

  const setWord = useCallback(
    word =>
      dispatchAppData({
        word,
        type: WORD_SET,
      }),
    []
  );

  const togglePreview = useCallback(
    () =>
      dispatchAppData({
        type: PREVIEW_TOGGLE,
      }),
    []
  );

  return (
    <AppContext.Provider
      value={{ appData, setAppData, setLetter, setWord, togglePreview }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  appData: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
