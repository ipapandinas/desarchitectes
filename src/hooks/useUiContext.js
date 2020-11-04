import { useContext } from 'react';

import { UiContext } from 'contexts';

export default function useUiContext() {
  return useContext(UiContext);
}
