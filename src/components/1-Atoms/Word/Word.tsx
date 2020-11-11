import React, { FC } from 'react';
import classNames from 'classnames';

import Link from 'components/5-Utils/Link/Link';

import { usePageContext } from 'hooks';

import './Word.scss';

interface Props {
  active?: boolean;
  label: string;
  route: string;
}

const Word: FC<Props> = ({ active, label, route }: Props) => {
  const { pageData } = usePageContext()!;
  const { lang } = pageData;

  return (
    <Link
      className={classNames('Word', {
        'Word--active': active,
        'Word--ES': lang === 'es',
        'Word--FR': lang === 'fr',
      })}
      lang={lang}
      route={route}
      title={route}
      word={label}
    >
      {label}
    </Link>
  );
};

export default Word;
