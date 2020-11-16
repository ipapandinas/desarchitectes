import React, { FC } from 'react';

import formatNewLine from 'services/textFormat';

import styles from './Text.module.scss';

interface Props {
  text: string;
}

const Text: FC<Props> = ({ text }: Props) => {
  if (!text) {
    return <div className={styles.empty} />;
  }

  return <div className={styles.root}>{formatNewLine(text)}</div>;
};

export default Text;
