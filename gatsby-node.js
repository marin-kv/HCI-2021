const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const resultPosts = await graphql(`
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

  const resultProducts = await graphql(`
  {
      allContentfulProduct {
        edges {
          node {
            productName
            id
          }
        }
      }
    }
  `)
  resultPosts.data.allContentfulBlogPostAll.edges.forEach(({ node }) => {
    createPage({
      path: '/posts/' + node.id,
      component: path.resolve(`./src/templates/blog_post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: node.id,
      },
    })
  })

  resultProducts.data.allContentfulProduct.edges.forEach(({ node }) => {
    createPage({
      path: '/products/' + node.id,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: node.id,
      },
    })
  })

}