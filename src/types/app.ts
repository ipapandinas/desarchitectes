import { ArticlesProps } from 'types/articles'
import { IntlType } from 'types/intl'
export interface AppDataType {
  alphabet: string[]
  articles: ArticlesProps[]
  isPreview: boolean
  letters: string[]
  word?: string
}
export interface PageDataType {
  appData: AppDataType
  intl: IntlType
  pageType?: string
  routeName?: string
}
