import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

import favicon from 'assets/images/d_favicon.png';
import { useSiteMetadata } from 'queries';

import { usePageContext } from 'hooks';

const SEO = ({ image }) => {
  const { pathname } = useLocation();
  const { pageData } = usePageContext();
  const { lang } = pageData;
  const {
    defaultDescription,
    defaultImage,
    defaultTitle,
    titleTemplate,
    siteUrl,
  } = useSiteMetadata();

  let description = null;
  let title = null;

  switch (lang) {
    case 'fr': {
      description = 'Un abécédaire, un zoom sur des objets urbains.';
      title = 'Abécédaire desarchitectes';
      break;
    }
    case 'es': {
      description = 'Un abecedario, un zoom sobre objetos urbanos.';
      title = 'Abecedario desarchitectes';
      break;
    }
    default:
      break;
  }

  const seo = {
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    title: title || defaultTitle,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={titleTemplate}
      link={[
        { key: 'icon', rel: 'icon', type: 'image/png', href: `${favicon}` },
      ]}
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
};

SEO.defaultProps = {
  image: null,
};

export default SEO;
