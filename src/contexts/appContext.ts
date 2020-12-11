import { createContext } from 'react';

import { AppProviderValue } from 'components/5-Utils/AppProvider/types';

export type AppContextProps = AppProviderValue | undefined;

export const AppContext = createContext<AppContextProps>(undefined!);
