import React, { FC } from 'react'
import { FluidObject } from 'gatsby-image'

import { MEDIA_PORTRAIT, MEDIA_PORTRAIT_LONG } from 'settings/media'
import { Media as MediaProps } from 'types/medias'

import Media from './Media'

interface Props extends MediaProps {
  alt?: string
  format: string
  image: {
    childImageSharp: { fluid: FluidObject }
  }
  legend?: string
}

const PortraitSingle: FC<MediaProps> = (props) => (
  <Media width={[1, 1, 1, 3 / 4]} {...props} />
)

const PortraitLongSingle: FC<MediaProps> = (props) => (
  <Media width={[1, 1, 1, 4 / 6]} {...props} />
)

const LandscapeSingle: FC<MediaProps> = (props) => (
  <Media width={1} {...props} />
)

const SingleMedia: FC<Props> = ({ alt, format, image, legend }) => {
  switch (format) {
    case MEDIA_PORTRAIT:
      return <PortraitSingle alt={alt} image={image} legend={legend} />

    case MEDIA_PORTRAIT_LONG:
      return <PortraitLongSingle alt={alt} image={image} legend={legend} />

    default:
      return <LandscapeSingle alt={alt} image={image} legend={legend} />
  }
}

export default SingleMedia
