import {
  APP_RESET,
  APP_SET_ARTICLES,
  APP_SET_LANGUAGE,
  APP_SET_LETTER,
  APP_SET_WORD,
  APP_TOGGLE_PREVIEW,
  alphabetES,
  alphabetFR,
} from './types';

export const appDefaultState = {
  alphabet: alphabetFR,
  articles: [],
  index: null,
  language: undefined,
  letter: null,
  lettersUsed: { es: [], fr: [] },
  preview: false,
  sortAsc: true,
  suggestionsPrev: [],
  suggestions: [],
  suggestionsNext: [],
  word: undefined,
};

function setSuggestions(alphabet, articles, language, letter) {
  const index = alphabet.indexOf(letter);

  return [
    articles
      .filter(
        article =>
          language &&
          article[`title_${language}`].charAt(0).toUpperCase() ===
            alphabet[index - 1]
      )
      .map(article => {
        return {
          route: article.routeName,
          word: article[`title_${language}`],
        };
      }), // suggestionsPrev
    articles
      .filter(
        article =>
          language &&
          article[`title_${language}`].charAt(0).toUpperCase() ===
            alphabet[index]
      )
      .map(article => {
        return {
          route: article.routeName,
          word: article[`title_${language}`],
        };
      }), // suggestions
    articles
      .filter(
        article =>
          language &&
          article[`title_${language}`].charAt(0).toUpperCase() ===
            alphabet[index + 1]
      )
      .map(article => {
        return {
          route: article.routeName,
          word: article[`title_${language}`],
        };
      }), // suggestionsNext
  ];
}

export function appReducer(state = appDefaultState, action) {
  switch (action.type) {
    case APP_RESET: {
      return {
        ...state,
        index: null,
        letter: null,
        preview: false,
        sortAsc: true,
        suggestionsPrev: [],
        suggestions: [],
        suggestionsNext: [],
        word: undefined,
      };
    }
    case APP_SET_ARTICLES: {
      const es = [];
      const fr = [];
      action.articles.forEach(article => {
        if (article && article.published) {
          es.push(article.title_ES.charAt(0).toUpperCase());
          fr.push(article.title_FR.charAt(0).toUpperCase());
        }
      });
      const lettersUsed = { es, fr };

      const onlineArticles = action.articles.filter(
        ({ published }) => published
      );

      return {
        ...state,
        articles: onlineArticles,
        lettersUsed,
      };
    }
    case APP_SET_LANGUAGE: {
      const alphabet = action.language === 'ES' ? alphabetES : alphabetFR;
      return {
        ...state,
        alphabet,
        language: action.language,
      };
    }
    case APP_SET_LETTER: {
      const prevState = { ...state };
      const suggestions = setSuggestions(
        prevState.alphabet,
        prevState.articles,
        prevState.language,
        action.letter
      );
      return {
        ...state,
        index: state.alphabet.indexOf(action.letter),
        letter: action.letter,
        preview: true,
        sortAsc: state.alphabet.indexOf(action.letter) < 13,
        suggestionsPrev: suggestions[0],
        suggestions: suggestions[1],
        suggestionsNext: suggestions[2],
      };
    }
    case APP_SET_WORD: {
      const letter = action.word && action.word.charAt(0).toUpperCase();
      return {
        ...state,
        letter,
        index: state.alphabet.indexOf(letter),
        word: action.word,
      };
    }
    case APP_TOGGLE_PREVIEW: {
      const prevState = { ...state };
      return {
        ...state,
        preview: !prevState.preview,
      };
    }
    default:
      return state;
  }
}
