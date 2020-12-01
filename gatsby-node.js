/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({
  actions,
  stage
}) => {
  const { setWebpackConfig } = actions;

  if (stage === 'build-html') {
    setWebpackConfig({
      resolve: {
        alias: {
          'debug': require.resolve('debug').replace('index.js', 'browser.js'),
        }
      }
    })
  }

  setWebpackConfig({
    externals: {
      jquery: 'jQuery', // important: 'Q' capitalized
    }
  })
} 