import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ alt, className, filename }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
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
    }}
  />
);

Image.defaultProps = {
  className: '',
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  filename: PropTypes.string.isRequired,
};

export default Image;
