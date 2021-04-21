import { getMessages } from 'services/translations'
import { PageDataType } from 'types/app'

import {
  LANG_UPDATE,
  PAGE_DATA_UPDATE,
  PREVIEW_SET,
  WORD_SET,
  PageActionTypes
} from './types'

export default function pageDataReducer (
  state: PageDataType,
  action: PageActionTypes
): PageDataType {
  switch (action.type) {
    case LANG_UPDATE: {
      const { lang } = action
      return {
        ...state,
        intl: {
          ...state.intl,
          language: lang,
          messages: getMessages('./src/intl/', lang)
        }
      }
    }
    case PAGE_DATA_UPDATE: {
      const { data } = action
      return {
        ...state,
        ...data
      }
    }

    case PREVIEW_SET: {
      const { value } = action
      return {
        ...state,
        appData: {
          ...state.appData,
          isPreview: value
        }
      }
    }

    case WORD_SET: {
      const { word } = action
      return {
        ...state,
        appData: {
          ...state.appData,
          word
        }
      }
    }

    default:
      throw new Error()
  }
}
