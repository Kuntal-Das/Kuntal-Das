import React from "react";
import {Link} from "react-router-dom"

const Header = (props) => (
  <header>
    <div className="logo">
      <h2>KD</h2>
    </div>
    <button className="nav-toggle" aria-label="toggle navigation">
      <span className="hamburger"></span>
    </button>
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link" >Home</Link>
        </li>
        <li className="nav__item">
          <Link to="/services" className="nav__link" >My Services</Link>
        </li>
        <li className="nav__item">
          <Link to="/about" className="nav__link" >About Me</Link>
        </li>
        <li className="nav__item">
          <Link to="/work" className="nav__link" >My work</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
