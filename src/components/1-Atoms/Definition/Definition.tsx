import React, { FC } from 'react';

import formatNewLine from 'services/textFormat';
import { DefinitionProps as Props } from 'types/articles';

import './Definition.scss';

const Definition: FC<Props> = ({ link, name, text, type }: Props) => (
  <div className="Definition">
    {name && <div className="Definition__name">{name}</div>}
    {type && <div className="Definition__subtype">{type}</div>}
    {text && (
      <div className="Definition__explanation">{formatNewLine(text)}</div>
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
export default Definition;
