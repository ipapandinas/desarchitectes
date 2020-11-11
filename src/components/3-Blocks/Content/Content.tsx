import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import { usePageContext } from 'hooks';

import './Content.scss';

interface Props {
  children: ReactNode;
}

const Content: FC<Props> = ({ children }: Props) => {
  const { pageData } = usePageContext()!;
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
};

export default Content;
