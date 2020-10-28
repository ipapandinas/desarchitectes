import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { usePageContext } from 'hooks';

import './Content.scss';

export default function Content(props) {
  const { children } = props;
  const { pageData } = usePageContext();
  const { lang } = pageData;

  return (
    <div
      className={classNames(
        'Content',
        lang === 'es' ? 'Content--ES' : 'Content--FR'
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
