import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Article } from '../components/4-Pages';
import App from '../components/App/App';

const ArticleTemplate = ({ data }) => (
  <App>
    <Article data={data.strapiArticle} />
  </App>
);

ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ArticleTemplate;

export const query = graphql`
  query ArticleTemplate($routeName: String!) {
    strapiArticle(routeName: { eq: $routeName }) {
      title_ES
      title_FR
      pdf {
        publicURL
      }
      content {
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
