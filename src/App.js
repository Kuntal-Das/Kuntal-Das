import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { HomePage } from "./pages";
import { getThemes } from "./colorScheme"

class App extends Component {
  constructor(props) {
    super(props);
    [this.light, this.dark] = getThemes()
    this.mql = window.matchMedia('(prefers-color-scheme: dark)')
    this.state = {
      theme: { ...this.light },
    }
  }

  toggleColorScheme = () => {
    this.setState(prevState => {
      if (prevState.theme.name === "light") {
        return ({ theme: { ...this.dark } })
      }
      return ({ theme: { ...this.light } })
    })
  }

  handleSystemColorSchemeChange = (e) => {
    if (e.matches && this.state.theme.name === "light") {
      this.setState({
        theme: { ...this.dark }
      })
    } else if (!e.matches && this.state.theme.name === "dark") {
      this.setState({
        theme: { ...this.light }
      })
    }
  }

  componentDidMount = () => {
    this.mql.addEventListener('change', this.handleSystemColorSchemeChange);
  }

  componentWillUnmount = () => {
    this.mql.removeEventListener('change', this.handleSystemColorSchemeChange);
  }

  render = () => (
    <ThemeProvider theme={{ ...this.state }}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
