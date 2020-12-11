import Device from 'types/ui';

export interface UiState {
  device: Device;
}

export interface UiProviderValue {
  uiState: UiState;
  updateDevice: (media: string) => void;
}

// Actions names
export const DEVICE_UPDATE = 'DEVICE_UPDATE';

// Actions interfaces
interface UpdateDevice {
  type: typeof DEVICE_UPDATE;
  media: string;
}

export type UiActionTypes = UpdateDevice;
