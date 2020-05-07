import React from 'react';
import PropTypes from 'prop-types';

import { formatNewLine } from '../../../services';

import './Text.scss';

function Text(props) {
  const { text } = props;

  if (!text) {
    return null;
  }

  return <div className="Text">{formatNewLine(text)}</div>;
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Text;
