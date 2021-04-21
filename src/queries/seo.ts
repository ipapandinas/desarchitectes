import { graphql, useStaticQuery } from 'gatsby'

interface MetadataNode {
  author: string
  defaultLanguage: string
  description: string
  image: string
  siteUrl: string
  supportedLanguages: string[]
  title: string
  titleTemplate: string
}

interface SiteMetadataNode {
  siteMetadata: MetadataNode
}

type SiteMetadataQuery = () => {
  metaDefault: SiteMetadataNode
  metaES: SiteMetadataNode
  metaFR: SiteMetadataNode
}

const useSiteMetadata: SiteMetadataQuery = () => {
  const metadata = useStaticQuery(
    graphql`
      query {
        metaDefault: site {
          siteMetadata {
            author
            defaultLanguage
            description: descriptionFR
            image
            siteUrl: url
            supportedLanguages
            title: titleFR
            titleTemplate
          }
        }
        metaES: site {
          siteMetadata {
            author
            description: descriptionES
            image
            siteUrl: url
            title: titleES
            titleTemplate
          }
        }
        metaFR: site {
          siteMetadata {
            author
            description: descriptionFR
            image
            siteUrl: url
            title: titleFR
            titleTemplate
          }
        }
      }
    `
  )
  return metadata
}

export default useSiteMetadata
