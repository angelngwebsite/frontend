module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'dayrim.com',
        protocol: 'https',

        hostingWPCOM: false,

        useACF: true,
        // Include specific ACF Option Pages that have a set post ID
        // Regardless if an ID is set, the default options route will still be retrieved
        // Must be using V3 of ACF to REST to include these routes
        // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
        // routes with the ID option_page_1 and option_page_2
        // Dashes in IDs will be converted to underscores for use in GraphQL
        acfOptionPageIds: [],
        auth: {
          // If auth.user and auth.pass are filled, then the source plugin will be allowed
          // to access endpoints that are protected with .htaccess.
          htaccess_user: 'belamoor',
          htaccess_pass: 'DSdfdcv54vb354b',
          htaccess_sendImmediately: true,
        },
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: true,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.

        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // Exclude specific routes using glob parameters
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]` will exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        excludedRoutes: ['/*/*/comments', '/yoast/**'],
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // postCssPlugins: [somePostCssPlugin()]
      },
    },
  ],
}
