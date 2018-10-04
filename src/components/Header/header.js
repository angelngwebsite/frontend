import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import line from '../../images/Line.svg'
import logo from '../../images/Logo.svg'
import mouse from '../../images/Mouse.svg'
import './header.scss'

const Header = ({ headerText, headerImage }) => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }
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
            <div className="home-text">{headerText}</div>
            <Img
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
              }}
              fluid={headerImage.localFile.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
