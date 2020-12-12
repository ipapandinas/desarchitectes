import React, { FC } from 'react';

import formatNewLine from 'services/textFormat';
import { DefinitionProps as Props } from 'types/articles';

import styles from './Definition.module.scss';

const Definition: FC<Props> = ({ link, name, text, type }: Props) => (
  <div>
    {name && <div className={styles.name}>{name}</div>}
    {type && <div className={styles.type}>{type}</div>}
    {text && formatNewLine(text)}
    {link && (
      <a
        className={styles.link}
        href={link}
        title={`Référence vers ${link}`}
        rel="noopener noreferrer"
      >
        {`Ref: (${link})`}
      </a>
    )}
  </div>
);

export default Definition;
