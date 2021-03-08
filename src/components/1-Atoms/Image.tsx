import React, { FC } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

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

  return (
    <GatsbyImage
      image={image.node.childImageSharp.gatsbyImageData}
      alt={alt}
      className={className}
    />
  )
}

export default Image
