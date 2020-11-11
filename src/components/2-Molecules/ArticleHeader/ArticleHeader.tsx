import React, { FC } from 'react';
import classNames from 'classnames';

import { usePageContext } from 'hooks';
import { PdfProps } from 'types/articles';

import './ArticleHeader.scss';

interface Props {
  pdf: PdfProps;
  title: string;
}

const ArticleHeader: FC<Props> = ({ pdf, title }: Props) => {
  const { pageData } = usePageContext()!;
  const { lang } = pageData;

  const letter = title && title.charAt(0);
  const pdfLabel = lang === 'es' ? 'Versión PDF' : 'Version PDF';

  return (
    <div className="ArticleHeader">
      {letter && (
        <span
          className={classNames(
            'ArticleHeader__letter',
            lang === 'es'
              ? 'ArticleHeader__letter--ES'
              : 'ArticleHeader__letter--FR'
          )}
        >
          {letter.toLowerCase()}
          {lang === 'es' ? ' cómo' : ' comme'}
        </span>
      )}
      {title && (
        <span
          className={classNames(
            'ArticleHeader__title',
            lang === 'es'
              ? 'ArticleHeader__title--ES'
              : 'ArticleHeader__title--FR'
          )}
        >
          {title.toUpperCase()}
        </span>
      )}
      {pdf && (
        <a className="ArticleHeader__pdf" href={pdf.publicURL}>
          {pdfLabel}
        </a>
      )}
    </div>
  );
};

export default ArticleHeader;
