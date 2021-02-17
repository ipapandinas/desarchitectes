import { APP_DATA_SET, AppActionTypes, AppData, WORD_SET } from './types'

export default function appDataReducer (
  state: AppData,
  action: AppActionTypes
): AppData {
  switch (action.type) {
    case APP_DATA_SET: {
      const { data } = action
      const { articles } = data
      const firstLetters = articles.map(({ title }) =>
        title.charAt(0).toUpperCase()
      )
      const letters = [...new Set(firstLetters)]
      return {
        ...state,
        ...data,
        letters
      }
    }

    case WORD_SET: {
      const { word } = action
      return {
        ...state,
        word
      }
    }

    default:
      throw new Error()
  }
}
