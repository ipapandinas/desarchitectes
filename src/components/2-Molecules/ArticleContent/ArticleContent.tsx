import React, { FC } from 'react';
import classnames from 'classnames';

import ContentMedia from 'components/2-Molecules/Contents/ContentMedia';
import ContentMix from 'components/2-Molecules/Contents/ContentMix';
import ContentText from 'components/2-Molecules/Contents/ContentText';
import articleStyles from 'components/4-Pages/Article/ArticleDesktop.module.scss';

import { ContentProps } from 'types/articles';

import styles from './ArticleContent.module.scss';

export const CONTENT_TYPE_MEDIA = 'MEDIA';
export const CONTENT_TYPE_MIX = 'MIX';
export const CONTENT_TYPE_TEXT = 'TEXT';

interface Props {
  activeTextAnchor?: string;
  content: ContentProps[];
  setTextAnchor?: (textAnchor: string) => void;
  type: string;
}

const ArticleContent: FC<Props> = ({
  activeTextAnchor,
  content,
  setTextAnchor,
  type,
}: Props) => (
  <div
    className={classnames(
      styles.root,
      articleStyles.articleContent,
      'container'
    )}
    id="articleContent"
  >
    {content.map(({ alt, id, image, legend, text, text_media: medias }) => {
      switch (type) {
        // DESKTOP RIGHT SIDE
        case CONTENT_TYPE_MEDIA:
          return (
            <ContentMedia
              key={id}
              id={id}
              medias={medias}
              setTextAnchor={setTextAnchor}
            />
          );
        // DESKTOP LEFT SIDE
        case CONTENT_TYPE_TEXT:
          return (
            <ContentText
              key={id}
              activeTextAnchor={activeTextAnchor}
              id={id}
              text={text}
            />
          );

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
          );

        default:
          return null;
      }
    })}
  </div>
);
export default ArticleContent;
