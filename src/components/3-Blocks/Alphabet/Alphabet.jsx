import React from 'react';
import classNames from 'classnames';

import Letter from 'components/1-Atoms/Letter/Letter';
import Preview from 'components/2-Molecules/Preview/Preview';

import { useApp, usePageContext } from 'hooks';

import './Alphabet.scss';

export default function Alphabet() {
  const { alphabet, preview } = useApp();
  const { pageData } = usePageContext();
  const { lang } = pageData;
  
  return (
    <>
      <div
        className={classNames('Alphabet__letters', {
          'Alphabet__letters--display': preview,
          'Alphabet__letters--ES': lang === 'es',
        })}
      >
        {alphabet.map(letter => (
          <Letter letter={letter} key={letter} />
        ))}
      </div>
      {preview && (
        <div
          className={classNames('Alphabet__preview', {
            'Alphabet__preview--display': preview,
            'Alphabet__preview--ES': lang === 'es',
          })}
        >
          <Preview />
        </div>
      )}
    </>
  );
}
