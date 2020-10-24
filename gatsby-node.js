const path = require(`path`);

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        return result;
      })
    );
  });

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getArticles = makeRequest(
    graphql,
    `
    {
      allStrapiArticle {
        edges {
          node {
            published
            routeName
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiArticle.edges.forEach(({ node }) => {
      if (node.published) {
        createPage({
          path: `/${node.routeName}`,
          component: path.resolve(`src/templates/article.jsx`),
          context: {
            routeName: node.routeName,
          },
        });
      }
    });
  });

  // Query for articles nodes to use in creating pages.
  return getArticles;
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'src/assets'),
        components: path.resolve(__dirname, 'src/components'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        pages: path.resolve(__dirname, 'src/pages'),
        queries: path.resolve(__dirname, 'src/queries'),
        reduxApp: path.resolve(__dirname, 'src/redux/app'),
        services: path.resolve(__dirname, 'src/services'),
        settings: path.resolve(__dirname, 'src/settings'),
        templates: path.resolve(__dirname, 'src/templates'),
      },
    },
  });
};
