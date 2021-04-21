import { MessageFormatElement } from 'intl-messageformat-parser'

export default interface JsonInterface {
  [key: string]: string
}

export interface IntlType {
  language: string
  defaultLanguage: string
  languages: string[]
  messages: Record<string, string> | Record<string, MessageFormatElement[]>
  routed: boolean
  originalPath: string
  redirect: boolean
}
