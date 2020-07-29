import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useApp } from '../../../hooks';

import './Content.scss';

export default function Content(props) {
  const { children } = props;
  const { language } = useApp();

  return (
    <div
      className={classNames(
        'Content',
        language === 'ES' ? 'Content--ES' : 'Content--FR'
      )}
      id="content"
    >
      {children}
    </div>
  );
}

Content.defaultProps = {
  children: undefined,
};

Content.propTypes = {
  children: PropTypes.node,
};
