import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
//import Logo from "../components/images/logoImage"
import Logo from "../images/danielmonk.gif"
import Headroom from "react-headroom"
import FacebookIcon from "../images/facebook-inline.svg"
import LinkedInIcon from "../images/linkedin-inline.svg"
import instagramIcon from "../images/instagram-icon.svg"
import githubIcon from "../images/github-logo.svg"
import MailIcon from "../images/envelope-inline.svg"
import '../js/helpers';

const Header = ({ siteTitle }) => (
  <div>
    <header className="header">
      <div className="header--logo">
        <div className="logo">
          <Link to="/"><div className="logo"></div></Link>
        </div>
      </div>
      <div className="header--nav">
        <ul>
          <li><a href="mailto:danieljmonk@gmail.com">Contact</a></li>
        </ul>
      </div>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
