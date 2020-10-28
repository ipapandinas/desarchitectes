import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import { useApp, usePageContext } from 'hooks';
import { setLetter } from 'reduxApp';

import './Letter.scss';

// indicator: '•', indicates the letters containing articles
// selector: '>', selects the current letter

export default function Letter(props) {
  const { letter } = props;

  const { letter: letterDisplayed, lettersUsed, preview, word } = useApp();
  const dispatch = useDispatch();
  const { pageData } = usePageContext();
  const { lang } = pageData;

  const { es, fr } = lettersUsed;
  const hasArticle =
    (lang === 'es' && es.some(l => l === letter)) ||
    (lang === 'fr' && fr.some(l => l === letter));

  let isSeparator = false;
  if (preview) {
    isSeparator = letter === letterDisplayed;
  } else if (word) {
    isSeparator = letter === word.charAt(0).toUpperCase();
  }

  return (
    <div
      className={classNames('Letter', {
        'Letter--ES': lang === 'es',
        'Letter--FR': lang === 'fr',
      })}
    >
      {hasArticle && (
        <button
          className={classNames('Letter__button', {
            'Letter__button--active': isSeparator,
            'Letter__button--ES': lang === 'es',
            'Letter__button--FR': lang === 'fr',
          })}
          type="button"
          onClick={() => {
            dispatch(setLetter(letter));
          }}
          onMouseEnter={() => {
            dispatch(setLetter(letter));
          }}
        >
          <span>{letter}</span>
        </button>
      )}
    </div>
  );
}

Letter.defaultProps = {
  lettersUsed: undefined,
};

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  lettersUsed: PropTypes.shape({
    es: PropTypes.arrayOf(PropTypes.string),
    fr: PropTypes.arrayOf(PropTypes.string),
  }),
};
