import {
  APP_RESET,
  APP_SET_ARTICLES,
  APP_SET_LANGUAGE,
  APP_SET_LETTER,
  APP_SET_WORD,
  APP_TOGGLE_PREVIEW,
} from './types';

export function reset() {
  return {
    type: APP_RESET,
  };
}

export function setArticles(articles) {
  return {
    articles,
    type: APP_SET_ARTICLES,
  };
}

export function setLanguage(language) {
  return {
    language,
    type: APP_SET_LANGUAGE,
  };
}

export function setLetter(letter) {
  return {
    letter,
    type: APP_SET_LETTER,
  };
}

export function setWord(word) {
  return {
    word,
    type: APP_SET_WORD,
  };
}

export function togglePreview() {
  return {
    type: APP_TOGGLE_PREVIEW,
  };
}
