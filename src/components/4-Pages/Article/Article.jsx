import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { CONTENT_TYPE_MIX } from 'components/2-Molecules/ArticleContent/ArticleContent';
import ArticleCorpus from 'components/3-Blocks/ArticleCorpus/ArticleCorpus';

import { useApp } from 'hooks';
import { setLetter, setWord, togglePreview } from 'reduxApp';

const scrollToTop = () => {
  const element = document.getElementById('articleTop');
  if (element) {
    element.scrollIntoView();
  }

  return null;
};

export default function Article(props) {
  const { data } = props;
  const { language } = useApp();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      const word = data[`title_${language}`];
      const letter = word && word.charAt(0).toUpperCase();
      dispatch(setLetter(letter));
      dispatch(setWord(word));
      dispatch(togglePreview());
      scrollToTop();
    }
  }, [data, dispatch, language]);

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
};

Article.propTypes = {
  data: PropTypes.object,
};
