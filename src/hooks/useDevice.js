import { useContext } from 'react';

import { UiContext } from 'contexts';
import { initialUiData } from 'settings';

export default function useDevice() {
  const { uiData } = useContext(UiContext);
  const { device } = uiData || initialUiData.device;
  return device;
}
