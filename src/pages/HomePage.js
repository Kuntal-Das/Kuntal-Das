import React, { Fragment } from "react";
import Introduction from "../components/Introduction";
import Services from "../components/Services";
import About from "../components/About";
import Work from "../components/Work";

const HomePage = (props) => (
  <Fragment>
    <Introduction
      titleLight="Hi, I am"
      titleBold="Kuntal Das"
      subtitle="front-end dev"
      imgSrc="https://source.unsplash.com/OhKElOkQ3RE/640x768"
    />
    <Services />
    <About />
    <Work />
  </Fragment>
);

export default HomePage;
