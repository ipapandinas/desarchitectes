import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import {
  LETTER_HEIGHT,
  LETTER_HEIGHT_LG,
  LETTER_HEIGHT_LG__ES,
  LETTER_HEIGHT_MD,
  LETTER_HEIGHT_MD__ES,
  LETTER_HEIGHT_XL,
  LETTER_HEIGHT_XL__ES,
  LETTER_HEIGHT__ES,
} from '../../../settings/ui';

import { useApp, useDevice } from '../../../hooks';
import { togglePreview } from '../../../redux';

import { Word } from '../../1-Atoms';

import './Preview.scss';

export default function Preview() {
  const {
    alphabet,
    index,
    language,
    preview,
    sortAsc,
    suggestionsPrev,
    suggestions,
    suggestionsNext,
  } = useApp();
  const {
    isDesktop,
    isTabletPortrait,
    isTabletLandscape,
  } = useDevice();
  const dispatch = useDispatch();

  // RESPONSIVE LETTER HEIGHT
  let LETTER_H = language === 'ES' ? LETTER_HEIGHT__ES : LETTER_HEIGHT;
  if (isDesktop) {
    LETTER_H = language === 'ES' ? LETTER_HEIGHT_XL__ES : LETTER_HEIGHT_XL;
  }

  if (isTabletLandscape) {
    LETTER_H = language === 'ES' ? LETTER_HEIGHT_LG__ES : LETTER_HEIGHT_LG;
  }

  if (isTabletPortrait) {
    LETTER_H = language === 'ES' ? LETTER_HEIGHT_MD__ES : LETTER_HEIGHT_MD;
  }

  // SUGGESTIONS
  const nbWordsPreview = index < 6 ? index : 5;
  const nbWordsNext = index > 20 ? 25 - index : 5;
  const nbSuggestionsPrev =
    suggestionsPrev.length <= 5 ? suggestionsPrev.length : 5;
  const nbSuggestionsNext =
    suggestionsNext.length <= 5 ? suggestionsNext.length : 5;

  return (
    <div
      className={classNames(
        'Preview',
        preview ? 'Preview--visible' : 'Preview--hide'
      )}
      role="button"
      tabIndex={0}
      onClick={() => {
        dispatch(togglePreview());
      }}
      onKeyPress={() => {
        dispatch(togglePreview());
      }}
    >
      <div
        className={classNames('Preview__list', {
          'Preview__list--start': sortAsc,
        })}
        onMouseLeave={() => {
          dispatch(togglePreview());
        }}
        style={
          sortAsc
            ? {
                paddingTop: `calc(${LETTER_H} * ${index - nbSuggestionsPrev})`,
              }
            : {
                paddingBottom: `calc(${LETTER_H} * ${alphabet.length -
                  1 -
                  index -
                  nbSuggestionsNext} )`,
              }
        }
      >
        <div
          className={classNames(
            'Suggestions__prev',
            language === 'ES'
              ? 'Suggestions__prev--ES'
              : 'Suggestions__prev--FR'
          )}
        >
          {suggestionsPrev
            .map(({ route, word }) => (
              <Word label={word} key={word} route={route} />
            ))
            .slice(0, nbWordsPreview)}
        </div>
        <div
          className={classNames(
            'Suggestions',
            language === 'ES' ? 'Suggestions--ES' : 'Suggestions--FR'
          )}
        >
          {suggestions.map(({ route, word }) => (
            <Word active label={word} key={word} route={route} />
          ))}
        </div>
        <div
          className={classNames(
            'Suggestions__next',
            language === 'ES'
              ? 'Suggestions__next--ES'
              : 'Suggestions__next--FR'
          )}
        >
          {suggestionsNext
            .map(({ route, word }) => (
              <Word label={word} key={word} route={route} />
            ))
            .slice(0, nbWordsNext)}
        </div>
      </div>
    </div>
  );
}
