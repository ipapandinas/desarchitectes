import { useContext } from 'react';

import { UiContext } from 'contexts/uiContext';
import { initialUiData } from 'settings/providers';
import Device from 'types/ui';

export default function useDevice(): Device {
  const { uiState } = useContext(UiContext)!;
  const { device } = uiState || initialUiData.device;
  return device;
}
