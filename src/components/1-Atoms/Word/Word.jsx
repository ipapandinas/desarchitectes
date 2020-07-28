import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { Link } from 'gatsby';

import { useApp } from '../../../hooks';
import { setWord } from '../../../redux';

import './Word.scss';

export default function Word(props) {
  const { active, label, route } = props;
  const { language } = useApp();
  const dispatch = useDispatch();
  return (
    <button
      className={classNames('Word__button', {
        'Word__button--ES': language === 'ES',
        'Word__button--FR': language === 'FR',
      })}
      type="button"
      onClick={() => dispatch(setWord(label))}
    >
      <Link
        className={classNames('Word', {
          'Word--active': active,
          'Word--ES': language === 'ES',
          'Word--FR': language === 'FR',
        })}
        title={route}
        to={`/${route}`}
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
  route: PropTypes.string,
};
