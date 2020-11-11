import React, { FC, useMemo } from 'react';
import classNames from 'classnames';

import Letter from 'components/1-Atoms/Letter/Letter';
import Preview from 'components/2-Molecules/Preview/Preview';

import { useAppContext, usePageContext } from 'hooks';
import { SuggestionsProps } from 'types/articles';

import './Alphabet.scss';

const Alphabet: FC = () => {
  const { appData } = useAppContext()!;
  const { alphabet, articles, preview, runLetter } = appData;

  const { pageData } = usePageContext()!;
  const { lang } = pageData;

  const runLetterIdx = runLetter ? alphabet.indexOf(runLetter) : -1;
  const sortAsc = runLetterIdx < 13;

  const [suggestionsPrev, suggestions, suggestionsNext] = useMemo(() => {
    const sPrev: SuggestionsProps[] = [];
    const s: SuggestionsProps[] = [];
    const sNext: SuggestionsProps[] = [];

    if (runLetterIdx !== -1) {
      // TODO: use reduce
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
      <div
        className={classNames('Alphabet__letters', {
          'Alphabet__letters--display': preview,
          'Alphabet__letters--ES': lang === 'es',
        })}
      >
        {alphabet.map((letter) => (
          <Letter key={letter} active={letter === runLetter} letter={letter} />
        ))}
      </div>
      {preview && (
        <div
          className={classNames('Alphabet__preview', {
            'Alphabet__preview--display': preview,
            'Alphabet__preview--ES': lang === 'es',
          })}
        >
          <Preview
            index={runLetterIdx}
            sortAsc={sortAsc}
            suggestionsPrev={suggestionsPrev}
            suggestions={suggestions}
            suggestionsNext={suggestionsNext}
          />
        </div>
      )}
    </>
  );
};

export default Alphabet;
