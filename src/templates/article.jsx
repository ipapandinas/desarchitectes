import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import { BK_LG_MIN } from '../settings/ui';

import { SEO } from '../components/1-Atoms';
import { Article, ArticleDesktop } from '../components/4-Pages';
import App from '../components/App/App';

const ArticleTemplate = ({ data }) => {
  // RESPONSIVE
  const isDesktop = useMediaQuery({
    query: `(min-device-width: ${BK_LG_MIN})`,
  });

  let article = <Article data={data.strapiArticle} />;
  if (isDesktop) {
    article = <ArticleDesktop data={data.strapiArticle} />;
  }

  return (
    <>
      <SEO />
      <App>{article}</App>
    </>
  );
};

ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ArticleTemplate;

export const query = graphql`
  query ArticleTemplate($routeName: String!) {
    strapiArticle(routeName: { eq: $routeName }) {
      published
      title_ES
      title_FR
      pdf {
        publicURL
      }
      content {
        id
        alt_FR
        alt_ES
        image {
          name
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        legend_ES
        legend_FR
        text_ES
        text_FR
        text_media {
          alt_ES
          alt_FR
          id
          legend_ES
          legend_FR
          image {
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      definition {
        id
        content_ES
        content_FR
        link_FR
        link_ES
        name_ES
        name_FR
        type_ES
        type_FR
      }
    }
  }
`;
