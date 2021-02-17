import { createContext } from 'react'

import { UiProviderValue } from 'components/5-Utils/UiProvider/types'

export type UiContextProps = UiProviderValue | undefined

export const UiContext = createContext<UiContextProps>(undefined)
