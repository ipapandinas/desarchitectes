import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
} from 'react';

import { PageContext } from 'contexts/pageContext';
import { useAppContext } from 'hooks';

import pageDataReducer from './reducer';
import { PAGE_DATA_UPDATE, PageData } from './types';

interface Props {
  pageData: PageData;
  children: ReactNode;
}

const PageContextProvider: FC<Props> = ({
  pageData: pageDataProps,
  children,
}: Props) => {
  const { setAppData } = useAppContext()!;
  const [pageData, dispatchPageData] = useReducer(
    pageDataReducer,
    pageDataProps
  );

  const updatePageData = useCallback(
    (data) =>
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
    <PageContext.Provider
      value={{
        pageData,
        updatePageData,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
