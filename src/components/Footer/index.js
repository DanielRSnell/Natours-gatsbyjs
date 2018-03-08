import React from "react";
import Link from "gatsby-link";

import FooterLogo from "../../layouts/img/logo-green-2x.png";

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo-box">
      <img src={FooterLogo} alt="Full logo" className="footer__logo" />
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Company
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Contact us
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Carrers
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Privacy policy
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-1-of-2">
        <p className="footer__copyright">
          Built by <strong>Daniel R. Snell</strong> for the Gatsby Community-
          This is a <strong>GatsbyJS and Netlify CMS template </strong>
          created by Daniel R. Snell and Designed by Jonas Schmedtmann. Please
          feel free to to use this template for commercial or non-commerical
          projects.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
