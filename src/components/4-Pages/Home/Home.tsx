import React, { FC } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { usePageContext } from 'hooks';

import './Home.scss';

interface Props {
  content: string;
}

const Home: FC<Props> = ({ content }: Props) => {
  const { pageData } = usePageContext()!;
  const { lang } = pageData;

  return (
    <div className="Home fade-in">
      <div
        className={classNames(
          'Home__content',
          `Home__content--${lang?.toUpperCase()}`
        )}
      >
        {content}
      </div>

      <div className="Home__socials">
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
    </div>
  );
};

export default Home;
