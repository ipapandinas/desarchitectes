import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';

import Resize from 'components/1-Atoms/Resize/Resize';
import Alphabet from 'components/3-Blocks/Alphabet/Alphabet';
import Footer from 'components/3-Blocks/Footer/Footer';

import { useAppContext, usePageContext } from 'hooks';

import 'assets/styles/main.scss';
import styles from './Layout.module.scss';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }: Props) => {
  const { appData } = useAppContext()!;
  const { preview } = appData;

  const { pageData } = usePageContext()!;
  const { lang } = pageData;

  const rootClass = `root${lang?.toLocaleUpperCase()}`;

  return (
    <>
      <main className={classnames(styles.root, styles[rootClass])}>
        <div className={styles.app}>
          <div className={styles.content}>{children}</div>
          <div
            className={classnames(styles.alphabet, {
              [styles.alphabetActive]: preview,
            })}
          >
            <Alphabet />
          </div>
        </div>

        <Footer />
      </main>

      <Resize />
    </>
  );
};

export default Layout;
