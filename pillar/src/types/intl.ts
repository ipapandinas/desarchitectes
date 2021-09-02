export default interface JsonInterface {
  [key: string]: string
}

export interface IntlType {
  language: string
  defaultLanguage: string
  languages: string[]
  messages: Record<string, string>
  routed: boolean
  originalPath: string
  redirect: boolean
}
