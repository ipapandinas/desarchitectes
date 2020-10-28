import {
  APP_RESET,
  APP_SET_ARTICLES,
  APP_SET_LETTER,
  APP_SET_WORD,
  APP_TOGGLE_PREVIEW,
  APP_UPDATE_DEVICE,
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

export function updateDevice(media) {
  return {
    media,
    type: APP_UPDATE_DEVICE,
  };
}
