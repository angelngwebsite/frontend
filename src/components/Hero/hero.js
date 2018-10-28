import React from 'react'
import Img from 'gatsby-image'
import logo from '../../images/Logo.svg'
import mouse from '../../images/Mouse.svg'
import './hero.scss'

const Header = ({ headerText, headerImage, siteUrl, title }) => {
  return (
    <section id="header">
      <div className="swiper-container home-swiper">
        <a className="logo-icon" href={siteUrl}>
          <img src={logo} href={siteUrl} alt={title} />
        </a>

        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <h1 className="caption">
              <div className="centered">{headerText}</div>
            </h1>
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
        <div className="swiper-pagination" />
      </div>
      <div className="scroll-to-explore">
        <div className="scroll-text">Scroll to Explore</div>
        <div
          style={{
            backgroundImage: 'url(' + mouse + ')',
            backgroundPositionX: '50%',
            backgroundPositionY: '50%',
            backgroundRepeat: 'no-repeat',
          }}
          className="scroll-image"
        />
        <div className="scroll-line" />
      </div>
    </section>
  )
}

export default Header
