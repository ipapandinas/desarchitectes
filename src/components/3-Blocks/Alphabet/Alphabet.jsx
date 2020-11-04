import React, { useMemo } from 'react';
import classNames from 'classnames';

import Letter from 'components/1-Atoms/Letter/Letter';
import Preview from 'components/2-Molecules/Preview/Preview';

import { useAppContext, usePageContext } from 'hooks';

import './Alphabet.scss';

export default function Alphabet() {
  const { appData } = useAppContext();
  const { alphabet, articles, preview, runLetter } = appData;

  const { pageData } = usePageContext();
  const { lang } = pageData;

  const runLetterIdx = alphabet.indexOf(runLetter);
  const sortAsc = runLetterIdx < 13;

  const [suggestionsPrev, suggestions, suggestionsNext] = useMemo(() => {
    const suggestionsPrev = [];
    const suggestions = [];
    const suggestionsNext = [];

    if (runLetterIdx !== -1) {
      articles.forEach(article => {
        const { title } = article;
        const firstLetter = title.charAt(0).toUpperCase();

        const runLetterPrev = alphabet[runLetterIdx - 1];
        const runLetterNext = alphabet[runLetterIdx + 1];

        if (firstLetter === runLetterPrev) {
          suggestionsPrev.push(article);
        } else if (firstLetter === runLetter) {
          suggestions.push(article);
        } else if (firstLetter === runLetterNext) {
          suggestionsNext.push(article);
        }
      });
    }

    return [suggestionsPrev, suggestions, suggestionsNext];
  }, [alphabet, articles, runLetter, runLetterIdx]);

  return (
    <>
      <div
        className={classNames('Alphabet__letters', {
          'Alphabet__letters--display': preview,
          'Alphabet__letters--ES': lang === 'es',
        })}
      >
        {alphabet.map(letter => (
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
}
