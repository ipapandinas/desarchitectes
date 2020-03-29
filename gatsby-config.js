module.exports = {
  siteMetadata: {
    title: 'desarchitectes.com',
    description:
      'Abécédaire desarchitectes.com / Abecedario desarchitectes.com',
    author: 'Mister Telmo',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-remove-serviceworker`,
    'gatsby-plugin-react-helmet',
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
        // apiURL: 'https://desarchitectes.herokuapp.com',
        apiURL: process.env.API_URL || 'http://mgmt.desarchitectes.com',
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          'article',
          'user',
        ],
        queryLimit: 1000,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/d_favicon.png', // This path is relative to the root of the site.
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
