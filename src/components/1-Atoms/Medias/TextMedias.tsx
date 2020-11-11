import React, { FC } from 'react';
import classNames from 'classnames';
import Img from 'gatsby-image';

import formatNewLine from 'services/textFormat';
import { MediaProps } from 'types/medias';

import './Media.scss';

interface Props {
  medias: MediaProps[];
}

const LANDSCAPE = 'landscape';
const LONG_PORTRAIT = 'long_portrait';
const PORTRAIT = 'portrait';

const COLUMN = 'column';
const COLUMN_LANDSCAPE_FIRST = 'COLUMN_LANDSCAPE_FIRST';
const COLUMN_PORTRAIT_FIRST = 'COLUMN_PORTRAIT_FIRST';
const ROW = 'row';

const TextMedias: FC<Props> = ({ medias }: Props) => {
  const displayDirection = (list: MediaProps[]) => {
    const result: string[] = [];
    list.forEach((media) => {
      if (media.image && media.image.childImageSharp) {
        const ratio = media.image.childImageSharp.fluid.aspectRatio;

        if (ratio > 1) {
          result.push(LANDSCAPE);
        } else if (ratio < 0.6) {
          result.push(LONG_PORTRAIT);
        } else {
          result.push(PORTRAIT);
        }
      }
    });

    if (result.length === 1) {
      return result[0];
    }

    if (
      result.length === 2 &&
      result[0] === PORTRAIT &&
      result[1] === PORTRAIT
    ) {
      return ROW;
    }

    if (
      result.length === 2 &&
      result[0] === LANDSCAPE &&
      result[1] === PORTRAIT
    ) {
      return COLUMN_LANDSCAPE_FIRST;
    }

    if (
      result.length === 2 &&
      result[0] === PORTRAIT &&
      result[1] === LANDSCAPE
    ) {
      return COLUMN_PORTRAIT_FIRST;
    }

    return COLUMN;
  };

  return (
    <div
      className={classNames('TextMedias', {
        'TextMedias--column':
          displayDirection(medias) === COLUMN_LANDSCAPE_FIRST ||
          displayDirection(medias) === COLUMN_PORTRAIT_FIRST,
        'landscape-first': displayDirection(medias) === COLUMN_LANDSCAPE_FIRST,
        'portrait-first': displayDirection(medias) === COLUMN_PORTRAIT_FIRST,
        'TextMedias--row': displayDirection(medias) === ROW,
        'TextMedias--single-landscape': displayDirection(medias) === LANDSCAPE,
        'TextMedias--single-long-portrait':
          displayDirection(medias) === LONG_PORTRAIT,
        'TextMedias--single-portrait': displayDirection(medias) === PORTRAIT,
      })}
    >
      {medias.map(
        (media) =>
          media.image && (
            <div className="Media" key={media.id}>
              <Img
                className="Media__image"
                alt={media.alt}
                fluid={media.image.childImageSharp.fluid}
              />
              <div className="Media__legend">{formatNewLine(media.legend)}</div>
            </div>
          )
      )}
    </div>
  );
};

export default TextMedias;
