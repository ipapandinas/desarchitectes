import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Image } from '../../1-Atoms';

import './ArticleHeader.scss';

function ArticleHeader(props) {
  const { language, pdf, title } = props;

  if (!language || !pdf || !title) {
    return null;
  }

  const letter = title && title.charAt(0);

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
          <Image
            alt={
              language === 'ES'
                ? 'Descargar el articulo en pdf'
                : "Télécharger l'article en pdf"
            }
            filename="logoPdf.png"
          />
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
