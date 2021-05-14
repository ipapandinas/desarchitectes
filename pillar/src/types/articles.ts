import { ImageNode, Media } from 'types/medias'

export interface ArticlesProps {
  routeName: string
  title: string
}

export interface ArticlesDataProps {
  content: ContentProps[]
  definition: DefinitionProps[]
  pdf: PdfProps
  title: string
  variant: string
}

export interface ContentProps {
  alt?: string
  id: number
  image?: ImageNode
  legend?: string
  text: string
  text_media?: Media[]
}

export interface DefinitionProps {
  id?: number
  link?: string
  name: string
  content: string
  type: string
}

export interface PdfProps {
  localFile: {
    publicURL: string
  }
}

export type SuggestionsProps = Array<{
  routeName: string
  title: string
}>
