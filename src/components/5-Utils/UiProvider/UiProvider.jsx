import React, { useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';

import { UiContext } from 'contexts';

import uiDataReducer, { DEVICE_UPDATE } from './uiReducer';

export default function UiContextProvider(props) {
  const { uiData: uiDataProps, children } = props;
  const [uiData, dispatchUiData] = useReducer(uiDataReducer, uiDataProps);

  const updateDevice = useCallback(
    media =>
      dispatchUiData({
        media,
        type: DEVICE_UPDATE,
      }),
    []
  );

  return (
    <UiContext.Provider value={{ uiData, updateDevice }}>
      {children}
    </UiContext.Provider>
  );
}

UiContextProvider.propTypes = {
  uiData: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
