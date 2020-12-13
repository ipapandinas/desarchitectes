import React, { FC, memo } from 'react';

import Media from 'components/1-Atoms/Medias/Media';
import TextMedias from 'components/1-Atoms/Medias/TextMedias';
import Text from 'components/1-Atoms/Text/Text';

import { ContentProps } from 'types/articles';

import styles from './Contents.module.scss';

const ContentMix: FC<ContentProps> = memo(
  ({ alt, id, image, legend, text_media: medias, text }: ContentProps) => {
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
);

export default ContentMix;
