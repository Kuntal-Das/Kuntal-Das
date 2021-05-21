import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <Link className="footer__link" to="/contact">
      kuntal.das@gmail.com
    </Link>
    <ul className="social-list">
      <li className="social-list__item">
        <a href="#" className="social-list__link">a</a>
      </li>
      <li className="social-list__item">
        <a href="#" className="social-list__link">b</a>
      </li>
      <li className="social-list__item">
        <a href="#" className="social-list__link">c</a>
      </li>
      <li className="social-list__item">
        <a href="#" className="social-list__link">d</a>
      </li>
    </ul>
  </footer>
);

export default Footer;
