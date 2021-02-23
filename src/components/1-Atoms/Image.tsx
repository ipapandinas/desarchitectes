import React, { FC } from 'react'
import Img from 'gatsby-image'

import { useImageQuery } from 'queries/medias'
import { ImageNode } from 'types/medias'

interface Props {
  alt: string
  className?: string
  filename: string
}

const Image: FC<Props> = ({ alt, className, filename }) => {
  const data = useImageQuery()
  const image = data?.find(({ node }: { node: ImageNode }) =>
    node.relativePath.includes(filename)
  )

  if (image === undefined) {
    return null
  }

  // const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
  return (
    <Img
      alt={alt}
      className={className}
      fluid={image.node.childImageSharp.fluid}
    />
  )
}

export default Image
