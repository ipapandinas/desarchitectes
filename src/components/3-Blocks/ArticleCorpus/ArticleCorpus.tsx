import React, { FC } from 'react';

import Definition from 'components/1-Atoms/Definition/Definition';
import ArticleContent from 'components/2-Molecules/ArticleContent/ArticleContent';
import ArticleHeader from 'components/2-Molecules/ArticleHeader/ArticleHeader';

import { ContentProps, DefinitionProps, PdfProps } from 'types/articles';

import './ArticleCorpus.scss';

interface Props {
  content: ContentProps[];
  definition: DefinitionProps[];
  pdf: PdfProps;
  title: string;
  variant: string;
}

const ArticleCorpus: FC<Props> = ({
  content,
  definition,
  pdf,
  title,
  variant,
}: Props) => (
  <div className="ArticleCorpus">
    <ArticleHeader pdf={pdf} title={title} />

    <ArticleContent content={content} type={variant} />

    {definition && (
      <div className="Article__footer container">
        {definition.map(({ id, link, name, text, type }) => (
          <Definition
            key={id}
            link={link}
            name={name}
            text={text}
            type={type}
          />
        ))}
      </div>
    )}
  </div>
);

export default ArticleCorpus;
