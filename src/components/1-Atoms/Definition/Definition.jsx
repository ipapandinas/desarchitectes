import React from 'react';
import PropTypes from 'prop-types';

import { formatNewLine } from '../../../services';

import './Definition.scss';

function Definition(props) {
  const { definition, language } = props;

  if (!definition) {
    return null;
  }

  const {
    [`content_${language}`]: content,
    link,
    [`name_${language}`]: name,
    [`type_${language}`]: type,
  } = definition;

  return (
    <div className="Definition">
      {name && <div className="Definition__name">{name}</div>}
      {type && <div className="Definition__subtype">{type}</div>}
      {content && (
        <div className="Definition__explanation">{formatNewLine(content)}</div>
      )}
      {link && (
        <a
          className="Definition__link"
          href={link}
          title={`Référence vers ${link}`}
          rel="noopener noreferrer"
        >
          {link}
        </a>
      )}
    </div>
  );
}

Definition.propTypes = {
  definition: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

export default Definition;
