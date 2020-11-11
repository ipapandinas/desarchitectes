import React, { FC } from 'react';
import classNames from 'classnames';

import Word from 'components/1-Atoms/Word/Word';

import { useAppContext, useDevice, usePageContext } from 'hooks';
import {
  LETTER_HEIGHT,
  LETTER_HEIGHT_LG,
  LETTER_HEIGHT_MD,
  LETTER_HEIGHT_XL,
} from 'settings/ui';
import { SuggestionsProps } from 'types/articles';

import './Preview.scss';

interface Props {
  index: number;
  sortAsc: boolean;
  suggestionsPrev: SuggestionsProps[];
  suggestions: SuggestionsProps[];
  suggestionsNext: SuggestionsProps[];
}

const Preview: FC<Props> = ({
  index,
  sortAsc,
  suggestionsPrev,
  suggestions,
  suggestionsNext,
}: Props) => {
  const { isDesktop, isTabletPortrait, isTabletLandscape } = useDevice();

  const { appData, togglePreview } = useAppContext()!;
  const { alphabet, preview } = appData;

  const { pageData } = usePageContext()!;
  const { lang } = pageData;

  // RESPONSIVE LETTER HEIGHT
  let LETTER_H = LETTER_HEIGHT;
  if (isDesktop) {
    LETTER_H = LETTER_HEIGHT_XL;
  }

  if (isTabletLandscape) {
    LETTER_H = LETTER_HEIGHT_LG;
  }

  if (isTabletPortrait) {
    LETTER_H = LETTER_HEIGHT_MD;
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
    >
      <div
        className={classNames('Preview__list', {
          'Preview__list--start': sortAsc,
        })}
        onMouseLeave={togglePreview}
        style={
          sortAsc
            ? {
                paddingTop: `calc(${LETTER_H} * ${index - nbSuggestionsPrev})`,
              }
            : {
                paddingBottom: `calc(${LETTER_H} * ${
                  alphabet.length - 1 - index - nbSuggestionsNext
                } )`,
              }
        }
      >
        <div
          className={classNames(
            'Suggestions__prev',
            lang === 'ES' ? 'Suggestions__prev--ES' : 'Suggestions__prev--FR'
          )}
        >
          {suggestionsPrev
            .map(({ routeName, title }) => (
              <Word label={title} key={title} route={routeName} />
            ))
            .slice(0, nbWordsPreview)}
        </div>
        <div
          className={classNames(
            'Suggestions',
            lang === 'es' ? 'Suggestions--ES' : 'Suggestions--FR'
          )}
        >
          {suggestions.map(({ routeName, title }) => (
            <Word active label={title} key={title} route={routeName} />
          ))}
        </div>
        <div
          className={classNames(
            'Suggestions__next',
            lang === 'es' ? 'Suggestions__next--ES' : 'Suggestions__next--FR'
          )}
        >
          {suggestionsNext
            .map(({ routeName, title }) => (
              <Word label={title} key={title} route={routeName} />
            ))
            .slice(0, nbWordsNext)}
        </div>
      </div>
    </div>
  );
};

export default Preview;
