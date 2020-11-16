import React, { FC } from 'react';
import classnames from 'classnames';

import layoutStyles from 'components/5-Utils/Layout/Layout.module.scss';
import Link from 'components/5-Utils/Link/Link';

import { usePageContext } from 'hooks';

import styles from './Word.module.scss';

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
      className={classnames(styles.root, {
        [styles.active]: active,
        [layoutStyles.bold]: active,
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
