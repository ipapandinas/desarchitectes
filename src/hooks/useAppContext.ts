import { useContext } from 'react'

import { AppContext, AppContextProps } from 'contexts/appContext'

export default function useAppContext (): AppContextProps {
  return useContext(AppContext)
}
