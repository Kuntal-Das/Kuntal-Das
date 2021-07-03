import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { HomePage } from "./pages";
import { getThemes } from "./theme"
import { GlobalStyles } from "./GlobalStyles";
import HeaderContainer from "./containers/headerContainer";

class App extends Component {
  constructor(props) {
    super(props);
    [this.fixed, this.light, this.dark] = getThemes()
    this.mql = window.matchMedia('(prefers-color-scheme: dark)')
    this.state =
      this.mql.matches ?
        {
          theme: { ...this.fixed, ...this.dark },
        } :
        {
          theme: { ...this.fixed, ...this.light },
        }
  }

  toggleColorScheme = (targetThemeName = "") => {
    this.setState(prevState => {
      if (prevState.theme.name === "light") {
        return ({ theme: { ...prevState.theme, ...this.dark } })
      }
      return ({ theme: { ...prevState.theme, ...this.light } })
    })
  }

  setColorScheme = (e) => {
    if (e.matches) {
      this.setState(prevState => ({
        theme: { ...prevState.theme, ...this.dark },
      }))
    }
    else {
      this.setState(prevState => ({
        theme: { ...prevState.theme, ...this.light },
      }))
    }
  }

  componentDidMount = () => {
    this.mql.addEventListener('change', this.setColorScheme);
  }

  componentWillUnmount = () => {
    this.mql.removeEventListener('change', this.setColorScheme);
  }

  render = () => (
    <ThemeProvider theme={{ ...this.state.theme }}>
      <GlobalStyles />
      <BrowserRouter>
        <HeaderContainer toggleColorScheme={this.toggleColorScheme} />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/work">
            <h2>Work</h2>
          </Route>
          <Route path="/about">
            <h2>About</h2>
          </Route>
          <Route path="/contact">
            <h2>Contact</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
