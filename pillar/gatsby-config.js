require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    titleES: 'Abecedario desarchitectes',
    titleFR: 'Abécédaire desarchitectes',
    titleTemplate: '%s · desarchitectes.com',
    descriptionES: 'Un abecedario, un zoom sobre objetos urbanos.',
    descriptionFR: 'Un abécédaire, un zoom sur des objets urbains.',
    author: 'Mr Telmo · mrtelmo.com',
    url: 'https://www.desarchitectes.com',
    image: '/d_favicon.png',
    defaultLanguage: 'fr',
    supportedAlphabets: {
      es: [...'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'],
      fr: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    },
    supportedLanguages: ['es', 'fr']
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-preact',
    {
      resolve: 'gatsby-plugin-gatsby-cloud',
      options: {
        headers: {
          '/fonts/*': [
            'Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable'
          ],
          '/meta/*': [
            'Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable'
          ],
          '**/*.ttf': [
            'Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable'
          ],
          '**/*.ttf': [
            'Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable'
          ]
        },
        allPageHeaders: [
          'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload'
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/svg`
        }
      }
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.GATSBY_API_URL,
        collectionTypes: [
          {
            name: 'article',
            api: { qs: { _locale: 'all' } }
          },
          {
            name: 'landing',
            api: { qs: { _locale: 'all' } }
          }
        ],
        queryLimit: 1000
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Abécédaire / Abecedario desarchitectes.com',
        short_name: 'desarchitectes',
        start_url: '/',
        description:
          'Un abécédaire, un zoom sur des objets urbains. | Un abecedario, un zoom sobre objetos urbanos.',
        lang: 'fr',
        background_color: '#fff',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/assets/images/d_favicon.png', // This path is relative to the root of the site.
        icons: [
          {
            src: '/d_favicon.png',
            sizes: '92x92',
            type: 'image/png'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://stats.desarchitectes.com/',
        siteUrl: 'https://desarchitectes.com/'
      }
    },
    {
      resolve: 'gatsby-plugin-react-intl',
      options: {
        path: `${__dirname}/src/intl`,
        languages: ['es', 'fr'],
        defaultLanguage: 'fr',
        ignoredPaths: ['/'],
        redirect: false
      }
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          assets: 'src/assets',
          components: 'src/components',
          contexts: 'src/contexts',
          hooks: 'src/hooks',
          pages: 'src/pages',
          queries: 'src/queries',
          services: 'src/services',
          settings: 'src/settings',
          style: 'src/style',
          templates: 'src/templates',
          theme: 'src/theme',
          types: 'src/types'
        }
      }
    }
  ]
}
