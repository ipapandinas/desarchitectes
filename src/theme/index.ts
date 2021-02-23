import { DefaultTheme } from 'styled-components'

import base from './base'
import { esFonts, frFonts } from './fonts'
import {
  Breakpoints,
  Colors,
  Fonts,
  FontSizes,
  MediaQueries,
  Radii,
  Sizes,
  Spacing
} from './types'

export interface DesarchitectesTheme {
  breakpoints: Breakpoints
  colors: Colors
  fonts: Fonts
  fontSizes: FontSizes
  mediaQueries: MediaQueries
  radii: Radii
  sizes: Sizes
  spacing: Spacing
}

const esTheme: DefaultTheme = {
  ...base,
  fonts: esFonts
}

const frTheme: DefaultTheme = {
  ...base,
  fonts: frFonts
}

export default {
  default: frTheme,
  es: esTheme,
  fr: frTheme
}
