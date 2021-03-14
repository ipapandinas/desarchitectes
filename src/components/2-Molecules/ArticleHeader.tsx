import React, { FC, useMemo } from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

import Translation from 'components/5-Utils/Translation'
import { PdfProps } from 'types/articles'

interface Props {
  pdf: PdfProps
  title: string
}

const StyledHeader = styled.span`
  display: flex;
  flex-direction: column;
`

const Letter = styled.span`
  font-family: ${({ theme }) => theme.fonts.italic};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  text-align: center;
`

const Pdf = styled.a`
  width: 9rem;
  border: ${({ theme }) => `1px solid ${theme.colors.text}`};
  border-radius: ${({ theme }) => theme.radii.block};
  color: ${({ theme }) => theme.colors.contrast};
  margin: ${({ theme }) => `0 auto ${theme.spacing[4]}`};
  padding: 0.4rem 0.8rem;
  text-align: center;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`

const Title = styled.span<SpaceProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  ${space};
`

const ArticleHeader: FC<Props> = ({ pdf, title }) => {
  const letter = useMemo(() => title?.charAt(0), [title])

  return (
    <StyledHeader>
      <Letter>
        {letter.toLowerCase()} <Translation id='like' />
      </Letter>
      <Title mb={['1.2rem', '2rem', '1.2rem']}>{title.toUpperCase()}</Title>
      {pdf?.publicURL !== undefined && (
        <Pdf href={pdf.publicURL}>
          <Translation id='pdf' />
        </Pdf>
      )}
    </StyledHeader>
  )
}

export default ArticleHeader
