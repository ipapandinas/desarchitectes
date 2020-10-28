import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import SEO from 'components/1-Atoms/SEO/SEO';
import Article from 'components/4-Pages/Article/Article';
import ArticleDesktop from 'components/4-Pages/Article/ArticleDesktop';
import Layout from 'components/layout';

import { useDevice } from 'hooks';

const ArticleTemplateFR = ({ data }) => {
  const { isDesktop, isTabletLandscape } = useDevice();
  const isLaptop = isDesktop || isTabletLandscape;

  if (!data) {
    return null;
  }

  const Component = isLaptop ? ArticleDesktop : Article;

  return (
    <Layout>
      <SEO />
      <Component data={data.strapiArticle} />
    </Layout>
  );
};

ArticleTemplateFR.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ArticleTemplateFR;

export const query = graphql`
  query ArticleTemplateFR($routeName: String!) {
    strapiArticle(routeName: { eq: $routeName }) {
      published
      title: title_FR
      pdf {
        publicURL
      }
      content {
        id
        text: text_FR
        text_media {
          alt: alt_FR
          id
          legend: legend_FR
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
        content: content_FR
        link: link_FR
        name: name_FR
        type: type_FR
      }
    }
  }
`;
