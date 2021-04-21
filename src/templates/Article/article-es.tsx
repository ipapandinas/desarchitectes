import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Seo from 'components/1-Atoms/SEO'
import Article from 'components/4-Pages/Article'
import ArticleDesktop from 'components/4-Pages/ArticleDesktop'

import { useDevice } from 'hooks'
import { ArticlesDataProps } from 'types/articles'

interface Props {
  data: {
    strapiArticle: ArticlesDataProps
  }
}

const ArticleTemplateES: FC<Props> = ({ data }) => {
  const device = useDevice()
  const isLaptop = device?.isDesktop || device?.isTabletLandscape

  if (data === undefined || data === null) {
    return null
  }

  const Component = isLaptop ? ArticleDesktop : Article
  const { strapiArticle: pageData } = data
  const { title: pageTitle } = pageData

  return (
    <>
      <Seo pageTitle={pageTitle} />
      <Component data={pageData} />
    </>
  )
}

export default ArticleTemplateES

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
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                height: 600
                layout: CONSTRAINED
                placeholder: BLURRED
              )
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
`
