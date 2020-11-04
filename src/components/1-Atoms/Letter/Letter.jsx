import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useAppContext, usePageContext } from 'hooks';

import './Letter.scss';

function Letter(props) {
  const { active, letter } = props;

  const { appData, setLetter } = useAppContext();
  const { letters, preview, word } = appData;

  const { pageData } = usePageContext();
  const { lang } = pageData;

  const hasArticle = letters && letters.includes(letter);
  const isIndicator =
    (preview && active) ||
    (!preview && word && letter === word.charAt(0).toUpperCase());

  return (
    <div
      key={letter}
      className={classNames('Letter', {
        'Letter--ES': lang === 'es',
        'Letter--FR': lang === 'fr',
      })}
    >
      {hasArticle && (
        <button
          className={classNames('Letter__button', {
            'Letter__button--active': isIndicator,
            'Letter__button--ES': lang === 'es',
            'Letter__button--FR': lang === 'fr',
          })}
          type="button"
          onClick={() => setLetter(letter)}
          onMouseEnter={() => setLetter(letter)}
        >
          <span>{letter}</span>
        </button>
      )}
    </div>
  );
}

Letter.propTypes = {
  active: PropTypes.bool,
  letter: PropTypes.string.isRequired,
};

Letter.defaultProps = {
  active: false,
};

export default Letter;
