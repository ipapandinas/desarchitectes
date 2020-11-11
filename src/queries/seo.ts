import { graphql, useStaticQuery } from 'gatsby';

interface SiteMetadataNode {
  author: string;
  defaultDescription: string;
  defaultImage: string;
  defaultTitle: string;
  titleTemplate: string;
  siteUrl: string;
}

type SiteMetadataQuery = () => SiteMetadataNode;

const useSiteMetadata: SiteMetadataQuery = () => {
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

export default useSiteMetadata;
