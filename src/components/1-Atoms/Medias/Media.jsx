import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { formatNewLine } from 'services';

import './Media.scss';

function Media(props) {
  const { media } = props;

  if (!media) {
    return null;
  }

  return (
    media.image && (
      <div className="Media">
        <Img
          className="Media__image"
          alt={media.alt}
          fluid={media.image.childImageSharp.fluid}
        />
        <div className="Media__legend">
          {formatNewLine(media.legend)}
        </div>
      </div>
    )
  );
}

Media.propTypes = {
  media: PropTypes.object.isRequired,
};

export default Media;
