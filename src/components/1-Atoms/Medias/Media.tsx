import React, { FC } from 'react';
import Img from 'gatsby-image';

import formatNewLine from 'services/textFormat';
import { MediaProps } from 'types/medias';

import './Media.scss';

const Media: FC<MediaProps> = ({ alt, id, image, legend }: MediaProps) => (
  <div className="Media" key={id}>
    <Img
      className="Media__image"
      alt={alt}
      fluid={image.childImageSharp.fluid}
    />
    <div className="Media__legend">{formatNewLine(legend)}</div>
  </div>
);

export default Media;
