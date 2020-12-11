import React, { FC } from 'react';
import { graphql } from 'gatsby';

import SEO from 'components/1-Atoms/SEO/SEO';
import Article from 'components/4-Pages/Article/Article';
import ArticleDesktop from 'components/4-Pages/Article/ArticleDesktop';
import Layout from 'components/5-Utils/Layout/Layout';

import { useDevice } from 'hooks';
import { ArticlesDataProps } from 'types/articles';

interface Props {
  data: {
    strapiArticle: ArticlesDataProps;
  };
}

const ArticleTemplateES: FC<Props> = ({ data }: Props) => {
  const device = useDevice();
  const isLaptop = device?.isDesktop || device?.isTabletLandscape;

  if (!data) {
    return null;
  }

  const Component = isLaptop ? ArticleDesktop : Article;
  const { strapiArticle: pageData } = data;
  const { title: pageTitle } = pageData;

  return (
    <Layout>
      <SEO pageTitle={pageTitle} />
      <Component data={pageData} />
    </Layout>
  );
};

export default ArticleTemplateES;

export const query = graphql`
  query ArticleTemplateES($routeName: String!) {
    strapiArticle(routeName: { eq: $routeName }) {
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
        text: content_ES
        link: link_ES
        name: name_ES
        type: type_ES
      }
    }
  }
`;
