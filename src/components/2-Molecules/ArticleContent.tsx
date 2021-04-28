import React, { FC } from 'react'

import Container from 'components/1-atoms/Container'
import ContentMedia from 'components/2-Molecules/Contents/ContentMedia'
import ContentMix from 'components/2-Molecules/Contents/ContentMix'
import ContentText from 'components/2-Molecules/Contents/ContentText'

import { ContentProps } from 'types/articles'

export const CONTENT_TYPE_MEDIA = 'MEDIA'
export const CONTENT_TYPE_MIX = 'MIX'
export const CONTENT_TYPE_TEXT = 'TEXT'

interface Props {
  activeTextAnchor?: string
  content: ContentProps[]
  setTextAnchor?: (textAnchor: string) => void
  type: string
}

const ArticleContent: FC<Props> = ({
  activeTextAnchor,
  content,
  setTextAnchor,
  type
}) => (
  <Container
    isNoVerticalPadding={type === CONTENT_TYPE_MEDIA}
    isWidthContainer
    {...{
      ...(type === CONTENT_TYPE_TEXT && { pt: '0 !important' }),
      ...(type === CONTENT_TYPE_MEDIA && { height: '100%' })
    }}
  >
    {content.map(({ alt, id, image, legend, text, text_media: medias }) => {
      switch (type) {
        // DESKTOP RIGHT SIDE
        case CONTENT_TYPE_MEDIA:
          return (
            <ContentMedia
              key={id}
              activeTextAnchor={activeTextAnchor}
              id={id}
              medias={medias}
              setTextAnchor={setTextAnchor}
            />
          )
        // DESKTOP LEFT SIDE
        case CONTENT_TYPE_TEXT:
          return (
            <ContentText
              key={id}
              activeTextAnchor={activeTextAnchor}
              id={id}
              text={text}
            />
          )

        // MOBILE
        case CONTENT_TYPE_MIX:
          return (
            <ContentMix
              key={id}
              alt={alt}
              id={id}
              image={image}
              legend={legend}
              text={text}
              text_media={medias}
            />
          )

        default:
          return null
      }
    })}
  </Container>
)

export default ArticleContent
