import { graphql, useStaticQuery } from 'gatsby';

export const useImageQuery = () => {
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
