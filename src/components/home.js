import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import './home.scss'
import line from '../images/Line.svg'
import logo from '../images/Logo.svg'
import mouse from '../images/Mouse.svg'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "Image1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.data)
    return (
      <section id="home">
        <img alt="scrollp" className="home-line" src={line} />
        <div className="swiper-container home-swiper">
          <img alt="logo-icon" className="home-logo" src={logo} />
          <div className="home-scroll">Scroll to explore</div>
          <img alt="mouse-icon" className="home-mouse" src={mouse} />
          <div className="swiper-pagination" />
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              

              <div className="home-text">Say ‘I do’</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
