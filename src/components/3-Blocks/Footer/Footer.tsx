import React, { FC, memo } from 'react';
import Link from 'components/5-Utils/Link/Link';

import DesarchitectesLogo from 'assets/svg/desarchitectes.svg';

import { usePageContext } from 'hooks';

import styles from './Footer.module.scss';

const Footer: FC = memo(() => {
  const { pageData } = usePageContext()!;
  const { lang } = pageData;

  return (
    <footer className={styles.root}>
      <Link
        className={styles.link}
        lang={lang}
        title={lang === 'es' ? 'Pagina de inició' : "Page d'accueil"}
        word={undefined}
      >
        <DesarchitectesLogo className={styles.logo} />
      </Link>
    </footer>
  );
});

export default Footer;
