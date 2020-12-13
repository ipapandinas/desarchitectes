import React, { FC, ReactNode, useMemo, useRef, useState } from 'react';
import classnames from 'classnames';

import Resize from 'components/1-Atoms/Resize/Resize';
import Alphabet from 'components/3-Blocks/Alphabet/Alphabet';
import Footer from 'components/3-Blocks/Footer/Footer';

import { useDevice, usePageContext } from 'hooks';

import 'assets/styles/main.scss';
import styles from './Layout.module.scss';

interface Props {
  children: ReactNode;
}

const offsetDeltaMobile = 200;
const offsetDeltaOther = 400;
const offsetTrigger = 500;

const Layout: FC<Props> = ({ children }: Props) => {
  const device = useDevice();
  const { pageData } = usePageContext()!;
  const { lang } = pageData;

  const [isFooterVisible, setFooterVisible] = useState(true);
  const [, setOffsetTop] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);
  const offsetDelta = useMemo(
    () => (device?.isMobile ? offsetDeltaMobile : offsetDeltaOther),
    [device?.isMobile]
  );
  const rootClass = useMemo(() => `root${lang?.toLocaleUpperCase()}`, [lang]);

  const handleScroll = () => {
    const element = contentRef?.current;
    if (element) {
      const { scrollTop } = element;
      if (scrollTop > offsetTrigger) {
        setOffsetTop((prevOffset) => {
          if (prevOffset > scrollTop + offsetDelta) {
            setFooterVisible(true);
            return scrollTop;
          }
          if (prevOffset > scrollTop) {
            return prevOffset;
          }
          if (isFooterVisible) {
            setFooterVisible(false);
          }
          return scrollTop;
        });
      } else {
        setFooterVisible(true);
      }
    }
  };

  const content = useMemo(
    () => (
      <div className={styles.content} onScroll={handleScroll} ref={contentRef}>
        {children}
      </div>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [children]
  );

  return (
    <>
      <main className={classnames(styles.root, styles[rootClass])}>
        <div className={styles.app}>
          {content}
          <Alphabet />
        </div>

        <Footer isVisible={isFooterVisible} />
      </main>

      <Resize />
    </>
  );
};

export default Layout;
