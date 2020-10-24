import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Separator from 'components/1-Atoms/Separator/Separator';
import ArticleContent, {
  CONTENT_TYPE_MEDIA,
  CONTENT_TYPE_TEXT,
} from 'components/2-Molecules/ArticleContent/ArticleContent';
import ArticleCorpus from 'components/3-Blocks/ArticleCorpus/ArticleCorpus';
import Footer from 'components/3-Blocks/Footer/Footer';

import { useApp } from 'hooks';
import { setLetter, setWord, togglePreview } from 'reduxApp';

import './ArticleDesktop.scss';

const scrollToTop = () => {
  const element = document.getElementById('articleTop');
  if (element) {
    element.scrollIntoView();
  }

  return null;
};

export default function ArticleDesktop(props) {
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
};

ArticleDesktop.propTypes = {
  data: PropTypes.object,
};
