import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface Media {
  alt?: string
  id?: number
  image: {
    localFile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
  legend?: string
  styles?: string
}

export interface ImageNode {
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  name?: string
  relativePath: string
}
