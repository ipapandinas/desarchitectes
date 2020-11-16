import React, { FC } from 'react';
import classnames from 'classnames';

import Media from 'components/1-Atoms/Medias/Media';

import { MediaProps } from 'types/medias';

import styles from './TextMedias.module.scss';

interface Props {
  medias: MediaProps[];
}

const LANDSCAPE = 'landscape';
const PORTRAIT = 'portrait';
const PORTRAIT_LONG = 'portraitLong';

const COLUMN = 'column';
const ROW = 'row';

const TextMedias: FC<Props> = ({ medias }: Props) => {
  const mediasAspectType = medias.reduce((acc: string[], { image }) => {
    const ratio = image?.childImageSharp.fluid.aspectRatio;

    if (ratio) {
      if (ratio > 0.9) {
        return [...acc, LANDSCAPE];
      }
      if (ratio < 0.6) {
        return [...acc, PORTRAIT_LONG];
      }
      return [...acc, PORTRAIT];
    }
    return acc;
  }, []);

  const nbMedias = mediasAspectType.length;
  let displayDirection = nbMedias > 0 ? mediasAspectType[0] : undefined;
  if (nbMedias === 2) {
    displayDirection = mediasAspectType.includes(LANDSCAPE) ? COLUMN : ROW;
  }

  if (!displayDirection) {
    return null;
  }

  const textMediasClass = () => {
    if (nbMedias === 1) {
      return styles[`${displayDirection}Single`];
    }

    if (displayDirection === ROW) {
      return styles.row;
    }

    return classnames(
      styles.column,
      [PORTRAIT, PORTRAIT_LONG].includes(mediasAspectType[0])
        ? styles.portraitFirst
        : styles.landscapeFirst
    );
  };

  return (
    <div className={classnames(styles.tm, textMediasClass())}>
      {medias.map(({ alt, id, image, legend }) => (
        <Media key={id} alt={alt} image={image} legend={legend} />
      ))}
    </div>
  );
};

export default TextMedias;
