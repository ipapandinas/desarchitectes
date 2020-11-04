import React from 'react';
import Link from 'components/5-Utils/Link/Link';

import Image from 'components/1-Atoms/Image/Image';

import { useAppContext, usePageContext } from 'hooks';

import './Footer.scss';

export default function Footer() {
  const { setWord } = useAppContext();
  const { pageData } = usePageContext();
  const { lang } = pageData;

  return (
    <div className="Footer">
      <Link
        className="Footer__link"
        lang={lang}
        onClick={() => setWord(undefined)}
        title={lang === 'es' ? 'Pagina de inició' : "Page d'accueil"}
      >
        <Image
          className="Footer__logo"
          alt="Logo desarchitectes"
          filename="desarchitectes.png"
        />
      </Link>
    </div>
  );
}
