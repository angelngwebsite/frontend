import React from 'react'
import PropTypes, { node } from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import './about-slider.scss'
import Swiper from 'react-id-swiper'
import Img from 'gatsby-image'

const AboutSlider = ({ children }) => (
  <StaticQuery
    query={graphql`
      query AboutSlider {
        allWordpressPost(filter: { acf: { isAbout: { ne: null } } }) {
          edges {
            node {
              id
              wordpress_id
              acf {
                aboutImages {
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
      const params = {
        spaceBetween: 20,
        slidesPerView: 1,
        loop: false,
      }
      return (
        <section id="about-promos" className="center-column">
          <Swiper {...params}>
            {data.allWordpressPost.edges[0].node.acf.aboutImages.map(
              (image, i) => {
                return (
                  <article key={i} className="promo">
                    <div className="inner-wrapper">
                      <div className="thumbnail">
                        <Img
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%',
                          }}
                          fluid={image.localFile.childImageSharp.fluid}
                        />
                      </div>
                    </div>
                  </article>
                )
              }
            )}
          </Swiper>
        </section>
      )
    }}
  />
)

export default AboutSlider
