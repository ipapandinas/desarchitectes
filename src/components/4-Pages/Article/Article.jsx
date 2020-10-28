import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { CONTENT_TYPE_MIX } from 'components/2-Molecules/ArticleContent/ArticleContent';
import ArticleCorpus from 'components/3-Blocks/ArticleCorpus/ArticleCorpus';

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
  const { title: word } = data;
  const dispatch = useDispatch();

  useEffect(() => {
    const letter = word && word.charAt(0).toUpperCase();
    dispatch(setLetter(letter));
    dispatch(setWord(word));
    dispatch(togglePreview());
    scrollToTop();
  }, [dispatch, word]);

  return (
    <div className="Article fade-in" id="articleTop">
      <ArticleCorpus data={data} variant={CONTENT_TYPE_MIX} />
    </div>
  );
}

Article.defaultProps = {
  data: undefined,
};

Article.propTypes = {
  data: PropTypes.object,
};
