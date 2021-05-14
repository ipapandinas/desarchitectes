import React, { FC } from 'react'
import styled from 'styled-components'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { layout, LayoutProps } from 'styled-system'

import formatNewLine from 'services/textFormat'

export interface Props {
  alt: string
  image: {
    localFile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
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
      <GatsbyImage alt={alt} image={image.localFile.childImageSharp.gatsbyImageData} />
      <Legend>{formatNewLine(legend)}</Legend>
    </StyledMedia>
  )
}

export default Media
