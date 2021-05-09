import {
  Breakpoints,
  Colors,
  FontSizes,
  MediaQueries,
  Radii,
  Sizes,
  Spacing
} from './types'

export const breakpointMap: { [key: string]: number } = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1440
}

const breakpoints: Breakpoints = Object.values(breakpointMap).map(
  (breakpoint) => `${breakpoint}px`
)

const colors: Colors = {
  contrast: '#000',
  invertedContrast: '#FFF',
  neutrals: ['#959595', '#999999'],
  text: '#1b1b1b',

  gradients: {
    prewiewWhite: 'linear-gradient(to right, rgba(255, 255, 255, 0.99), #fff)'
  }
}

const fontSizes: FontSizes = [
  '1.2rem',
  '1.4rem',
  '1.6rem',
  '2rem',
  '2.4rem',
  '3.2rem',
  '4.8rem'
]

const mediaQueries: MediaQueries = {
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`
}

const radii: Radii = {
  block: '0.3rem',
  circle: '50%'
}

const sizes: Sizes = {
  letterSlot: ['3.8rem', '5.8rem']
}

const spacing: Spacing = [
  '0.4rem',
  '0.8rem',
  '1.6rem',
  '2.4rem',
  '3.2rem',
  '4rem',
  '4.8rem',
  '5.6rem',
  '6.4rem',
  '9.6rem'
]

export default {
  breakpoints,
  colors,
  fontSizes,
  mediaQueries,
  radii,
  sizes,
  spacing
}
