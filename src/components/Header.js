import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import "../styles/header.scss";

const Header = (props) => {
  const hamburger = useRef(null);
  const [isNavOpen, setIsNavClosed] = useState(false);

  const toggleNav = () => setIsNavClosed((prevIsNavOpen) => !prevIsNavOpen);

  const closeNav = () => setIsNavClosed(false);

  useEffect(() => {
    const ham = hamburger.current;
    ham.addEventListener("click", toggleNav);
    return () => ham.removeEventListener("click", toggleNav);
  }, []);

  return (
    <header className={`header ${isNavOpen && `nav-open`}`}>
      <div className="logo">
        <h2>KD</h2>
      </div>
      <button
        ref={hamburger}
        className="nav-toggle"
        aria-label="toggle navigation"
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/"
              exact={true}
              activeClassName="current-page"
              className="nav__link"
              onClick={closeNav}
            >
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/services"
              // to="#services"
              activeClassName="current-page"
              className="nav__link"
              onClick={closeNav}
            >
              My Services
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/about"
              activeClassName="current-page"
              className="nav__link"
              onClick={closeNav}
            >
              About Me
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/work"
              activeClassName="current-page"
              className="nav__link"
              onClick={closeNav}
            >
              My work
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
