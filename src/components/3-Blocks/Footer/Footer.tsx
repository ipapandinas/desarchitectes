import React, { FC, memo, useEffect, useState } from 'react';
import classnames from 'classnames';

import Link from 'components/5-Utils/Link/Link';

import DesarchitectesLogo from 'assets/svg/desarchitectes.svg';

import { usePageContext } from 'hooks';

import styles from './Footer.module.scss';

interface Props {
  isVisible: boolean;
}

const Footer: FC<Props> = memo(({ isVisible }: Props) => {
  const { pageData } = usePageContext()!;
  const { lang } = pageData;

  const [fisrtRender, setFisrtRender] = useState(isVisible);

  useEffect(() => {
    if (fisrtRender && isVisible === false) {
      setFisrtRender(false);
    }
  }, [fisrtRender, isVisible]);

  return (
    <footer
      className={classnames(styles.root, {
        [styles.rootVisible]: !fisrtRender && isVisible,
        [styles.rootHide]: !isVisible,
      })}
    >
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
