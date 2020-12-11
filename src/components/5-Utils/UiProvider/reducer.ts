import { getMediaInfo } from 'services/ui';

import { DEVICE_UPDATE, UiActionTypes, UiState } from './types';

export default function uiDataReducer(
  state: UiState,
  action: UiActionTypes
): UiState {
  switch (action.type) {
    case DEVICE_UPDATE: {
      const { media } = action;
      return {
        ...state,
        device: getMediaInfo(media),
      };
    }

    default:
      throw new Error();
  }
}
