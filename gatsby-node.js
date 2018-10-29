const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local WordPress graphql schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.

  console.log('==== PAGES (WORDPRESS NATIVE) ====')
  graphql(
    `
      {
        allWordpressPost(filter: { acf: { isCollection: { ne: null } } }) {
          edges {
            node {
              id
              wordpress_id
              acf {
                collectionTitle
                collectionDescription
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors)
      reject(result.errors)
    }

    console.log('Create Page pages.')
    // Create Page pages.
    const collectionTemplate = path.resolve('./src/templates/collection.js')
    // We want to create a detailed page for each
    // page node. We'll just use the WordPress Slug for the slug.
    // The Page ID is prefixed with 'PAGE_'
    console.log(result.data.allWordpressPost.edges)
    _.each(result.data.allWordpressPost.edges, edge => {
      console.log('EACH loop')
      // Gatsby uses Redux to manage its internal state.
      // Plugins and sites can use functions like "createPage"
      // to interact with Gatsby.
      console.log('/' + edge.node.wordpress_id + '/')
      createPage({
        // Each page is required to have a `path` as well
        // as a template component. The `context` is
        // optional but is often necessary so the template
        // can query data specific to each page.

        path: '/collections/' + edge.node.wordpress_id + '/',
        component: slash(collectionTemplate),
        context: {
          wordpress_id: edge.node.wordpress_id,
        },
      })
      console.log('Page created')
    })
  })
  console.log('==== END PAGES ====')

  // console.log('==== NEWS (WORDPRESS NATIVE) ====')
  // graphql(
  //   `
  //     {
  //       allWordpressPost(filter: { acf: { isNews: { ne: null } } }) {
  //         edges {
  //           node {
  //             id
  //             wordpress_id
  //             acf {
  //               newsTitle
  //               newsDescription
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // ).then(result => {
  //   if (result.errors) {
  //     console.log(result.errors)
  //     reject(result.errors)
  //   }

  //   console.log('Create NEWS pages.')
  //   // Create Page pages.
  //   const collectionTemplate = path.resolve('./src/templates/news-page.js')
  //   // We want to create a detailed page for each
  //   // page node. We'll just use the WordPress Slug for the slug.
  //   // The Page ID is prefixed with 'PAGE_'
  //   console.log(result.data.allWordpressPost.edges)
  //   _.each(result.data.allWordpressPost.edges, edge => {
  //     console.log('EACH loop')
  //     // Gatsby uses Redux to manage its internal state.
  //     // Plugins and sites can use functions like "createPage"
  //     // to interact with Gatsby.
  //     console.log('/' + edge.node.wordpress_id + '/')
  //     createPage({
  //       // Each page is required to have a `path` as well
  //       // as a template component. The `context` is
  //       // optional but is often necessary so the template
  //       // can query data specific to each page.

  //       path: '/news-page/' + edge.node.wordpress_id + '/',
  //       component: slash(collectionTemplate),
  //       context: {
  //         wordpress_id: edge.node.wordpress_id,
  //       },
  //     })
  //     console.log('NEWS created')
  //   })
  // })
  // console.log('==== END NEWS ====')
}
