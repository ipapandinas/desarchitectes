import { getMediaInfo } from 'services';

export const DEVICE_UPDATE = 'DEVICE_UPDATE';

export default function uiDataReducer(state, action) {
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
