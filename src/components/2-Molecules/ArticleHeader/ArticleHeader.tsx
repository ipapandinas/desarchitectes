import React, { FC } from 'react';
import classnames from 'classnames';

import { usePageContext } from 'hooks';
import { PdfProps } from 'types/articles';

import layoutStyles from 'components/5-Utils/Layout/Layout.module.scss';
import styles from './ArticleHeader.module.scss';

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
    <div className={styles.root}>
      {letter && (
        <span className={classnames(styles.letter, layoutStyles.italic)}>
          {letter.toLowerCase()}
          {lang === 'es' ? ' cómo' : ' comme'}
        </span>
      )}
      {title && (
        <span className={classnames(styles.title, layoutStyles.bold)}>
          {title.toUpperCase()}
        </span>
      )}
      {pdf && (
        <a className={styles.pdf} href={pdf.publicURL}>
          {pdfLabel}
        </a>
      )}
    </div>
  );
};

export default ArticleHeader;
