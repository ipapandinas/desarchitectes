import React from 'react';
import PropTypes from 'prop-types';
import { Element, Link } from 'react-scroll';

import { Media, Text, TextMedias } from '../../1-Atoms';

import './ArticleContent.scss';

export const CONTENT_TYPE_MEDIA = 'MEDIA';
export const CONTENT_TYPE_MIX = 'MIX';
export const CONTENT_TYPE_TEXT = 'TEXT';

function ArticleContent(props) {
  const { content, language, type } = props;

  if (!content || !language) {
    return null;
  }

  return (
    <div className="ArticleContent container" id="articleContent">
      {content.map(item => {
        if (!item) {
          return null;
        }

        const {
          id,
          image,
          [`text_${language}`]: text,
          text_media: medias,
        } = item;

        switch (type) {
          // DESKTOP RIGHT SIDE
          case CONTENT_TYPE_MEDIA:
            return (
              medias instanceof Array &&
              medias.length > 0 && (
                <Link
                  activeClass="media-anchor--active"
                  className="media-anchor fade-in"
                  containerId="corpus"
                  duration={500}
                  offset={-150}
                  smooth
                  spy
                  to={`text-anchor-${id}`}
                  key={`text-media-${id}`}
                >
                  <TextMedias medias={medias} language={language} />
                </Link>
              )
            );
          // DESKTOP LEFT SIDE
          case CONTENT_TYPE_TEXT:
            return (
              <Element
                className="text-anchor"
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
                <div className="ArticleContent__media" key={`media-${id}`}>
                  <Media media={item} language={language} />
                </div>
              );
            }

            return (
              <div
                className="ArticleContent__paragraph"
                key={`paragraph-${id}`}
              >
                <Text text={text} />
                <TextMedias medias={medias} language={language} />
              </div>
            );
          }
          default:
            return null;
        }
      })}
    </div>
  );
}

ArticleContent.propTypes = {
  content: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ArticleContent;
