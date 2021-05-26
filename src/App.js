import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.scss";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import WorkPage from "./pages/WorkPage";
import ProjectPage from "./pages/ProjectPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/work" component={WorkPage} />
          {/* <Route path="/services" component={ServicesPage} /> */}
          <Route path="/contact" component={ServicesPage} />
          <Route path="/project/1" component={ProjectPage} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
