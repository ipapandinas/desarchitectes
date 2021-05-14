const gatsbyConfig = require('./gatsby-config')

const path = require('path')

const supportedAlphabets = gatsbyConfig.siteMetadata.supportedAlphabets
const supportedLanguages = gatsbyConfig.siteMetadata.supportedLanguages
const defaultLanguage = gatsbyConfig.siteMetadata.defaultLanguage

// same function from 'gatsby-plugin-intl'
const getMessages = (path, language) => {
  try {
    const messages = require(`${path}/${language}.json`)
    return messages
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      process.env.NODE_ENV !== 'test' &&
        console.error(
          `[gatsby-plugin-intl] couldn't find file "${path}/${language}.json"`
        )
    }

    throw error
  }
}

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getArticles = makeRequest(
    graphql,
    `
      query Articles {
        articles: allStrapiArticle {
          edges {
            node {
              internal {
                type
              }
              locale
              routeName
            }
          }
        }
        articles_es: allStrapiArticle(filter: {locale: {eq: "es"}}) {
          nodes {
            routeName
            title
          }
        }
        articles_fr: allStrapiArticle(filter: {locale: {eq: "fr"}}) {
          nodes {
            routeName
            title
          }
        }
      }
    `
  ).then((result) => {
    // Create pages for each article.
    result.data.articles.edges.forEach(({ node }) => {
      const { internal, locale, routeName } = node

      if (!routeName) {
        return
      }

      const pageType = internal && internal.type
      const langArticles = result.data[`articles_${locale}`].nodes || []
      const localizedPath = `/${locale}/${routeName}`

      const firstLetters = langArticles.map(({ title }) =>
        title.charAt(0).toUpperCase()
      )
      const { title: word } =
        langArticles.find(
          ({ routeName: langRouteName }) => langRouteName === routeName
        ) || {}

      createPage({
        path: localizedPath,
        component: path.resolve('src/templates/article.tsx'),
        context: {
          appData: {
            alphabet: supportedAlphabets[locale],
            articles: langArticles,
            isPreview: false,
            letters: [...new Set(firstLetters)],
            word
          },
          intl: {
            language: locale,
            defaultLanguage: defaultLanguage,
            languages: supportedLanguages,
            messages: getMessages('./src/intl/', locale),
            routed: true,
            originalPath: '/',
            redirect: false
          },
          locale,
          pageType,
          routeName
        }
      })
    })
  })

  const getLandings = makeRequest(
    graphql,
    `
      query Landing {
        landings: allStrapiLanding {
          edges {
            node {
              internal {
                type
              }
              locale
            }
          }
        }
        articles_es: allStrapiArticle(filter: {locale: {eq: "es"}}) {
          nodes {
            routeName
            title
          }
        }
        articles_fr: allStrapiArticle(filter: {locale: {eq: "fr"}}) {
          nodes {
            routeName
            title
          }
        }
      }
    `
  ).then((result) => {
    // Create pages for each landing.
    result.data.landings.edges.forEach(({ node }) => {
      const { internal, locale } = node
      const pageType = internal && internal.type

      const articles = result.data[`articles_${locale}`].nodes || []
      const firstLetters = articles.map(({ title }) =>
        title.charAt(0).toUpperCase()
      )
      const localizedPath = `/${locale}`

      createPage({
        path: localizedPath,
        component: path.resolve('src/templates/landing.tsx'),
        context: {
          appData: {
            alphabet: supportedAlphabets[locale],
            articles,
            isPreview: false,
            letters: [...new Set(firstLetters)]
          },
          intl: {
            language: locale,
            defaultLanguage: defaultLanguage,
            languages: supportedLanguages,
            messages: getMessages('./src/intl/', locale),
            routed: true,
            originalPath: '/',
            redirect: false
          },
          locale,
          pageType
        }
      })
    })
  })

  return Promise.all([getArticles, getLandings])
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'src/assets'),
        components: path.resolve(__dirname, 'src/components'),
        contexts: path.resolve(__dirname, 'src/contexts'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        pages: path.resolve(__dirname, 'src/pages'),
        queries: path.resolve(__dirname, 'src/queries'),
        services: path.resolve(__dirname, 'src/services'),
        settings: path.resolve(__dirname, 'src/settings'),
        style: path.resolve(__dirname, 'src/style'),
        templates: path.resolve(__dirname, 'src/templates'),
        theme: path.resolve(__dirname, 'src/theme'),
        types: path.resolve(__dirname, 'src/types')
      }
    }
  })
}
