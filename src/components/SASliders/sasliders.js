import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import './sasliders.scss'

const SASliders = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SASliders {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
        allWordpressPost(filter: { acf: { isRadioshow: { ne: null } } }) {
          edges {
            node {
              id
              wordpress_id
              acf {
                newsTitle
                newsEmbed
                newsDescription
                featuredImage {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1800) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <section className="content page-content home-retreat-content">
          <div className="center-column flex-content">
            <div className="headers">
              <div className="headers-wrapper">
                <div className="background-text" />
              </div>
            </div>

            <div className="content-text">
              <p />
            </div>
          </div>
        </section>
      )
    }}
  />
)

export default SASliders
