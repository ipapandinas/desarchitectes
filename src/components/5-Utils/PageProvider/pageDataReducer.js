export const PAGE_DATA_UPDATE = 'PAGE_DATA_UPDATE';

export default function pageDataReducer(state, action) {
  const { data } = action;
  switch (action.type) {
    case PAGE_DATA_UPDATE:
      return {
        ...state,
        ...data,
      };

    default:
      throw new Error();
  }
}
