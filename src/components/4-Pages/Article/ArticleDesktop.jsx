import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setLetter, setWord, togglePreview } from '../../../redux';

import { Separator } from '../../1-Atoms';
import {
  ArticleContent,
  CONTENT_TYPE_MEDIA,
  CONTENT_TYPE_TEXT,
} from '../../2-Molecules';
import { ArticleCorpus, Footer } from '../../3-Blocks';

import './ArticleDesktop.scss';

const scrollToTop = () => {
  const element = document.getElementById('articleTop');
  if (element) {
    element.scrollIntoView();
  }

  return null;
};

function ArticleDesktop(props) {
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

  if (!data || !language) {
    return null;
  }

  const { content: articleContent, published } = data;
  if (!published) {
    return null;
  }

  return (
    <div className="ArticleDesktop fade-in" id="articleTop">
      <div className="ArticleDesktop__left" id="corpus">
        <ArticleCorpus
          data={data}
          language={language}
          variant={CONTENT_TYPE_TEXT}
        />
      </div>

      <Separator />

      <div className="ArticleDesktop__right">
        {articleContent && (
          <ArticleContent
            content={articleContent}
            language={language}
            type={CONTENT_TYPE_MEDIA}
          />
        )}
        <Footer />
      </div>
    </div>
  );
}

ArticleDesktop.defaultProps = {
  data: undefined,
  language: undefined,
  onSetLetter: undefined,
  onSetWord: undefined,
  onTogglePreview: undefined,
};

ArticleDesktop.propTypes = {
  data: PropTypes.object,
  language: PropTypes.string,
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
)(ArticleDesktop);
