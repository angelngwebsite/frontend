import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import './sa-content.scss'

const SAContent = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SAContent {
        allWordpressPost(filter: { acf: { isStyleselection: { ne: null } } }) {
          edges {
            node {
              id
              wordpress_id
              acf {
                styleSelectionTitle
                styleSelectionPromotext
                styleSelectionBackground
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <section className="content page-content sacontent">
          <div className="center-column flex-content">
            <div className="headers">
              <div className="headers-wrapper">
                <h2>
                  {data.allWordpressPost.edges[0].node.acf.styleSelectionTitle}
                </h2>
                <div className="background-text">
                  {
                    data.allWordpressPost.edges[0].node.acf
                      .styleSelectionBackground
                  }
                </div>
              </div>
            </div>

            <div className="content-text">
              <p>
                {
                  data.allWordpressPost.edges[0].node.acf
                    .styleSelectionPromotext
                }
              </p>
            </div>
          </div>
        </section>
      )
    }}
  />
)

export default SAContent
