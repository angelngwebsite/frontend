import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header/header'
import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteHeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
        allWordpressPost(
          filter: { acf: { headerImage: { wordpress_id: { ne: null } } } }
        ) {
          edges {
            node {
              id
              wordpress_id
              acf {
                headerText
                headerImage {
                  source_url
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1800) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
              id
              wordpress_id
            }
          }
        }
      }
    `}
    render={data => {
      //console.log(data.allWordpressPost.edges[0].node.acf.headerImage)
      return (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header
            headerText={data.allWordpressPost.edges[0].node.acf.headerText}
            headerImage={data.allWordpressPost.edges[0].node.acf.headerImage}
          />
          <div>{children}</div>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
