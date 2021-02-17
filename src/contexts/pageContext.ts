import { createContext } from 'react'

import { PageProviderValue } from 'components/5-Utils/PageProvider/types'

export type PageContextProps = PageProviderValue | undefined

export const PageContext = createContext<PageContextProps>(undefined)
