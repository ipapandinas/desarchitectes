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
        article: allStrapiArticle(filter: {published: {eq: true}}) {
          edges {
            node {
              internal {
                type
              }
              routeName
              title_es: title_ES
              title_fr: title_FR
            }
          }
        }
        articles_es: allStrapiArticle(filter: {published: {eq: true}}) {
          nodes {
            routeName
            title: title_ES
          }
        }
        articles_fr: allStrapiArticle(filter: {published: {eq: true}}) {
          nodes {
            routeName
            title: title_FR
          }
        }
      }
    `
  ).then((result) => {
    // Create pages for each article.
    result.data.article.edges.forEach(({ node }) => {
      const { internal, routeName } = node
      const pageType = internal && internal.type

      supportedLanguages.map((lang) => {
        const articles = result.data[`articles_${lang}`].nodes || []
        const firstLetters = articles.map(({ title }) =>
          title.charAt(0).toUpperCase()
        )
        const localizedPath = `/${lang}/${routeName}`
        const word = node[`title_${lang}`]

        return createPage({
          path: localizedPath,
          component: path.resolve(`src/templates/Article/article-${lang}.tsx`),
          context: {
            appData: {
              alphabet: supportedAlphabets[lang],
              articles,
              isPreview: false,
              letters: [...new Set(firstLetters)],
              word
            },
            intl: {
              language: lang,
              defaultLanguage: defaultLanguage,
              languages: supportedLanguages,
              messages: getMessages('./src/intl/', lang),
              routed: true,
              originalPath: '/',
              redirect: false
            },
            pageType,
            routeName
          }
        })
      })
    })
  })

  const getLanding = makeRequest(
    graphql,
    `
      query Landing {
        landing: strapiLanding {
          internal {
            type
          }
        }
        articles_es: allStrapiArticle(filter: {published: {eq: true}}) {
          nodes {
            routeName
            title: title_ES
          }
        }
        articles_fr: allStrapiArticle(filter: {published: {eq: true}}) {
          nodes {
            routeName
            title: title_FR
          }
        }
      }
    `
  ).then((result) => {
    const pageType = result.data.landing && result.data.landing.internal.type

    supportedLanguages.map((lang) => {
      const articles = result.data[`articles_${lang}`].nodes || []
      const firstLetters = articles.map(({ title }) =>
        title.charAt(0).toUpperCase()
      )
      const localizedPath = `/${lang}`

      return createPage({
        path: localizedPath,
        component: path.resolve(`src/templates/Landing/landing-${lang}.tsx`),
        context: {
          appData: {
            alphabet: supportedAlphabets[lang],
            articles,
            isPreview: false,
            letters: [...new Set(firstLetters)]
          },
          intl: {
            language: lang,
            defaultLanguage: defaultLanguage,
            languages: supportedLanguages,
            messages: getMessages('./src/intl/', lang),
            routed: true,
            originalPath: '/',
            redirect: false
          },
          pageType
        }
      })
    })
  })

  return Promise.all([getArticles, getLanding])
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
