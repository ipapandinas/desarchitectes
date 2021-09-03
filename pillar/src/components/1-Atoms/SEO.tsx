import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useIntl } from 'gatsby-plugin-intl'

import d_favicon from 'assets/images/d_favicon.png'
import useSiteMetadata from 'queries/seo'

interface Props {
  pageTitle?: string
}

const SEO: FC<Props> = ({ pageTitle }) => {
  const { pathname } = useLocation()
  const { locale: lang } = useIntl()
  const { metaDefault, metaES, metaFR } = useSiteMetadata()

  let metaData = metaDefault.siteMetadata
  switch (lang) {
    case 'es':
      metaData = metaES.siteMetadata
      break
    case 'fr':
      metaData = metaFR.siteMetadata
      break
    default:
      break
  }

  const {
    author,
    description,
    image,
    siteUrl,
    title: defaultTitle,
    titleTemplate
  } = metaData
  const favicon = `${siteUrl}${image}`
  const title = pageTitle ?? defaultTitle
  const url = `${siteUrl}${pathname}`

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={titleTemplate}
      link={[
        {
          key: 'icon',
          rel: 'icon',
          type: 'image/png',
          href: `${d_favicon}` // eslint-disable-line @typescript-eslint/restrict-template-expressions
        }
      ]}
    >
      <meta name='author' content={author} />
      <meta name='description' content={description} />
      <meta name='image' content={favicon} />
      {url !== '' && <meta property='og:url' content={url} />}
      {title !== '' && <meta property='og:title' content={title} />}
      {description !== '' && (
        <meta property='og:description' content={description} />
      )}
      {favicon !== '' && <meta property='og:image' content={favicon} />}
      <meta name='twitter:card' content='summary_large_image' />
      {title !== '' && <meta name='twitter:title' content={title} />}
      {description !== '' && (
        <meta name='twitter:description' content={description} />
      )}
      {favicon !== '' && <meta name='twitter:image' content={favicon} />}
      <link rel='preload' as='font' />
    </Helmet>
  )
}

export default SEO
