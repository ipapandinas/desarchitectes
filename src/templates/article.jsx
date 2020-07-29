import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { useDevice } from '../hooks';

import { SEO } from '../components/1-Atoms';
import { Article, ArticleDesktop } from '../components/4-Pages';
import Layout from '../components/layout';

const ArticleTemplate = ({ data }) => {
  const { isDesktop, isTabletLandscape } = useDevice();
  const isLaptop = isDesktop || isTabletLandscape;

  const Component = isLaptop ? ArticleDesktop : Article;

  return (
    <Layout>
      <SEO />
      <Component data={data.strapiArticle} />
    </Layout>
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
