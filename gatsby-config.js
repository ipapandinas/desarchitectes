require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Abécédaire / Abecedario desarchitectes',
    titleTemplate: '%s · desarchitectes.com',
    description:
      'Un abécédaire, un zoom sur des objets urbains. | Un abecedario, un zoom sobre objetos urbanos.',
    author: 'Mister Telmo · mrtelmo.com',
    url: 'https://www.desarchitectes.com',
    image: '/d_favicon.png',
    supportedLanguages: ['es', 'fr'],
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.GATSBY_API_URL,
        contentTypes: ['article', 'user'],
        singleTypes: ['landing'],
        queryLimit: 1000,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abécédaire / Abecedario desarchitectes.com`,
        short_name: `desarchitectes`,
        start_url: `/`,
        description: `Un abécédaire, un zoom sur des objets urbains. | Un abecedario, un zoom sobre objetos urbanos.`,
        lang: `fr`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/assets/images/d_favicon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/d_favicon.png`,
            sizes: `92x92`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://stats.desarchitectes.com/',
        siteUrl: 'https://desarchitectes.com/',
      },
    },
  ],
};
