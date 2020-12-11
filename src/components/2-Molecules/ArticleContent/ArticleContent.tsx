import React, { FC } from 'react';
import classnames from 'classnames';
import { Element, Link } from 'react-scroll';

import Media from 'components/1-Atoms/Medias/Media';
import Text from 'components/1-Atoms/Text/Text';
import TextMedias from 'components/1-Atoms/Medias/TextMedias';
import articleStyles from 'components/4-Pages/Article/ArticleDesktop.module.scss';

import { ContentProps } from 'types/articles';

import styles from './ArticleContent.module.scss';

export const CONTENT_TYPE_MEDIA = 'MEDIA';
export const CONTENT_TYPE_MIX = 'MIX';
export const CONTENT_TYPE_TEXT = 'TEXT';

interface Props {
  content: ContentProps[];
  type: string;
}

const ArticleContent: FC<Props> = ({ content, type }: Props) => (
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
            medias instanceof Array &&
            medias.length > 0 && (
              <Link
                activeClass={styles.mediaAnchorActive}
                className={classnames(styles.mediaAnchor, 'fade-in')}
                containerId="corpus"
                duration={500}
                offset={-180}
                smooth
                spy
                to={`text-anchor-${id}`}
                key={`text-media-${id}`}
              >
                <TextMedias medias={medias} />
              </Link>
            )
          );
        // DESKTOP LEFT SIDE
        case CONTENT_TYPE_TEXT:
          return (
            <Element
              className={styles.textAnchor}
              name={`text-anchor-${id}`}
              key={`text-${id}`}
            >
              <Text text={text} />
            </Element>
          );

        // MOBILE
        case CONTENT_TYPE_MIX: {
          if (image) {
            return (
              <div className={styles.media} key={`media-${id}`}>
                <Media alt={alt} id={id} image={image} legend={legend} />
              </div>
            );
          }

          return (
            <div className={styles.paragraph} key={`paragraph-${id}`}>
              <Text text={text} />
              {medias instanceof Array && medias.length > 0 && (
                <TextMedias medias={medias} />
              )}
            </div>
          );
        }
        default:
          return null;
      }
    })}
  </div>
);

export default ArticleContent;
