import React, { FC } from 'react';
import classnames from 'classnames';

import Suggestions from 'components/2-Molecules/Suggestions/Suggestions';

import { useAppContext } from 'hooks';
import { SuggestionsProps } from 'types/articles';

import styles from './Preview.module.scss';

const MAX_SUGGESTIONS = 5;

interface Props {
  runLetterIdx: number;
  runLetterRef: HTMLButtonElement | null;
  results: SuggestionsProps[];
  sortAsc: boolean;
}

const Preview: FC<Props> = ({
  runLetterIdx: idx,
  runLetterRef: ref,
  results,
  sortAsc,
}: Props) => {
  const { appData, togglePreview } = useAppContext()!;
  const { alphabet, preview } = appData;

  if (!ref) {
    return null;
  }

  const { clientHeight, offsetTop } = ref;
  const [suggestionsPrev, suggestions, suggestionsNext] = results;
  const LAST_IDX = alphabet.length - 1;

  const sPrevLimit = idx < MAX_SUGGESTIONS ? idx : MAX_SUGGESTIONS;
  const sNextLimit =
    idx > LAST_IDX - MAX_SUGGESTIONS ? LAST_IDX - idx : MAX_SUGGESTIONS;

  const nbS = suggestions.length;
  const nbSPrev = suggestionsPrev.slice(0, MAX_SUGGESTIONS).length;
  const nbSNext = suggestionsNext.slice(0, MAX_SUGGESTIONS).length;

  const paddingTop = sortAsc
    ? offsetTop - nbSPrev * clientHeight
    : offsetTop - (nbS - 1 + nbSPrev) * clientHeight;

  return (
    <div
      className={classnames(
        styles.root,
        preview ? styles.visible : styles.hide
      )}
    >
      <button
        className={styles.close}
        type="button"
        aria-label="Close preview"
        onClick={togglePreview}
      />
      <div
        onMouseLeave={togglePreview}
        style={{
          paddingTop,
        }}
      >
        {nbSPrev > 0 && (
          <Suggestions list={suggestionsPrev} limit={sPrevLimit} />
        )}
        <Suggestions active list={suggestions} />
        {nbSNext > 0 && (
          <Suggestions list={suggestionsNext} limit={sNextLimit} />
        )}
      </div>
    </div>
  );
};

export default Preview;
