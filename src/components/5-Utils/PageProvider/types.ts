import { AppData } from 'components/5-Utils/AppProvider/types'

export interface PageData {
  appData?: AppData
  lang?: string
  pageType?: string
  routeName?: string
}

export interface PageProviderValue {
  pageData: PageData
  updatePageData: (data: PageData) => void
}

// Actions names
export const PAGE_DATA_UPDATE = 'PAGE_DATA_UPDATE'

// Actions interfaces
interface UpdatePageData {
  type: typeof PAGE_DATA_UPDATE
  data: PageData
}

export type PageActionTypes = UpdatePageData
