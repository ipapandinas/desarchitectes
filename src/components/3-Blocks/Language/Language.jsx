import React from 'react';
import { useDispatch } from 'react-redux';

import Separator from 'components/1-Atoms/Separator/Separator';

import { setLanguage } from 'reduxApp';

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
