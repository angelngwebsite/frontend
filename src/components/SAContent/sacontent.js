import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import './sacontent.scss'

const SAContent = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SAContent {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
        allWordpressPost(filter: { acf: { isStyleselection: { ne: null } } }) {
          edges {
            node {
              id
              wordpress_id
              acf {
                styleSelectionTitle
                styleSelectionPromotext
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

export default SAContent
