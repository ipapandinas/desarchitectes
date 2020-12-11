import React, { FC } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import TelmoIcon from 'assets/svg/telmo.svg';

import layoutStyles from 'components/5-Utils/Layout/Layout.module.scss';

import { usePageContext } from 'hooks';
import formatNewLine from 'services/textFormat';

import styles from './Home.module.scss';

interface Props {
  content: string;
}

const Home: FC<Props> = ({ content }: Props) => {
  const { pageData } = usePageContext()!;
  const { lang } = pageData;

  const creditsLabel = `© ${new Date().getFullYear()} desarchitectes`;

  const contentClass = `content${lang?.toLocaleUpperCase()}`;

  return (
    <div className={classnames(styles.root, 'fade-in')}>
      {content && (
        <div className={classnames(styles.content, contentClass)}>
          {formatNewLine(content)}
        </div>
      )}

      <div className={styles.socials}>
        <a
          href="https://www.instagram.com/desarchitectes/"
          title={
            lang === 'es'
              ? 'desarchitectes en Instagram'
              : 'desarchitectes sur Instagram'
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="mailto:abcdesarchitectes@gmail.com"
          title={lang === 'es' ? 'Contacto' : 'Contact'}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

      <footer className={classnames(styles.credits, layoutStyles.bold)}>
        <span className={styles.ownCredits}>{creditsLabel}</span>
        <a
          className={styles.telmoCredits}
          href="https://www.mrtelmo.com"
          title="Mister Telmo Website"
          rel="noopener noreferrer"
        >
          <TelmoIcon className={styles.telmoIcon} />
          <div className={styles.telmoTag}>
            <span className={styles.telmoTagMain}>mr. telmo</span>
            <span className={styles.telmoTagSuffix}>code some more</span>
            <span className={styles.line} />
          </div>
        </a>
      </footer>
    </div>
  );
};

export default Home;
