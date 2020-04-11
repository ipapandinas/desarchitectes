import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import { connect } from 'react-redux';

import favicon from '../../../assets/images/d_favicon.png';

const SEO = ({ image, language, word }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl: url
            defaultImage: image
          }
        }
      }
    `
  );

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata;

  let description = null;
  let lang = `fr`;
  let title = null;

  switch (language) {
    case 'FR': {
      description = 'Un abécédaire, un zoom sur des objets urbains.';
      title = 'Abécédaire desarchitectes';
      break;
    }
    case 'ES': {
      description = 'Un abecedario, un zoom sobre los objetos urbanos.';
      lang = `es`;
      title = 'Abecedario desarchitectes';
      break;
    }
    default:
      break;
  }

  const seo = {
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    title: word || title || defaultTitle,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={titleTemplate}
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

SEO.propTypes = {
  image: PropTypes.string,
  language: PropTypes.string,
  word: PropTypes.string,
};

SEO.defaultProps = {
  image: null,
  language: undefined,
  word: undefined,
};

const mapStateToProps = state => {
  return {
    language: state.app.language,
    word: state.app.word,
  };
};

export default connect(mapStateToProps)(SEO);
