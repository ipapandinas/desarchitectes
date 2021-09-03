/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'gatsby-plugin-react-intl' {
  import * as gatsby from 'gatsby'
  import React from 'react'

  export * from 'react-intl'

  import { IntlType } from 'types/intl'

  export class Link<TState> extends gatsby.Link<TState> {}
  export const navigate: typeof gatsby.navigate
  export const changeLocale: (language: string, to?: string) => void
  export const IntlContextProvider: React.Provider<IntlType>
}

declare module '*.png' {
  const content: any
  export default content
}
declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.scss'
declare module 'rss-parser/dist/rss-parser.min'
