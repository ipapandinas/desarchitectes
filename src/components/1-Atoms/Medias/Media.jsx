import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { formatNewLine } from '../../../services';

import './Media.scss';

function Media(props) {
  const { media, language } = props;

  if (!media || !language) {
    return null;
  }

  return (
    media.image && (
      <div className="Media">
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
}

Media.propTypes = {
  media: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

export default Media;
