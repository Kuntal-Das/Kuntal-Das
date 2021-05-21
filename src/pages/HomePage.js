import React, { Fragment } from "react";
import Introduction from "../components/Introduction";
import Services from "../components/Services";
import About from "../components/About";
import Work from "../components/Work";
import Footer from "../components/Footer";

const HomePage = (props) => (
  <Fragment>
    <Introduction />
    <Services />
    <About />
    <Work />
    <Footer />
  </Fragment>
);

export default HomePage;
