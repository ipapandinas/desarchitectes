import React from 'react';
import classNames from 'classnames';

import { useApp } from '../../../hooks';

import { Letter } from '../../1-Atoms';
import { Preview } from '../../2-Molecules';

import './Alphabet.scss';

export default function Alphabet() {
  const { alphabet, language, preview } = useApp();
  return (
    <>
      <div
        className={classNames('Alphabet__letters', {
          'Alphabet__letters--display': preview,
          'Alphabet__letters--ES': language === 'ES',
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
            'Alphabet__preview--ES': language === 'ES',
          })}
        >
          <Preview />
        </div>
      )}
    </>
  );
}
