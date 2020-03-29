import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import './Content.scss';

function Content(props) {
  const { children, language } = props;

  return (
    <div
      className={classNames(
        'Content',
        language === 'ES' ? 'Content--ES' : 'Content--FR'
      )}
    >
      {children}
    </div>
  );
}

Content.defaultProps = {
  children: undefined,
  language: undefined,
};

Content.propTypes = {
  children: PropTypes.node,
  language: PropTypes.string,
};

const mapStateToProps = state => {
  return { language: state.app.language };
};

export default connect(mapStateToProps)(Content);
