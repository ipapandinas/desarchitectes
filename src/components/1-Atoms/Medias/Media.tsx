import React, { FC } from 'react'
import styled from 'styled-components'
import Img, { FluidObject } from 'gatsby-image'
import { layout, LayoutProps } from 'styled-system'

import formatNewLine from 'services/textFormat'

export interface Props {
  alt?: string
  image: {
    childImageSharp: { fluid: FluidObject }
  }
  legend?: string
  styles?: string
}

const StyledMedia = styled.div<LayoutProps>`
  margin: 0;
  ${layout}
`

const Legend = styled.div`
  ${({ theme }) => `margin: ${theme.spacing[2]} 0 0;`}

  > * {
    margin: 0;
  }
`

const Media: FC<Props & LayoutProps> = (props) => {
  const { alt, image, legend } = props
  return (
    <StyledMedia {...props}>
      <Img alt={alt} fluid={image.childImageSharp.fluid} />
      <Legend>{formatNewLine(legend)}</Legend>
    </StyledMedia>
  )
}

export default Media
