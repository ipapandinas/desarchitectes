import React, { FC } from 'react';
import Link from 'components/5-Utils/Link/Link';

import Image from 'components/1-Atoms/Image/Image';

import { usePageContext } from 'hooks';

import './Footer.scss';

const Footer: FC = () => {
  const { pageData } = usePageContext()!;
  const { lang } = pageData;

  return (
    <div className="Footer">
      <Link
        className="Footer__link"
        lang={lang}
        title={lang === 'es' ? 'Pagina de inició' : "Page d'accueil"}
        word={undefined}
      >
        <Image
          className="Footer__logo"
          alt="Logo desarchitectes"
          filename="desarchitectes.png"
        />
      </Link>
    </div>
  );
};

export default Footer;
