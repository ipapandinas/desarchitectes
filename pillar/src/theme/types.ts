export type Breakpoints = string[]

export interface Colors {
  contrast: string
  invertedContrast: string
  neutrals: string[]
  text: string

  // Gradients
  gradients: {
    prewiewWhite: string
  }
}

export interface Fonts {
  bold: string
  boldItalic: string
  italic: string
  regular: string
}

export type FontSizes = string[]

export interface MediaQueries {
  sm: string
  md: string
  lg: string
  xl: string
}

export interface Radii {
  circle: string
  block: string
}

export interface Sizes {
  letterSlot: string[]
}

export type Spacing = string[]
