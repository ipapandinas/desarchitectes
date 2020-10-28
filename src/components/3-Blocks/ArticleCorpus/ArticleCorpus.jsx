import React from 'react';
import PropTypes from 'prop-types';

import Definition from 'components/1-Atoms/Definition/Definition';
import ArticleContent from 'components/2-Molecules/ArticleContent/ArticleContent';
import ArticleHeader from 'components/2-Molecules/ArticleHeader/ArticleHeader';

import './ArticleCorpus.scss';

function ArticleCorpus(props) {
  const { data, variant } = props;
  const { content, definition, pdf, title } = data;

  return (
    <div className="ArticleCorpus">
      <ArticleHeader pdf={pdf} title={title} />

      <ArticleContent content={content} type={variant} />

      {definition && (
        <div className="Article__footer container">
          {definition.map(def => (
            <Definition definition={def} key={def && def.id} />
          ))}
        </div>
      )}
    </div>
  );
}

ArticleCorpus.propTypes = {
  data: PropTypes.object.isRequired,
  variant: PropTypes.string.isRequired,
};

export default ArticleCorpus;
