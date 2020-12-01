import PropTypes from "prop-types"
import React from "react"
import LoadingIcon from "../images/loading.svg"

const Footer = ({ siteTitle }) => (
  <div>
    <footer className="footer">
        <div className="footer--menu">
          <ul className="ticker">
            <li>© Daniel Monk 2019. All rights reserved</li>
            <li><a href="mailto:danieljmonk@gmail.com">Mail: danieljmonk@gmail.com</a></li>
          </ul>
        </div>
    </footer>
    <div className="cursor"></div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
