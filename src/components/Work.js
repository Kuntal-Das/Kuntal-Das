import React from "react";
import { Link } from "react-router-dom";

const Work = (props) => (
  <section id="work" className="work">
    <h2 className="section__title section__title--work">My Work</h2>
    <p className="section__subtitle section__subtitle--work">
      A Selection of my range of work
    </p>

    {/* 00 */}
    <div className="portfolio">
      <Link to="/project/1" className="portfolio__item">
        <img
          className="portfolio__img"
          src="https://source.unsplash.com/240x240?webdesign"
          alt=""
        />
      </Link>

      {/* 01 */}
      <Link to="/project/1" className="portfolio__item">
        <img
          className="portfolio__img"
          src="https://source.unsplash.com/240x240?webdesign"
          alt=""
        />
      </Link>

      {/* 02 */}
      <Link to="/project/1" className="portfolio__item">
        <img
          className="portfolio__img"
          src="https://source.unsplash.com/240x240?webdesign"
          alt=""
        />
      </Link>

      {/* 03 */}
      <Link to="/project/1" className="portfolio__item">
        <img
          className="portfolio__img"
          src="https://source.unsplash.com/240x240?webdesign"
          alt=""
        />
      </Link>

      {/* 04 */}
      <Link to="/project/1" className="portfolio__item">
        <img
          className="portfolio__img"
          src="https://source.unsplash.com/240x240?webdesign"
          alt=""
        />
      </Link>

      {/* 05 */}
      <Link to="/project/1" className="portfolio__item">
        <img
          className="portfolio__img"
          src="https://source.unsplash.com/240x240?webdesign"
          alt=""
        />
      </Link>

      {/* 06 */}
      {/* <Link to="/" className="portfolio__item">
        <img
          className="portfolio__img"
          src="https://source.unsplash.com/240x240?webdesign"
          alt=""
        />
      </Link> */}
    </div>
  </section>
);

export default Work;
