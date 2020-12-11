import React, { FC, ReactNode, useCallback, useReducer } from 'react';

import { UiContext } from 'contexts/uiContext';

import uiDataReducer from './reducer';
import { DEVICE_UPDATE, UiState } from './types';

interface Props {
  uiState: UiState;
  children: ReactNode;
}

const UiContextProvider: FC<Props> = ({
  uiState: uiStateProps,
  children,
}: Props) => {
  const [uiState, dispatchUiData] = useReducer(uiDataReducer, uiStateProps);

  const updateDevice = useCallback(
    (media) =>
      dispatchUiData({
        media,
        type: DEVICE_UPDATE,
      }),
    []
  );

  return (
    <UiContext.Provider
      value={{
        uiState,
        updateDevice,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiContextProvider;
