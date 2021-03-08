import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Seo from 'components/1-Atoms/SEO'
import Article from 'components/4-Pages/Article'
import ArticleDesktop from 'components/4-Pages/ArticleDesktop'
import Layout from 'components/5-Utils/Layout/Layout'

import { useDevice } from 'hooks'
import { ArticlesDataProps } from 'types/articles'

interface Props {
  data: {
    strapiArticle: ArticlesDataProps
  }
}

const ArticleTemplateFR: FC<Props> = ({ data }) => {
  const device = useDevice()
  const isLaptop = device?.isDesktop || device?.isTabletLandscape

  if (data === undefined || data === null) {
    return null
  }

  const Component = isLaptop ? ArticleDesktop : Article
  const { strapiArticle: pageData } = data
  const { title: pageTitle } = pageData

  return (
    <Layout>
      <Seo pageTitle={pageTitle} />
      <Component data={pageData} />
    </Layout>
  )
}

export default ArticleTemplateFR

export const query = graphql`
  query ArticleTemplateFR($routeName: String!) {
    strapiArticle(routeName: { eq: $routeName }) {
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
              gatsbyImageData(height: 600, layout: CONSTRAINED)
            }
          }
        }
      }
      definition {
        id
        text: content_FR
        link: link_FR
        name: name_FR
        type: type_FR
      }
    }
  }
`
