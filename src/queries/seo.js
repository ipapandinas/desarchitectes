import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            defaultDescription: description
            defaultImage: image
            defaultTitle: title
            titleTemplate
            siteUrl: url
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
