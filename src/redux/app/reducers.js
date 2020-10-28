import { getMediaInfo } from 'services';

import {
  APP_RESET,
  APP_SET_ARTICLES,
  APP_SET_LETTER,
  APP_SET_WORD,
  APP_TOGGLE_PREVIEW,
  APP_UPDATE_DEVICE,
  alphabetFR,
} from './types';

export const appDefaultState = {
  alphabet: alphabetFR,
  articles: [],
  device: {
    isAny: false,
    isDesktop: false,
    isMobile: false,
    isMobileXs: false,
    isMobileSm: false,
    isTablet: false,
    isTabletPortrait: false,
    isTabletLandscape: false,
  },
  index: null,
  letter: null,
  lettersUsed: { es: [], fr: [] },
  preview: false,
  sortAsc: true,
  suggestionsPrev: [],
  suggestions: [],
  suggestionsNext: [],
  word: undefined,
};

function setSuggestions(alphabet, articles, letter) {
  const index = alphabet.indexOf(letter);

  return [
    articles.filter(
      ({ title }) => title.charAt(0).toUpperCase() === alphabet[index - 1]
    ), // suggestionsPrev
    articles.filter(
      ({ title }) => title.charAt(0).toUpperCase() === alphabet[index]
    ), // suggestions
    articles.filter(
      ({ title }) => title.charAt(0).toUpperCase() === alphabet[index + 1]
    ), // suggestionsNext
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
      const { articles } = action;

      const onlineArticles = articles.filter(
        ({ published, title_ES: titleES, title_FR: titleFR }) => {
          if (published) {
            es.push(titleES.charAt(0).toUpperCase());
            fr.push(titleFR.charAt(0).toUpperCase());
          }

          return published;
        }
      );

      const lettersUsed = { es, fr };

      return {
        ...state,
        articles: onlineArticles,
        lettersUsed,
      };
    }
    case APP_SET_LETTER: {
      const { letter } = action;
      const suggestions = setSuggestions(
        state.alphabet,
        state.articles,
        action.letter
      );
      return {
        ...state,
        index: state.alphabet.indexOf(letter),
        letter: action.letter,
        preview: true,
        sortAsc: state.alphabet.indexOf(letter) < 13,
        suggestionsPrev: suggestions[0],
        suggestions: suggestions[1],
        suggestionsNext: suggestions[2],
      };
    }
    case APP_SET_WORD: {
      const { word } = action;
      const letter = word && word.charAt(0).toUpperCase();
      return {
        ...state,
        letter,
        index: state.alphabet.indexOf(letter),
        word: action.word,
      };
    }
    case APP_TOGGLE_PREVIEW: {
      return {
        ...state,
        preview: !state.preview,
      };
    }
    case APP_UPDATE_DEVICE: {
      const { media } = action;
      return {
        ...state,
        device: getMediaInfo(media),
      };
    }
    default:
      return state;
  }
}
