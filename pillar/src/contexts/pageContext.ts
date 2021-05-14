import { createContext } from 'react'

import { PageProviderValue } from 'components/5-Utils/PageProvider/types'
import { initialPageData } from 'settings/providers'

export type PageContextProps = PageProviderValue

export const PageContext = createContext<PageContextProps>(initialPageData)
