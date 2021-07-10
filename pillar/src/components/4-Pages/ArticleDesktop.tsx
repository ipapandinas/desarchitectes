import React, { FC, useState } from 'react'
import styled from 'styled-components'

import Separator from 'components/1-Atoms/Separator'
import ArticleContent, {
  CONTENT_TYPE_MEDIA,
  CONTENT_TYPE_TEXT
} from 'components/2-Molecules/ArticleContent'
import ArticleCorpus from 'components/3-Blocks/ArticleCorpus'
import Footer from 'components/3-Blocks/Footer'

import { ArticlesDataProps } from 'types/articles'

interface Props {
  data: ArticlesDataProps
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  height: 100vh;
  width: 50%;
`

const LeftContent = styled(Content)`
  overflow: hidden scroll;
`
const RightContent = styled(Content)`
  position: relative;
`

const StyledArticleContent = styled(ArticleContent)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0 !important;
  padding-bottom: 0 !important;

  > * {
    margin-top: 0 !important;
  }
`

const StyledFooter = styled(Footer)`
  position: sticky;
  bottom: 0;
  z-index: 100;
`

const ArticleDesktop: FC<Props> = ({ data }) => {
  const { content, definition, pdf, title } = data
  const [activeTextAnchor, setTextAnchor] = useState('')

  if (content.length === 0) {
    return null
  }

  return (
    <Wrapper>
      <LeftContent id='leftContent'>
        <ArticleCorpus
          activeTextAnchor={activeTextAnchor}
          content={content}
          definition={definition}
          pdf={pdf}
          title={title}
          variant={CONTENT_TYPE_TEXT}
        />
        <StyledFooter isVisible />
      </LeftContent>

      <Separator />

      <RightContent>
        <StyledArticleContent
          activeTextAnchor={activeTextAnchor}
          content={content}
          setTextAnchor={setTextAnchor}
          type={CONTENT_TYPE_MEDIA}
        />
      </RightContent>
    </Wrapper>
  )
}

export default ArticleDesktop
