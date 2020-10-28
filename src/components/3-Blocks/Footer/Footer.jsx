import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'gatsby';

import Image from 'components/1-Atoms/Image/Image';

import { usePageContext } from 'hooks';
import { reset } from 'reduxApp';

import './Footer.scss';

export default function Footer() {
  const dispatch = useDispatch();
  const { pageData } = usePageContext();
  const { lang } = pageData;

  return (
    <div className="Footer">
      <button
        className="Footer__button"
        type="button"
        title={lang === 'es' ? 'Pagina de inició' : "Page d'accueil"}
        onClick={() => {
          dispatch(reset());
        }}
      >
        <Link className="Footer__link" title="Home" to="/">
          <Image
            className="Footer__logo"
            alt="Logo desarchitectes"
            filename="desarchitectes.png"
          />
        </Link>
      </button>
    </div>
  );
}
