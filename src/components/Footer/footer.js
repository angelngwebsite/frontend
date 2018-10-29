import logo from '../../images/Logo.svg'
import { Link } from 'gatsby'
import React from 'react'
import './footer.scss'

const Footer = ({ siteUrl, title }) => {
  return (
    <footer id="footer">
      <div className="center-column">
        <div className="stay-connected">
          <article id="footer-contacts">
            <h1>Contact</h1>
            <div className="background-text">Contact</div>
            <p>Tallinn, Estonia</p>
          </article>
        </div>
        {/* <article id="newsletter">
          <input
            type="text"
            name="email"
            placeholder="Your email here
                "
          />
          <input type="submit" className="button" value="Submit" />
        </article> */}
        <a className="mailto" href="mailto:angelng.design@gmail.com">
          Send a message
        </a>
        <div className="social-contacts">
          <div className="facebook">
            <strong>facebook: </strong>
            <a href="https://www.facebook.com/angelng.fashion/">Angelng</a>
          </div>{' '}
          <div className="facebook">
            <strong>instagram: </strong>
            <a href="https://www.instagram.com/angelng.fashion/">
              Angelng.fashion
            </a>
          </div>
        </div>{' '}
        <div className="credentials">
          <Link className="logo-icon" to="/">
            <img src={logo} href={siteUrl} alt={title} />
          </Link>
          <div className="signature-wrapper">
            <small className="copyright">
              2018 ANGELNG. All rights reserved.
            </small>
            <small className="credits">
              WEBSITE DESIGN BY DMITRIJS PAVLOVS
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
