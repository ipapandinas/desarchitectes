import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setLetter } from '../../../redux';

import './Letter.scss';

// indicator: '•', indicates the letters containing articles
// selector: '>', selects the current letter

function Letter(props) {
  const {
    language,
    letter,
    letterDisplayed,
    lettersUsed,
    onSetLetter,
    preview,
    word,
  } = props;

  const { es, fr } = lettersUsed;
  const isIndicator =
    (language === 'ES' && es.some(l => l === letter)) ||
    (language === 'FR' && fr.some(l => l === letter));

  let isSeparator = false;
  if (preview) {
    isSeparator = letter === letterDisplayed;
  } else if (word) {
    isSeparator = letter === word.charAt(0).toUpperCase();
  }

  return (
    <div className="Letter">
      <button
        className={classNames('Letter__button', {
          'Letter__button--active': isSeparator,
          'Letter__button--ES': language === 'ES',
          'Letter__button--FR': language === 'FR',
        })}
        type="button"
        onClick={() => {
          onSetLetter(letter);
        }}
        onMouseEnter={() => {
          onSetLetter(letter);
        }}
      >
        <span>{letter}</span>
        {isIndicator && <span className="Letter__indicator">•</span>}
      </button>
    </div>
  );
}

Letter.defaultProps = {
  language: undefined,
  letterDisplayed: undefined,
  lettersUsed: undefined,
  onSetLetter: undefined,
  preview: false,
  word: undefined,
};

Letter.propTypes = {
  language: PropTypes.string,
  letter: PropTypes.string.isRequired,
  letterDisplayed: PropTypes.string,
  lettersUsed: PropTypes.shape({
    es: PropTypes.arrayOf(PropTypes.string),
    fr: PropTypes.arrayOf(PropTypes.string),
  }),
  onSetLetter: PropTypes.func,
  preview: PropTypes.bool,
  word: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    language: state.app.language,
    letterDisplayed: state.app.letter,
    lettersUsed: state.app.lettersUsed,
    preview: state.app.preview,
    word: state.app.word,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onSetLetter: setLetter,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Letter);
