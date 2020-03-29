import React from 'react';
import PropTypes, { string } from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { Letter } from '../../1-Atoms';
import { Preview } from '../../2-Molecules';

import './Alphabet.scss';

function Alphabet(props) {
  const { alphabet, language, preview } = props;
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
      <div
        className={classNames('Alphabet__preview', {
          'Alphabet__preview--display': preview,
          'Alphabet__preview--ES': language === 'ES',
        })}
      >
        <Preview />
      </div>
    </>
  );
}

Alphabet.defaultProps = {
  alphabet: undefined,
  language: undefined,
  preview: false,
};

Alphabet.propTypes = {
  alphabet: PropTypes.arrayOf(string),
  language: PropTypes.string,
  preview: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    alphabet: state.app.alphabet,
    language: state.app.language,
    preview: state.app.preview,
  };
};

export default connect(mapStateToProps)(Alphabet);
