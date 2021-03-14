import React, { FC, memo } from 'react'

import Media from 'components/1-Atoms/Medias/Media'
import TextMedias from 'components/1-Atoms/Medias/TextMedias'
import Text from 'components/1-Atoms/Text'

import { ContentProps } from 'types/articles'

const ContentMix: FC<ContentProps> = memo(
  ({ alt, id, image, legend, text_media: medias, text }) => {
    if (image !== undefined) {
      return (
        <div key={`media-${id}`}>
          <Media alt={alt ?? ''} image={image} legend={legend} />
        </div>
      )
    }

    return (
      <div key={`paragraph-${id}`}>
        <Text text={text} />
        {medias instanceof Array && medias.length > 0 && (
          <TextMedias medias={medias} />
        )}
      </div>
    )
  }
)

export default ContentMix
