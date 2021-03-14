import { createContext } from 'react'

import { AppProviderValue } from 'components/5-Utils/AppProvider/types'
import { initialAppData } from 'settings/providers'

export type AppContextProps = AppProviderValue

export const AppContext = createContext<AppContextProps>({
  appData: initialAppData,
  setAppData: () => {},
  setWord: () => {}
})
