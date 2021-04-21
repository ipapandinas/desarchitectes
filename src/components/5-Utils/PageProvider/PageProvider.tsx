import React, {
  FC,
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useReducer
} from 'react'

import { PageContext } from 'contexts/pageContext'
import { PageDataType } from 'types/app'

import pageDataReducer from './reducer'
import { LANG_UPDATE, PAGE_DATA_UPDATE, PREVIEW_SET, WORD_SET } from './types'

interface Props {
  pageData: PageDataType
  children: ReactNode
}

const PageContextProvider: FC<Props> = memo(
  ({ pageData: pageDataProps, children }) => {
    const [pageData, dispatchPageData] = useReducer(
      pageDataReducer,
      pageDataProps
    )

    const setPreview = useCallback(
      (value) =>
        dispatchPageData({
          value,
          type: PREVIEW_SET
        }),
      []
    )

    const setWord = useCallback(
      (word) =>
        dispatchPageData({
          word,
          type: WORD_SET
        }),
      []
    )

    const updateLang = useCallback(
      (lang) =>
        dispatchPageData({
          lang,
          type: LANG_UPDATE
        }),
      []
    )

    const updatePageData = useCallback(
      (data) =>
        dispatchPageData({
          data,
          type: PAGE_DATA_UPDATE
        }),
      []
    )

    useEffect(() => {
      updatePageData(pageDataProps)
    }, [pageDataProps])

    return (
      <PageContext.Provider
        value={{
          pageData,
          setPreview,
          setWord,
          updateLang,
          updatePageData
        }}
      >
        {children}
      </PageContext.Provider>
    )
  }
)

export default PageContextProvider
