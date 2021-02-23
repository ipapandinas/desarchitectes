import {
  MEDIA_LANDSCAPE,
  MEDIA_PORTRAIT,
  MEDIA_PORTRAIT_LONG
} from 'settings/media'
import { Media } from 'types/medias'

export const getMediasRatio = (medias: Media[]): string[] =>
  medias
    .map(({ image }) => {
      const ratio = image?.childImageSharp.fluid.aspectRatio ?? -1

      if (ratio !== -1) {
        if (ratio > 0.9) {
          return MEDIA_LANDSCAPE
        }
        if (ratio < 0.6) {
          return MEDIA_PORTRAIT_LONG
        }
        return MEDIA_PORTRAIT
      }
      return ''
    })
    .filter((media) => media !== '')
