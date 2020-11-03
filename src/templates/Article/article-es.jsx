import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import SEO from 'components/1-Atoms/SEO/SEO';
import Article from 'components/4-Pages/Article/Article';
import ArticleDesktop from 'components/4-Pages/Article/ArticleDesktop';
import Layout from 'components/5-Utils/Layout/Layout';

import { useDevice } from 'hooks';

const ArticleTemplateES = ({ data }) => {
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

ArticleTemplateES.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ArticleTemplateES;

export const query = graphql`
  query ArticleTemplateES($routeName: String!) {
    strapiArticle(routeName: { eq: $routeName }) {
      published
      title: title_ES
      pdf {
        publicURL
      }
      content {
        id
        text: text_ES
        text_media {
          alt: alt_ES
          id
          legend: legend_ES
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
        content: content_ES
        link: link_ES
        name: name_ES
        type: type_ES
      }
    }
  }
`;
