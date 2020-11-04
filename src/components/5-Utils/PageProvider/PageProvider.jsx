import React, { useCallback, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import { PageContext } from 'contexts';
import { useAppContext } from 'hooks';

import pageDataReducer, { PAGE_DATA_UPDATE } from './pageDataReducer';

export default function PageContextProvider(props) {
  const { pageData: pageDataProps, children } = props;
  const { setAppData } = useAppContext();
  const [pageData, dispatchPageData] = useReducer(
    pageDataReducer,
    pageDataProps
  );

  const updatePageData = useCallback(
    data =>
      dispatchPageData({
        data,
        type: PAGE_DATA_UPDATE,
      }),
    []
  );

  const { appData } = pageData;

  useEffect(() => {
    if (appData) {
      setAppData(appData);
    }
  }, [appData, setAppData]);

  return (
    <PageContext.Provider value={{ pageData, updatePageData }}>
      {children}
    </PageContext.Provider>
  );
}

PageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  pageData: PropTypes.object.isRequired,
};
