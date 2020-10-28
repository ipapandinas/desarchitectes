import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { usePageContext } from 'hooks';

import './ArticleHeader.scss';

function ArticleHeader(props) {
  const { pdf, title } = props;
  const { lang } = usePageContext();

  if ( !pdf || !title) {
    return null;
  }

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
}

ArticleHeader.propTypes = {
  pdf: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default ArticleHeader;
