import { useContext } from 'react';

import { AppContext } from 'contexts';

export default function useAppContext() {
  return useContext(AppContext);
}
