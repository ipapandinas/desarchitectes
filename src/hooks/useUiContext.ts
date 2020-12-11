import { useContext } from 'react';

import { UiContext, UiContextProps } from 'contexts/uiContext';

export default function useUiContext(): UiContextProps {
  return useContext(UiContext);
}
