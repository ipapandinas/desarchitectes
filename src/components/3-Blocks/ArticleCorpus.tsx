import React, { FC } from 'react'
import styled from 'styled-components'

import Container from 'components/1-atoms/Container'
import Definition from 'components/1-Atoms/Definition'
import ArticleContent from 'components/2-Molecules/ArticleContent'
import ArticleHeader from 'components/2-Molecules/ArticleHeader'

import { ContentProps, DefinitionProps, PdfProps } from 'types/articles'

interface Props {
  activeTextAnchor?: string
  content: ContentProps[]
  definition: DefinitionProps[]
  pdf: PdfProps
  title: string
  variant: string
}

const Corpus = styled.div`
  padding-top: ${({ theme }) => theme.spacing[6]};
`

const ArticleCorpus: FC<Props> = ({
  activeTextAnchor,
  content,
  definition,
  pdf,
  title,
  variant
}) => (
  <Corpus>
    <ArticleHeader pdf={pdf} title={title} />
    <ArticleContent
      activeTextAnchor={activeTextAnchor}
      content={content}
      type={variant}
    />
    {definition.length > 0 && (
      <Container>
        {definition.map(({ id, link, name, text, type }) => (
          <Definition
            key={id}
            link={link}
            name={name}
            text={text}
            type={type}
          />
        ))}
      </Container>
    )}
  </Corpus>
)

export default ArticleCorpus
