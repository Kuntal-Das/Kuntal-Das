import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { HomePage } from "./pages";
import { light, dark, getRadShadow } from "./colorScheme"

class App extends Component {
  constructor(props) {
    super(props);
    this.mql = window.matchMedia('(prefers-color-scheme: dark)')
    this.state = {
      theme: { ...light },
      radShadow: {
        boxShadowDefault: `0 1rem .5rem -.5rem`,
        boxShadow: getRadShadow(light.surfaceShadow, light.shadowStrength)
      }
    }
  }

  handleSystemColorSchemeChange = (e) => {
    if (e.matches && this.state.theme.name === "light") {
      this.setState({
        theme: { ...dark },
        radShadow: getRadShadow(dark.surfaceShadow, dark.shadowStrength)
      })
    } else if (!e.matches && this.state.theme.name === "dark") {
      this.setState({
        theme: { ...light },
        radShadow: getRadShadow(light.surfaceShadow, light.shadowStrength)
      })
    }
  }

  componentDidMount() {
    this.mql.addEventListener('change', this.handleSystemColorSchemeChange);
  }

  componentWillUnmount = () => {
    this.mql.removeEventListener('change', this.handleSystemColorSchemeChange);
  }

  render = () => {
    console.log(this.state)
    return (
      <ThemeProvider theme={{ ...this.state.theme }}>
        <HomePage />
      </ThemeProvider>
    );
  }
}

export default App;
