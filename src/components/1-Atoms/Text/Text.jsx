import React from 'react';
import PropTypes from 'prop-types';

import { formatNewLine } from '../../../services';

import './Text.scss';

function Text(props) {
  const { text } = props;

  if (!text) {
    return <div className="Text--empty" />;
  }

  return <div className="Text">{formatNewLine(text)}</div>;
}

Text.defaultProps = {
  text: undefined,
};

Text.propTypes = {
  text: PropTypes.string,
};

export default Text;
