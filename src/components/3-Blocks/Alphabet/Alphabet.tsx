import React, { FC, useMemo, useRef } from 'react';

import Letter from 'components/1-Atoms/Letter/Letter';
import Preview from 'components/2-Molecules/Preview/Preview';

import { useAppContext } from 'hooks';
import { SuggestionsProps } from 'types/articles';

import styles from './Alphabet.module.scss';

const Alphabet: FC = () => {
  const { appData } = useAppContext()!;
  const { alphabet, articles, preview, runLetter } = appData;

  const defaultRef = useRef<HTMLButtonElement>(null);
  const refs = useRef<(HTMLButtonElement | null)[]>(
    Array(alphabet.length).fill(defaultRef)
  );

  const runLetterIdx = runLetter ? alphabet.indexOf(runLetter) : -1;
  const runLetterRef = refs.current[runLetterIdx];
  const sortAsc = runLetterIdx < 13;

  const suggestions: SuggestionsProps[] = useMemo(() => {
    const sPrev: SuggestionsProps = [];
    const s: SuggestionsProps = [];
    const sNext: SuggestionsProps = [];

    if (runLetterIdx !== -1) {
      articles.forEach((article) => {
        const { title } = article;
        const firstLetter = title.charAt(0).toUpperCase();

        const runLetterPrev = alphabet[runLetterIdx - 1];
        const runLetterNext = alphabet[runLetterIdx + 1];

        if (firstLetter === runLetterPrev) {
          sPrev.push(article);
        } else if (firstLetter === runLetter) {
          s.push(article);
        } else if (firstLetter === runLetterNext) {
          sNext.push(article);
        }
      });
    }

    return [sPrev, s, sNext];
  }, [alphabet, articles, runLetter, runLetterIdx]);

  return (
    <>
      <div className={styles.letters}>
        {alphabet.map((letter, idx) => (
          <Letter
            key={letter}
            active={letter === runLetter}
            letter={letter}
            ref={(ref) => {
              refs.current[idx] = ref;
            }}
          />
        ))}
      </div>
      {preview && (
        <div className={styles.preview}>
          <Preview
            runLetterIdx={runLetterIdx}
            runLetterRef={runLetterRef}
            sortAsc={sortAsc}
            results={suggestions}
          />
        </div>
      )}
    </>
  );
};

export default Alphabet;
