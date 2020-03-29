import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import Img from 'gatsby-image';

import { setLetter, setWord, togglePreview } from '../../../redux';
import { formatNewLine } from '../../../services';

import { Image } from '../../1-Atoms';

import './Article.scss';

const scrollToTop = () => {
  const element = document.getElementById('articleTop');
  if (element) {
    element.scrollIntoView();
  }

  return null;
};

function Article(props) {
  const { data, language, onSetLetter, onSetWord, onTogglePreview } = props;

  useEffect(() => {
    if (data) {
      const word = data[`title_${language}`];
      const letter = word && word.charAt(0).toUpperCase();
      onSetLetter(letter);
      onSetWord(word);
      onTogglePreview();
      scrollToTop();
    }
  }, [data, language, onSetLetter, onSetWord, onTogglePreview]);

  if (!data) {
    return null;
  }

  const {
    content: articleContent,
    definition: articleDefinition,
    pdf: articleDownload,
    [`title_${language}`]: articleTitle,
  } = data;

  const articleLetter = articleTitle && articleTitle.charAt(0);

  function renderContent(content) {
    return content.map(item => {
      if (item[`text_${language}`]) {
        return (
          <div className="Content__text" key={item.id}>
            {formatNewLine(item[`text_${language}`])}
          </div>
        );
      }
      if (item.image) {
        return (
          <div
            className={classNames('Content__media', {
              'Content__media--full': !item[`legend_${language}`],
            })}
            key={item.image.name}
          >
            <Img
              className="Media__image"
              alt={item.image[`alt_${language}`]}
              fluid={item.image.childImageSharp.fluid}
            />

            {item[`legend_${language}`] && (
              <div className="Media__legend">
                {formatNewLine(item[`legend_${language}`])}
              </div>
            )}
          </div>
        );
      }
      return null;
    });
  }

  return (
    <div className="Article fade-in" id="articleTop">
      <div className="Article__header">
        {articleLetter && (
          <span
            className={classNames(
              'Article__letter',
              language === 'ES' ? 'Article__letter--ES' : 'Article__letter--FR'
            )}
          >
            {`${articleLetter.toLowerCase()} `}
            {language === 'ES' ? 'cómo' : 'comme'}
          </span>
        )}
        {articleTitle && (
          <span
            className={classNames(
              'Article__title',
              language === 'ES' ? 'Article__title--ES' : 'Article__title--FR'
            )}
          >
            {articleTitle.toUpperCase()}
          </span>
        )}
        {articleDownload && (
          <a className="Article__pdf" href={articleDownload.publicURL}>
            <Image
              alt="Télécharger la fiche pdf de l'article"
              filename="logoPdf.png"
            />
          </a>
        )}
      </div>
      {articleContent && (
        <div className="Article__content container">
          {renderContent(articleContent)}
        </div>
      )}
      <div className="Article__footer container">
        {articleDefinition &&
          articleDefinition.map(def => (
            <div className="Article__definition" key={def.id}>
              <div className="Definition__name">{def[`name_${language}`]}</div>
              <div className="Definition__subtype">
                {def[`type_${language}`]}
              </div>
              <div className="Definition__explanation">
                {formatNewLine(def[`content_${language}`])}
              </div>
              {def.link && (
                <a
                  className="Definition__link"
                  href={def.link}
                  title={`Référence vers ${def.link}`}
                  rel="noopener noreferrer"
                >
                  {`(${def.link})`}
                </a>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

Article.defaultProps = {
  data: undefined,
  onSetLetter: undefined,
  onSetWord: undefined,
  onTogglePreview: undefined,
};

Article.propTypes = {
  data: PropTypes.object,
  language: PropTypes.string.isRequired,
  onSetLetter: PropTypes.func,
  onSetWord: PropTypes.func,
  onTogglePreview: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onSetLetter: setLetter,
      onSetWord: setWord,
      onTogglePreview: togglePreview,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
