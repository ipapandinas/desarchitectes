import React from 'react';
import { useDispatch } from 'react-redux';

import { setLanguage } from '../../../redux';

import { Separator } from '../../1-Atoms';

import './Language.scss';

export default function Language() {
  const dispatch = useDispatch();

  return (
    <div className="Language fade-in">
      <button
        className="Language__button Language__button--fr"
        type="button"
        onClick={() => {
          dispatch(setLanguage('FR'));
        }}
      >
        français
      </button>

      <Separator />

      <button
        className="Language__button Language__button--es"
        type="button"
        onClick={() => {
          dispatch(setLanguage('ES'));
        }}
      >
        español
      </button>
    </div>
  );
}
