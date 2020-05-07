import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { formatNewLine } from '../../../services';

import './Media.scss';

const LANDSCAPE = 'landscape';
const PORTRAIT = 'portrait';

const COLUMN = 'column';
const ROW = 'row';

function TextMedias(props) {
  const { medias, language } = props;

  if (!medias || !language) {
    return null;
  }

  const displayDirection = medias => {
    const result = [];
    medias.forEach(media => {
      const ratio = media.image.childImageSharp.fluid.aspectRatio;

      if (ratio > 1) {
        result.push(LANDSCAPE);
      } else {
        result.push(PORTRAIT);
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

    return COLUMN;
  };

  return (
    <div
      className={classNames('TextMedias', {
        'TextMedias--single-landscape': displayDirection(medias) === LANDSCAPE,
        'TextMedias--single-portrait': displayDirection(medias) === PORTRAIT,
        'TextMedias--row': displayDirection(medias) === ROW,
      })}
    >
      {medias.map(media => {
        return (
          <div key={media.id}>
            <Img
              className="Media__image"
              alt={media[`alt_${language}`]}
              fluid={media.image.childImageSharp.fluid}
            />
            <div className="Media__legend">
              {formatNewLine(media[`legend_${language}`])}
            </div>
          </div>
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
