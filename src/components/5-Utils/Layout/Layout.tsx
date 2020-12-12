import React, { FC, ReactNode, useMemo } from 'react';
import classnames from 'classnames';

import Resize from 'components/1-Atoms/Resize/Resize';
import Alphabet from 'components/3-Blocks/Alphabet/Alphabet';
import Footer from 'components/3-Blocks/Footer/Footer';

import { usePageContext } from 'hooks';

import 'assets/styles/main.scss';
import styles from './Layout.module.scss';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }: Props) => {
  const { pageData } = usePageContext()!;
  const { lang } = pageData;

  const rootClass = useMemo(() => `root${lang?.toLocaleUpperCase()}`, [lang]);

  const content = useMemo(
    () => <div className={styles.content}>{children}</div>,
    [children]
  );

  return (
    <>
      <main className={classnames(styles.root, styles[rootClass])}>
        <div className={styles.app}>
          {content}
          <Alphabet />
        </div>

        <Footer />
      </main>

      <Resize />
    </>
  );
};

export default Layout;
