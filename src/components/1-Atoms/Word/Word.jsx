import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'gatsby';

import { setWord } from '../../../redux';

import './Word.scss';

function Word(props) {
  const { active, label, language, onSetWord, route } = props;
  return (
    <button
      className={classNames('Word__button', {
        'Word__button--ES': language === 'ES',
        'Word__button--FR': language === 'FR',
      })}
      type="button"
      onClick={() => onSetWord(label)}
    >
      <Link
        className={classNames('Word', {
          'Word--active': active,
          'Word--ES': language === 'ES',
          'Word--FR': language === 'FR',
        })}
        title={route}
        to={route}
      >
        {label}
      </Link>
    </button>
  );
}

Word.defaultProps = {
  active: false,
  label: undefined,
  route: undefined,
};

Word.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  language: PropTypes.string.isRequired,
  onSetWord: PropTypes.func.isRequired,
  route: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onSetWord: setWord,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Word);
