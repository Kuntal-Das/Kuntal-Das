import React from "react";

const Introduction = (props) => (
  <section id="home" className="intro">
    <h1 className="section__title section__title--intro">
      {props.titleLight}
      <strong>{props.titleBold}</strong>
    </h1>
    <p className="section__subtitle section__subtitle--intro">
      {props.subtitle}
    </p>
    <img
      className="intro__img"
      src={props.imgSrc}
      alt="Kuntal Das in skyblue shirt"
    />
  </section>
);

export default Introduction;
