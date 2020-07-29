import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { useImageQuery } from '../../../queries';

const Image = ({ alt, className, filename }) => {
  const data = useImageQuery();

  if (!data) {
    return null;
  }

  const image = data.find(n => {
    return n.node.relativePath.includes(filename);
  });

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

Image.defaultProps = {
  className: '',
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  filename: PropTypes.string.isRequired,
};

export default Image;
