import React, { Component } from 'react';
import { Link, Logo, NavLink, StyledHeader, StyledNav, ToggleThemeButton } from '../components';

export default class Header extends Component {
    render = () => {
        const { children, ...restProps } = this.props
        return (
            <StyledHeader {...restProps}>{children}</StyledHeader>
        )
    }

    static Nav = ({ children, ...restProps }) => (
        <StyledNav {...restProps}>{children}</StyledNav>
    )

    static NavLink = ({ children, to, ...restProps }) => (
        <NavLink to={to} {...restProps}>{children}</NavLink>
    )

    static LogoLink = ({ to, ...restProps }) => (
        <Link to={to} {...restProps}> <Logo /></Link>
    )

    static Link = ({ children, to, ...restProps }) => (
        <Link to={to} {...restProps}>{children}</Link>
    )

    static ToggleThemeButton = ({ children, toggleColorScheme, ...restProps }) => (
        <ToggleThemeButton onClick={toggleColorScheme} {...restProps}>{children}</ToggleThemeButton>
    )
}