export const PAGE_DATA_UPDATE = 'PAGE_DATA_UPDATE';

export default function pageDataReducer(state, action) {
  switch (action.type) {
    case PAGE_DATA_UPDATE:
      return {
        ...state,
        ...action.data,
      };

    default:
      throw new Error();
  }
}
