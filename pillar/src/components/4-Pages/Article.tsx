import React, { FC } from 'react'

import { CONTENT_TYPE_MIX } from 'components/2-Molecules/ArticleContent'
import ArticleCorpus from 'components/3-Blocks/ArticleCorpus'

import { ArticlesDataProps } from 'types/articles'

interface Props {
  data: ArticlesDataProps
}

const Article: FC<Props> = ({ data }) => {
  const { content, definition, pdf, title } = data

  return (
    <div className='fade-in'>
      <ArticleCorpus
        content={content}
        definition={definition}
        pdf={pdf}
        title={title}
        variant={CONTENT_TYPE_MIX}
      />
    </div>
  )
}

export default Article
