import { FluidObject } from 'gatsby-image'

export interface Media {
  alt?: string
  id?: number
  image: {
    childImageSharp: { fluid: FluidObject }
  }
  legend?: string
  styles?: string
}

export interface ImageNode {
  childImageSharp: { fluid: FluidObject }
  name?: string
  relativePath: string
}
