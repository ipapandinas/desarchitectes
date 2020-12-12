import React, { FC, ReactNode, useCallback, useReducer } from 'react';

import { AppContext } from 'contexts/appContext';

import appDataReducer from './reducer';
import { APP_DATA_SET, AppData, WORD_SET } from './types';

interface Props {
  appData: AppData;
  children: ReactNode;
}

const AppContextProvider: FC<Props> = ({
  appData: appDataProps,
  children,
}: Props) => {
  const [appData, dispatchAppData] = useReducer(appDataReducer, appDataProps);

  const setAppData = useCallback(
    (data) =>
      dispatchAppData({
        data,
        type: APP_DATA_SET,
      }),
    []
  );

  const setWord = useCallback(
    (word) =>
      dispatchAppData({
        word,
        type: WORD_SET,
      }),
    []
  );

  return (
    <AppContext.Provider
      value={{
        appData,
        setAppData,
        setWord,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
