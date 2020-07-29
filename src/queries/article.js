import { graphql, useStaticQuery } from 'gatsby';

export const useArticlesQuery = () => {
  const { articles } = useStaticQuery(
    graphql`
      query {
        articles: allStrapiArticle {
          nodes {
            published
            routeName
            title_FR
            title_ES
          }
        }
      }
    `
  );
  return articles.nodes;
};
