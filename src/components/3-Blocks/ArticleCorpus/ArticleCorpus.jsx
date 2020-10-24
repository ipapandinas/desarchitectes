import React from 'react';
import PropTypes from 'prop-types';

import Definition from 'components/1-Atoms/Definition/Definition';
import ArticleContent from 'components/2-Molecules/ArticleContent/ArticleContent';
import ArticleHeader from 'components/2-Molecules/ArticleHeader/ArticleHeader';

import './ArticleCorpus.scss';

function ArticleCorpus(props) {
  const { data, language, variant } = props;

  if (!data || !language) {
    return null;
  }

  const {
    content: articleContent,
    definition: articleDefinition,
    pdf: articleDownload,
    [`title_${language}`]: articleTitle,
  } = data;

  return (
    <div className="ArticleCorpus">
      <ArticleHeader
        language={language}
        pdf={articleDownload}
        title={articleTitle}
      />

      <ArticleContent
        content={articleContent}
        language={language}
        type={variant}
      />

      {articleDefinition && (
        <div className="Article__footer container">
          {articleDefinition.map(def => (
            <Definition
              definition={def}
              language={language}
              key={def && def.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

ArticleCorpus.propTypes = {
  data: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default ArticleCorpus;
