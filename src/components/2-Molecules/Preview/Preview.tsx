import React, { FC, useCallback, useMemo } from 'react';
import classnames from 'classnames';

import Suggestions from 'components/2-Molecules/Suggestions/Suggestions';

import { useAppContext } from 'hooks';
import { SuggestionsProps } from 'types/articles';

import styles from './Preview.module.scss';

const MAX_SUGGESTIONS = 5;

interface Props {
  isPreview: boolean;
  resetLetter: () => void;
  results: SuggestionsProps[];
  runLetterIdx: number;
  runLetterRef: HTMLButtonElement | null;
  setPreview: (value: boolean) => void;
  sortAsc: boolean;
}

const Preview: FC<Props> = ({
  isPreview,
  resetLetter,
  results,
  runLetterIdx: idx,
  runLetterRef: ref,
  setPreview,
  sortAsc,
}: Props) => {
  const { appData } = useAppContext()!;
  const { alphabet } = appData;

  const [suggestionsPrev, suggestions, suggestionsNext] = results;
  const LAST_IDX = useMemo(() => alphabet.length - 1, [alphabet.length]);

  const sPrevLimit = useMemo(
    () => (idx < MAX_SUGGESTIONS ? idx : MAX_SUGGESTIONS),
    [idx]
  );
  const sNextLimit = useMemo(
    () => (idx > LAST_IDX - MAX_SUGGESTIONS ? LAST_IDX - idx : MAX_SUGGESTIONS),
    [LAST_IDX, idx]
  );

  const nbS = useMemo(() => suggestions.length, [suggestions.length]);
  const nbSPrev = useMemo(
    () => suggestionsPrev.slice(0, MAX_SUGGESTIONS).length,
    [suggestionsPrev]
  );
  const nbSNext = useMemo(
    () => suggestionsNext.slice(0, MAX_SUGGESTIONS).length,
    [suggestionsNext]
  );

  const clientHeight = useMemo(() => ref?.clientHeight ?? 0, [ref]);
  const offsetTop = useMemo(() => ref?.offsetTop ?? 0, [ref]);
  const paddingTop = useMemo(() => {
    if (sortAsc) {
      return offsetTop - nbSPrev * clientHeight;
    }
    return offsetTop - (nbS - 1 + nbSPrev) * clientHeight;
  }, [clientHeight, nbS, nbSPrev, offsetTop, sortAsc]);

  const handlePreviewOut = useCallback(() => {
    setPreview(false);
    setTimeout(() => resetLetter(), 500);
  }, [resetLetter, setPreview]);

  return (
    <div
      className={classnames(
        styles.preview,
        isPreview ? styles.visible : styles.hide
      )}
    >
      <div className={styles.root}>
        <button
          className={styles.close}
          type="button"
          aria-label="Close preview"
          onClick={handlePreviewOut}
        />
        <div
          onMouseLeave={handlePreviewOut}
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
    </div>
  );
};

export default Preview;
