import React from "react";

const Introduction = (props) => (
  <section id="home" className="intro">
    <h1 className="section__title section__title--intro">
      Hi, I am <strong>Kuntal Das</strong>
    </h1>
    <p className="section__subtitle section__subtitle--intro">front-end dev</p>
    <img
      className="intro__img"
      src="https://source.unsplash.com/OhKElOkQ3RE/640"
      alt="Kuntal Das in skyblue shirt"
    />
  </section>
);

export default Introduction;
