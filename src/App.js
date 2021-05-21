import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";

import Header from "./components/Header";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Services from "./pages/ServicesPage";
import Work from "./pages/WorkPage";

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        {/* <Footer /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/services" component={Services} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
