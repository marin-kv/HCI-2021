const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    {
        allContentfulBlogPostAll {
          edges {
            node {
              title
              id
            }
          }
        }
      }
    `)
    result.data.allContentfulBlogPostAll.edges.forEach(({ node }) => {
        createPage({
          path:  '/posts/' + node.id,
          component: path.resolve(`./src/templates/blog_post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            id: node.id,
          },
        })
      })
  }