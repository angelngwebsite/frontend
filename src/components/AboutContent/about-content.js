import React from 'react'
import PropTypes, { node } from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import './about-content.scss'
import Swiper from 'react-id-swiper'
import Img from 'gatsby-image'

const AboutContent = ({ children }) => (
  <StaticQuery
    query={graphql`
      query AboutContent {
        allWordpressPost(filter: { acf: { isAbout: { ne: null } } }) {
          edges {
            node {
              id
              wordpress_id
              acf {
                aboutTitle
                aboutBackgroundText
                aboutDescription
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <section className="content page-content about-content">
          <div className="center-column flex-content">
            <div className="headers">
              <div className="headers-wrapper">
                <h2>{data.allWordpressPost.edges[0].node.acf.aboutTitle}</h2>
                <div className="background-text">
                  {data.allWordpressPost.edges[0].node.acf.aboutBackgroundText}
                </div>
              </div>
            </div>
            <div className="content-text">
              <p>{data.allWordpressPost.edges[0].node.acf.aboutDescription}</p>
            </div>
          </div>
        </section>
      )
    }}
  />
)

export default AboutContent
