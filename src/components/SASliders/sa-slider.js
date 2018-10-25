import React from 'react'
import PropTypes, { node } from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import './sasliders.scss'
import Swiper from 'react-id-swiper';
import Img from 'gatsby-image'
const SASliders = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SASliders {
        allWordpressPost(filter: { acf: { isRadioshow: { ne: null } } }) {
          edges {
            node {
              id
              wordpress_id
              acf {
                newsTitle
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
      const params = {
        spaceBetween: 20,
        slidesPerView: 5,
        loop: false,
        breakpoints: {
          640: {
            slidesPerView: 1
          },
          767: {
            slidesPerView: 2
          },
          989: {
            slidesPerView: 3
          },
          1439: {
            slidesPerView: 4
          },
          1919: {
            slidesPerView: 5
          }
        },
      }
      return (
        <section id="promos">
          <Swiper {...params}>
            {data.allWordpressPost.edges.map((news, i) => {
              return <article key={i} className="promo" >
                <div className="inner-wrapper">
                  <div className="thumbnail" >

                    <Img
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                      }}
                      fluid={news.node.acf.featuredImage.localFile.childImageSharp.fluid}
                    />

                  </div>
                  <div className="content">
                    <h4 className="fs_title">{news.node.acf.newsTitle}</h4>
                    <div className="hidden-content">
                      <div className="content-wrapper">
                        <div className="border"></div>
                        <p className=""></p>
                      </div>

                      <div className="promo-actions">


                        <a href="{$promo->link}" className="promo-button" >
                          Read more
                          <span className="arrow">
                            <span className="line"></span>
                            <span className="point"></span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            })}
          </Swiper>
        </section>
      )
    }}
  />
)

export default SASliders

