export const APP_DATA_SET = 'APP_DATA_SET';
export const LETTER_SET = 'LETTER_SET';
export const PREVIEW_TOGGLE = 'PREVIEW_TOGGLE';
export const WORD_SET = 'WORD_SET';

export default function appDataReducer(state, action) {
  switch (action.type) {
    case APP_DATA_SET: {
      const { data } = action;
      const { articles } = data;
      const firstLetters = articles.map(({ title }) =>
        title.charAt(0).toUpperCase()
      );
      const letters = [...new Set(firstLetters)];
      return {
        ...state,
        ...data,
        letters,
      };
    }

    case LETTER_SET: {
      const { runLetter } = action;
      return {
        ...state,
        preview: true,
        runLetter,
      };
    }

    case PREVIEW_TOGGLE:
      return {
        ...state,
        preview: !state.preview,
      };

    case WORD_SET: {
      const { word } = action;
      return {
        ...state,
        preview: false,
        word,
      };
    }

    default:
      throw new Error();
  }
}
