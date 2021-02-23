import React, { FC, memo } from 'react'
import styled from 'styled-components'

import { useDevice } from 'hooks'

import Media from './Media'
import SingleMedia from './SingleMedia'

import { MEDIA_LANDSCAPE } from 'settings/media'
import { getMediasRatio } from 'services/media'
import { Media as MediaProps } from 'types/medias'

interface Props {
  medias: MediaProps[]
}

const DoubleMediaWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 50%;

  > * {
    padding: 0 2.4rem;
  }
`

const DoubleMedia = styled(Media)`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
`

const DoubleMediaMobile = styled(Media)`
  margin-bottom: 2.4rem;
  &:last-child {
    margin-bottom: 0;
  }
`

const TextMedias: FC<Props> = memo(({ medias }) => {
  const { isLaptop } = useDevice()
  const mediasAspectType = getMediasRatio(medias)
  const nbMedias = mediasAspectType.length

  if (nbMedias === 0) {
    return null
  }

  if (
    nbMedias === 1 ||
    (isLaptop && mediasAspectType.includes(MEDIA_LANDSCAPE))
  ) {
    const { alt, id, image, legend } = medias[0]
    return (
      <SingleMedia
        key={id}
        alt={alt}
        format={mediasAspectType[0]}
        image={image}
        legend={legend}
      />
    )
  }

  if (isLaptop) {
    return (
      <DoubleMediaWrapper>
        {medias.map(({ alt, id, image, legend }) => (
          <DoubleMedia key={id} alt={alt} image={image} legend={legend} />
        ))}
      </DoubleMediaWrapper>
    )
  }

  return (
    <>
      {medias.map(({ alt, id, image, legend }) => (
        <DoubleMediaMobile key={id} alt={alt} image={image} legend={legend} />
      ))}
    </>
  )
})

export default TextMedias
