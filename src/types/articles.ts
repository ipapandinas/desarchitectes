import { ImageNodeProps, MediaProps } from 'types/medias';

export interface ArticlesProps {
  routeName: string;
  title: string;
}

export interface ArticlesDataProps {
  content: ContentProps[];
  definition: DefinitionProps[];
  pdf: PdfProps;
  title: string;
  variant: string;
}

export interface ContentProps {
  alt?: string;
  id: number;
  image?: ImageNodeProps;
  legend?: string;
  text: string;
  text_media?: MediaProps[];
}

export interface DefinitionProps {
  id?: number;
  link?: string;
  name: string;
  text: string;
  type: string;
}

export interface PdfProps {
  publicURL: string;
}

export interface SuggestionsProps {
  routeName: string;
  title: string;
}
