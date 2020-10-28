import React, { useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';

import { PageContext } from 'contexts';

import pageDataReducer, { PAGE_DATA_UPDATE } from './pageDataReducer';

export default function PageContextProvider(props) {
  const { pageContext, children } = props;
  const [pageData, dispatchPageData] = useReducer(pageDataReducer, pageContext);

  const updatePageData = useCallback(
    data =>
      dispatchPageData({
        data,
        type: PAGE_DATA_UPDATE,
      }),
    []
  );

  return (
    <PageContext.Provider value={{ pageData, updatePageData }}>
      {children}
    </PageContext.Provider>
  );
}

PageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.object.isRequired,
};
