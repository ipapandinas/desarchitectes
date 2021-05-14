import { graphql, useStaticQuery } from 'gatsby'

import { ImageNode } from 'types/medias'

type ImageQuery = () => Array<{ node: ImageNode }>

export const useImageQuery: ImageQuery = () => {
  const { images } = useStaticQuery(
    graphql`
      {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(width: 600, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    `
  )
  return images.edges
}
