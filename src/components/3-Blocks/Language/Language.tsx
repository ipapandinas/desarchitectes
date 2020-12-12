import React, { FC, useCallback } from 'react';
import classnames from 'classnames';

import Separator from 'components/1-Atoms/Separator/Separator';

import { usePageContext } from 'hooks';

import styles from './Language.module.scss';

const Language: FC = () => {
  const { pageData } = usePageContext()!;
  const { routeName } = pageData;

  const getUri = useCallback(
    (lang: string) => {
      if (!routeName) {
        return `/${lang}`;
      }

      return `/${lang}/${routeName}`;
    },
    [routeName]
  );

  return (
    <div className={classnames(styles.root, 'fade-in')}>
      <a
        className={classnames(styles.button, styles.buttonFR)}
        href={getUri('fr')}
      >
        français
      </a>

      <Separator />

      <a
        className={classnames(styles.button, styles.buttonES)}
        href={getUri('es')}
      >
        español
      </a>
    </div>
  );
};

export default Language;
