import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import Link from 'components/5-Utils/Link/Link';

import { usePageContext } from 'hooks';
import { setWord } from 'reduxApp';

import './Word.scss';

export default function Word(props) {
  const { active, label, route } = props;
  const dispatch = useDispatch();
  const { pageData } = usePageContext();
  const { lang } = pageData;
  return (
    <Link
      className={classNames('Word', {
        'Word--active': active,
        'Word--ES': lang === 'es',
        'Word--FR': lang === 'fr',
      })}
      lang={lang}
      onClick={() => dispatch(setWord(label))}
      route={route}
      title={route}
    >
      {label}
    </Link>
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
