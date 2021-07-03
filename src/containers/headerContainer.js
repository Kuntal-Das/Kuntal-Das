import { Header } from "../compound-components"

export default function HeaderContainer({ toggleColorScheme }) {
    return (
        <Header>
            <Header.LogoLink nostyle="true" to="/" />
            <Header.Nav>
                <Header.NavLink exact to="/" activeClassName="activeNavLink">Home</Header.NavLink>
                <Header.NavLink to="/work" activeClassName="activeNavLink">My Work</Header.NavLink>
                <Header.NavLink to="/about" activeClassName="activeNavLink">About Me</Header.NavLink>
                <Header.NavLink to="/contact" activeClassName="activeNavLink">Contact Me</Header.NavLink>
                <Header.ToggleThemeButton toggleColorScheme={toggleColorScheme}>toggle theme</Header.ToggleThemeButton>
            </Header.Nav>
        </Header>
    )
}