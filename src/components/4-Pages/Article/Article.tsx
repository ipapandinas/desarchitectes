import React, { FC, useEffect } from 'react';

import { CONTENT_TYPE_MIX } from 'components/2-Molecules/ArticleContent/ArticleContent';
import ArticleCorpus from 'components/3-Blocks/ArticleCorpus/ArticleCorpus';

import { ArticlesDataProps } from 'types/articles';

const scrollToTop = () => {
  const element = document.getElementById('articleTop');
  if (element) {
    element.scrollIntoView();
  }

  return null;
};

interface Props {
  data: ArticlesDataProps;
}

const Article: FC<Props> = ({ data }: Props) => {
  const { content, definition, pdf, title } = data;

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="Article fade-in" id="articleTop">
      <ArticleCorpus
        content={content}
        definition={definition}
        pdf={pdf}
        title={title}
        variant={CONTENT_TYPE_MIX}
      />
    </div>
  );
};

export default Article;
