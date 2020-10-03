import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ArticleHeader.scss';

function ArticleHeader(props) {
  const { language, pdf, title } = props;

  if (!language || !pdf || !title) {
    return null;
  }

  const letter = title && title.charAt(0);
  const pdfLabel = language === 'ES' ? 'Versión PDF' : 'Version PDF';

  return (
    <div className="ArticleHeader">
      {letter && (
        <span
          className={classNames(
            'ArticleHeader__letter',
            language === 'ES'
              ? 'ArticleHeader__letter--ES'
              : 'ArticleHeader__letter--FR'
          )}
        >
          {letter.toLowerCase()}
          {language === 'ES' ? ' cómo' : ' comme'}
        </span>
      )}
      {title && (
        <span
          className={classNames(
            'ArticleHeader__title',
            language === 'ES'
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
  language: PropTypes.string.isRequired,
  pdf: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default ArticleHeader;
