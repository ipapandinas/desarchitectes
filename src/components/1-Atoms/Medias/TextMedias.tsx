import React, { FC, useCallback, useMemo } from 'react'
import classnames from 'classnames'

import Media from 'components/1-Atoms/Medias/Media'

import { MediaProps } from 'types/medias'

import styles from './TextMedias.module.scss'

interface Props {
  medias: MediaProps[]
}

const LANDSCAPE = 'landscape'
const PORTRAIT = 'portrait'
const PORTRAIT_LONG = 'portraitLong'

const COLUMN = 'column'
const ROW = 'row'

const TextMedias: FC<Props> = ({ medias }) => {
  const mediasAspectType = useMemo(
    () =>
      medias.reduce((acc: string[], { image }) => {
        const ratio = image?.childImageSharp.fluid.aspectRatio ?? -1

        if (ratio !== -1) {
          if (ratio > 0.9) {
            return [...acc, LANDSCAPE]
          }
          if (ratio < 0.6) {
            return [...acc, PORTRAIT_LONG]
          }
          return [...acc, PORTRAIT]
        }
        return acc
      }, []),
    [medias]
  )

  const nbMedias = useMemo(() => mediasAspectType.length, [
    mediasAspectType.length
  ])
  const displayDirection = useMemo(() => {
    if (nbMedias === 2) {
      return mediasAspectType.includes(LANDSCAPE) ? COLUMN : ROW
    }
    return nbMedias > 0 ? mediasAspectType[0] : undefined
  }, [mediasAspectType, nbMedias])

  const textMediasClass = useCallback(() => {
    if (displayDirection === undefined) {
      return undefined
    }

    if (nbMedias === 1) {
      return styles[`${displayDirection}Single`]
    }

    if (displayDirection === ROW) {
      return styles.row
    }

    return classnames(
      styles.column,
      [PORTRAIT, PORTRAIT_LONG].includes(mediasAspectType[0])
        ? styles.portraitFirst
        : styles.landscapeFirst
    )
  }, [displayDirection, mediasAspectType, nbMedias])

  if (displayDirection === undefined) {
    return null
  }

  return (
    <div className={classnames(styles.tm, textMediasClass())}>
      {medias.map(({ alt, id, image, legend }) => (
        <Media key={id} alt={alt} image={image} legend={legend} />
      ))}
    </div>
  )
}

export default TextMedias
