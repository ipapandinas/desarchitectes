import React, { FC, useMemo } from 'react'
import classnames from 'classnames'

import Definition from 'components/1-Atoms/Definition/Definition'
import ArticleContent from 'components/2-Molecules/ArticleContent/ArticleContent'
import ArticleHeader from 'components/2-Molecules/ArticleHeader/ArticleHeader'

import { ContentProps, DefinitionProps, PdfProps } from 'types/articles'

import styles from './ArticleCorpus.module.scss'

interface Props {
  activeTextAnchor?: string
  content: ContentProps[]
  definition: DefinitionProps[]
  pdf: PdfProps
  title: string
  variant: string
}

const ArticleCorpus: FC<Props> = ({
  activeTextAnchor,
  content,
  definition,
  pdf,
  title,
  variant
}) => {
  const Header = useMemo(() => <ArticleHeader pdf={pdf} title={title} />, [
    pdf,
    title
  ])

  const Content = useMemo(() => {
    if (content.length === 0) {
      return null
    }
    return (
      <ArticleContent
        activeTextAnchor={activeTextAnchor}
        content={content}
        type={variant}
      />
    )
  }, [activeTextAnchor, content, variant])

  const Definitions = useMemo(() => {
    if (definition.length === 0) {
      return null
    }
    return (
      <div className={classnames(styles.footer, 'container')}>
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
    )
  }, [definition])

  return (
    <div className={styles.root}>
      {Header}
      {Content}
      {Definitions}
    </div>
  )
}

export default ArticleCorpus
