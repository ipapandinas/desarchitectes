import { FluidObject } from 'gatsby-image'

export interface MediaProps {
  alt?: string
  id?: number
  image: {
    childImageSharp: { fluid: FluidObject }
  }
  legend?: string
}

export interface ImageNodeProps {
  childImageSharp: { fluid: FluidObject }
  name?: string
  relativePath: string
}
