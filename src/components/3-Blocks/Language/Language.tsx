import React, { FC } from 'react';

import Separator from 'components/1-Atoms/Separator/Separator';

import { usePageContext } from 'hooks';

import './Language.scss';

const Language: FC = () => {
  const { pageData } = usePageContext()!;
  const { routeName } = pageData;

  const getUri = (lang: string) => {
    if (!routeName) {
      return `/${lang}`;
    }

    return `/${lang}/${routeName}`;
  };

  return (
    <div className="Language fade-in">
      <a className="Language__button Language__button--fr" href={getUri('fr')}>
        français
      </a>

      <Separator />

      <a className="Language__button Language__button--es" href={getUri('es')}>
        español
      </a>
    </div>
  );
};

export default Language;
