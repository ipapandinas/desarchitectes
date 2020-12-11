import { graphql, useStaticQuery } from 'gatsby';

import { ImageNodeProps } from 'types/medias';

type ImageQuery = () => Array<{ node: ImageNodeProps }>;

export const useImageQuery: ImageQuery = () => {
  const { images } = useStaticQuery(
    graphql`
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
    `
  );
  return images.edges;
};
