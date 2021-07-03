import styled, { css } from "styled-components";
import { Link as ReactRouterLink, NavLink as ReactRouterNavLink } from "react-router-dom"
import { ReactComponent as SvgLogo } from '../svgs/logo.svg';

export const ToggleThemeButton = styled.button.attrs(props => ({
    type: "button" || props.type,
}))`
    background: none;
    border: 1px solid;
    border-radius: 5px;
    color: ${({ theme }) => theme.text1};
`;

export const Logo = styled(SvgLogo)`
  display: block;
  height: 2.5rem;
  color: ${({ theme }) => theme.text1};
`;

export const Link = styled(ReactRouterLink)`
    display: block;
    margin: 0.2em 0;
    ${({ nostyle }) => (nostyle !== "true") && css`
        text-decoration: none;
    `}
`;

export const NavLink = styled(ReactRouterNavLink)`
    text-decoration : none;
    padding: 0.5em 0;
    font-size: ${({ theme }) => theme.fsRegular};
    font-weight: ${({ theme }) => theme.fwBold};
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    position: relative;
    
    &.${({ activeClassName }) => activeClassName},
    &:hover{
        color: ${({ theme }) => theme.brand};
    }
    &.${({ activeClassName }) => activeClassName}{
        ::after{
            position: absolute;
            content:"";
            left: 0;
            right: 0;
            bottom: -2px;
            height: 4px;
            background-color: ${({ theme }) => theme.brand};
        }
    }
`;

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    gap: 1.5em;
`;

export const StyledHeader = styled.header.attrs(props => ({
    maxWidth: props.maxWidth || "1200px",
}))`
    display: grid;
    align-items: center;
    grid-template-areas: ". logo nav .";
    grid-template-columns: ${({ maxWidth }) => (
        `minmax(1em, 1fr) 
        minmax(min-content,calc( ${maxWidth} / 2)) 
        minmax(max-content,calc( ${maxWidth} / 2))
        minmax(1em, 1fr);`
    )};
    background-color: ${({ theme }) => theme.surface1};
    border: ${({ theme }) => theme.border};
    /* box-shadow: ${({ theme }) => theme.border}; */
    /* box-shadow: ${({ theme }) => theme.radShadow}; */

    ${Link} {
        grid-area: logo;
        justify-self: start;
    }
    ${StyledNav} {
        grid-area: nav;
        justify-self: end;
    }  
`;