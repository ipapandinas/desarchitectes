import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setLetter, setWord, togglePreview } from '../../../redux';

import { CONTENT_TYPE_MIX } from '../../2-Molecules';
import { ArticleCorpus } from '../../3-Blocks';

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

  if (!data || !language) {
    return null;
  }

  const { published } = data;
  if (!published) {
    return null;
  }

  return (
    <div className="Article fade-in" id="articleTop">
      <ArticleCorpus
        data={data}
        language={language}
        variant={CONTENT_TYPE_MIX}
      />
    </div>
  );
}

Article.defaultProps = {
  data: undefined,
  language: undefined,
  onSetLetter: undefined,
  onSetWord: undefined,
  onTogglePreview: undefined,
};

Article.propTypes = {
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
)(Article);
