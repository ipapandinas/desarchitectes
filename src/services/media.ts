import {
  MEDIA_LANDSCAPE,
  MEDIA_PORTRAIT,
  MEDIA_PORTRAIT_LONG
} from 'settings/media'
import { Media } from 'types/medias'

export const getMediasRatio = (medias: Media[]): string[] =>
  medias
    .map(({ image }) => {
      const height =
        image?.localFile?.childImageSharp?.gatsbyImageData.height ?? 0
      const width =
        image?.localFile?.childImageSharp?.gatsbyImageData.width ?? -1
      const ratio = width / height

      if (ratio > 0) {
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
