import React from 'react';

import Separator from 'components/1-Atoms/Separator/Separator';
import Link from 'components/5-Utils/Link/Link';

import { usePageContext } from 'hooks';

import './Language.scss';

export default function Language() {
  const { pageData } = usePageContext();
  const { routeName } = pageData;

  return (
    <div className="Language fade-in">
      <Link
        className="Language__button Language__button--fr"
        lang='fr'
        route={routeName}
      >
        français
      </Link>

      <Separator />

      <Link
        className="Language__button Language__button--es"
        lang='es'
        route={routeName}
      >
        español
      </Link>
    </div>
  );
}
