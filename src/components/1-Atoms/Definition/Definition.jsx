import React from 'react';
import PropTypes from 'prop-types';

import { formatNewLine } from 'services';

import './Definition.scss';

function Definition(props) {
  const { definition } = props;

  if (!definition) {
    return null;
  }

  const { content, link, name, type } = definition;

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
};

export default Definition;
