import { PAGE_DATA_UPDATE, PageActionTypes, PageData } from './types'

export default function pageDataReducer (
  state: PageData,
  action: PageActionTypes
): PageData {
  switch (action.type) {
    case PAGE_DATA_UPDATE: {
      const { data } = action
      return {
        ...state,
        ...data
      }
    }

    default:
      throw new Error()
  }
}
