import React, { FC } from 'react';

import formatNewLine from 'services/textFormat';

import './Text.scss';

interface Props {
  text: string;
}

const Text: FC<Props> = ({ text }: Props) => {
  if (!text) {
    return <div className="Text--empty" />;
  }

  return <div className="Text">{formatNewLine(text)}</div>;
};

export default Text;
