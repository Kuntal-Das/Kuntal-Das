import React, { useEffect, useRef, useState } from "react";
import { HashRouter, Link, useLocation } from "react-router-dom";

import "../styles/header.scss";

const HomeHashRouter = ({ children, ...restProps }) => {
  let location = useLocation();
  console.log(location)
  if (location.pathname === "/") {
    return (
      <HashRouter {...restProps}>
        {children}
      </HashRouter>
    )
  }
  return children
}


const Header = (props) => {
  const hamburger = useRef(null);
  const [isNavOpen, setIsNavClosed] = useState(false);
  let loc = useLocation();

  const baseurl = (loc.pathname === "/") ? "/" : "/#";

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
            <Link
              to="/"
              exact={true}
              // activeClassName="current-page"
              className="nav__link"
              onClick={closeNav}
            >
              Home
            </Link>
          </li>
          <HomeHashRouter hashType="noslash">
            <li className="nav__item">
              <Link
                to={`${baseurl}services`}
                // activeClassName="current-page"
                className="nav__link"
                onClick={closeNav}
              >
                My Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to={`${baseurl}about`}
                // activeClassName="current-page"
                className="nav__link"
                onClick={closeNav}
              >
                About Me
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to={`${baseurl}work`}
                // activeClassName="current-page"
                className="nav__link"
                onClick={closeNav}
              >
                My work
              </Link>
            </li>
          </HomeHashRouter>
        </ul>
      </nav>
    </header >
  );
};

export default Header;
