import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { formatNewLine } from '../../../services';

import './Media.scss';

const LANDSCAPE = 'landscape';
const LONG_PORTRAIT = 'long_portrait';
const PORTRAIT = 'portrait';

const COLUMN = 'column';
const COLUMN__LANDSCAPE_FIRST = 'column__landscape_first';
const COLUMN__PORTRAIT_FIRST = 'column__portrait_first';
const ROW = 'row';

function TextMedias(props) {
  const { medias, language } = props;

  if (!medias || !language) {
    return null;
  }

  const displayDirection = medias => {
    const result = [];
    medias.forEach(media => {
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
      return COLUMN__LANDSCAPE_FIRST;
    }

    if (
      result.length === 2 &&
      result[0] === PORTRAIT &&
      result[1] === LANDSCAPE
    ) {
      return COLUMN__PORTRAIT_FIRST;
    }

    return COLUMN;
  };

  return (
    <div
      className={classNames('TextMedias', {
        'TextMedias--column':
          displayDirection(medias) === COLUMN__LANDSCAPE_FIRST ||
          displayDirection(medias) === COLUMN__PORTRAIT_FIRST,
        'landscape-first': displayDirection(medias) === COLUMN__LANDSCAPE_FIRST,
        'portrait-first': displayDirection(medias) === COLUMN__PORTRAIT_FIRST,
        'TextMedias--row': displayDirection(medias) === ROW,
        'TextMedias--single-landscape': displayDirection(medias) === LANDSCAPE,
        'TextMedias--single-long-portrait':
          displayDirection(medias) === LONG_PORTRAIT,
        'TextMedias--single-portrait': displayDirection(medias) === PORTRAIT,
      })}
    >
      {medias.map(media => {
        return (
          media.image && (
            <div className="Media" key={media.id}>
              <Img
                className="Media__image"
                alt={media[`alt_${language}`]}
                fluid={media.image.childImageSharp.fluid}
              />
              <div className="Media__legend">
                {formatNewLine(media[`legend_${language}`])}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
}

TextMedias.propTypes = {
  medias: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired,
};

export default TextMedias;
