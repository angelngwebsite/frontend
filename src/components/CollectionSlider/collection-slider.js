import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './collection-slider.scss'
import Swiper from 'react-id-swiper'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
const CollectionSlider = ({ children }) => (
  <StaticQuery
    query={graphql`
      query CollectionSlider {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
        allWordpressPost(
          filter: { acf: { isCollection: { ne: null } } }
          sort: { fields: date, order: DESC }
        ) {
          edges {
            node {
              id
              wordpress_id
              acf {
                collectionTitle
                collectionDescription
                collectionMainImage {
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
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: false,
        breakpoints: {
          450: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 2,
          },
          989: {
            slidesPerView: 3,
          },
          1439: {
            slidesPerView: 4,
          },
          1919: {
            slidesPerView: 5,
          },
        },
      }
      return (
        <section id="collection-slider">
          <Swiper {...params}>
            {data.allWordpressPost.edges.map((collection, i) => {
              const collectionUrl =
                '/collections/' +
                collection.node.wordpress_id +
                '/#collection-start'
              console.log(collectionUrl)
              return (
                <article key={i} className="promo">
                  <Link to={collectionUrl}>
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
                          fluid={
                            collection.node.acf.collectionMainImage.localFile
                              .childImageSharp.fluid
                          }
                        />
                      </div>
                      <div className="content">
                        <h4 className="fs_title">
                          {collection.node.acf.collectionTitle}
                        </h4>
                        <div className="hidden-content">
                          <div className="content-wrapper">
                            <div className="border" />
                            <p className="" />
                          </div>

                          <div className="promo-actions">
                            <div href={collectionUrl} className="promo-button">
                              Show more
                              <span className="arrow">
                                <span className="line" />
                                <span className="point" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              )
            })}
          </Swiper>
        </section>
      )
    }}
  />
)

export default CollectionSlider
