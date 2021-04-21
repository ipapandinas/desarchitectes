import { PageDataType } from 'types/app'
export interface PageProviderValue {
  pageData: PageDataType
  setPreview: (value: boolean) => void
  setWord: (word?: string) => void
  updateLang: (lang: string) => void
  updatePageData: (data: PageDataType) => void
}

// Actions names
export const LANG_UPDATE = 'LANG_UPDATE'
export const PAGE_DATA_UPDATE = 'PAGE_DATA_UPDATE'
export const PREVIEW_SET = 'PREVIEW_SET'
export const WORD_SET = 'WORD_SET'

// Actions interfaces
interface SetPreview {
  type: typeof PREVIEW_SET
  value: boolean
}

interface SetWord {
  type: typeof WORD_SET
  word: string | undefined
}

interface UpdateLang {
  type: typeof LANG_UPDATE
  lang: string
}

interface UpdatePageData {
  type: typeof PAGE_DATA_UPDATE
  data: PageDataType
}

export type PageActionTypes = SetPreview | SetWord | UpdateLang | UpdatePageData
