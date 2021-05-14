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

const ArticleTemplate: FC<Props> = ({ data }) => {
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

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($locale: String!, $routeName: String!) {
    strapiArticle(locale: { eq: $locale }, routeName: { eq: $routeName }) {
      title
      pdf {
        localFile {
          publicURL
        }
      }
      content {
        id
        text
        text_media {
          alt
          id
          legend
          image {
            name
            localFile {
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
      }
      definition {
        id
        link
        name
        type
        content
      }
    }
  }
`
