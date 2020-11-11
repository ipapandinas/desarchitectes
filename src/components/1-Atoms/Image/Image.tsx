import React, { FC } from 'react';
import Img from 'gatsby-image';

import useImageQuery from 'queries/medias';
import { ImageNodeProps } from 'types/medias';

interface Props {
  alt: string;
  className?: string;
  filename: string;
}

const Image: FC<Props> = ({ alt, className, filename }: Props) => {
  const data = useImageQuery();
  const image = data?.find(({ node }: { node: ImageNodeProps }) =>
    node.relativePath.includes(filename)
  );

  if (!image) {
    return null;
  }

  // const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
  return (
    <Img
      alt={alt}
      className={className}
      fluid={image.node.childImageSharp.fluid}
    />
  );
};

export default Image;
