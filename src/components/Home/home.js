import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import './home.scss'

const Home = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HomeComponentQuery {
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
      return (
      <section className="content page-content home-retreat-content" >
              <div className="center-column flex-content">
                                  <div className="headers">
                                          <div className="headers-wrapper">
                                
                                              <div className="background-text">
                                          
                                              </div>
                                          </div>
                                  </div>
                              
                                      <div className="content-text">
                                      <p></p>
                                      </div>
                              
          </div>
      </section>
      )
    }}
  />
)


export default Home
