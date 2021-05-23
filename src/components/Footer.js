import React from "react";
import { Link } from "react-router-dom";

import "../styles/footer.scss";

const Footer = () => (
  <footer className="footer">
    <Link className="footer__link" to="/contact">
      kuntal.das@gmail.com
    </Link>
    <ul className="social-list">
      <li className="social-list__item">
        <a
          href="https://codepen.io/kuntal-das"
          className="social-list__link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-codepen"></i>
        </a>
      </li>
      <li className="social-list__item">
        <a
          href="https://twitter.com/Kuntal449"
          className="social-list__link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li className="social-list__item">
        <a
          href="https://github.com/Kuntal-Das/"
          className="social-list__link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </li>
      <li className="social-list__item">
        <a
          href="https://www.linkedin.com/in/kuntal-das-5296271b1/"
          className="social-list__link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
