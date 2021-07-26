import styled, { css } from "styled-components";
import { Link as ReactRouterLink, NavLink as ReactRouterNavLink } from "react-router-dom"
import { ReactComponent as SvgLogo } from '../svgs/logo.svg';

// Header Container

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

    @media (max-width: 599px){
        display: none;
    }
`;

export const StyledHeader = styled.header.attrs(props => ({
    maxWidth: props.maxWidth || "1200px",
}))`
    display: grid;
    align-items: center;
    grid-template-areas: ". logo nav .";
    grid-template-columns: ${({ maxWidth }) => (
        `minmax(1em, 1fr) 
        repeat(2, minmax(min-content,calc( ${maxWidth} / 2)))
        minmax(1em, 1fr);`
    )};
    background-color: ${({ theme }) => theme.surface1};
    /* border: ${({ theme }) => theme.border}; */
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

//Hero Container 

export const TitleH1 = styled.h1`
    font-family: ${({ theme }) => theme.ffHeading};
    font-weight: ${({ theme }) => theme.fwBlack};
    font-size: ${({ theme }) => theme.fsH1};
    color: ${({ theme }) => theme.text1};
    line-height: 1.2;
    text-align: center;
    margin: 0.5em 0 1.25em;
    max-width: 15ch;

    @media (min-width:600px){
        margin-top: 0.25em;
        text-align: initial;
    }
`;

export const Lead = styled.p`
    color: ${({ theme }) => theme.text1};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fsMedium};
    font-weight: ${({ theme }) => theme.fwSemiBold};
    letter-spacing: 3px;
    position: relative;

    @media (min-width:600px){
        margin-left: 75px;
        padding-left: 1em;
        justify-self: initial;
    }

    :after{
        content:"";
        position: absolute;
        background-color:  currentColor;
        width: 100%;
        height: 5px;
        top: 105%;
        right: 50%;
        transform: translateX(50%);
        
        @media (min-width:600px){
            width: 75px;
            height: initial;
            top: 0.3em;
            bottom: 0.3em;
            right: 100%;
            transform: translateX(0);
        }
    }
`

export const ButtonLink = styled(ReactRouterLink).attrs(props => ({
    fill: props.fill || "false"
}))`
    text-decoration:none;
    padding: 0.75em 2em;
    border: 2px solid ${({ theme }) => theme.text1};
    border-radius: 7px;
    color:${({ fill, theme }) => fill === "true" ? theme.surface1 : theme.text1};
    font-weight: ${({ theme }) => theme.fwBold};
    background-color: ${({ fill, theme }) => fill === "true" ? theme.text1 : "transparent"};
    transition: transform 200ms ease; 

    &:hover{
        transform: scale(1.05);
    }
    &:active{
        transform: scale(1);
    }

    @media (min-width: 600px) and (max-width:660px){
        padding: 0.65em 1.5em;
    }
`;

export const FlexCol = styled.div.attrs(props => ({
    right: props.right || "false"
}))`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    
    @media (min-width:600px){
        justify-content: initial;
        ${ButtonLink} + ${ButtonLink}{
            margin-left: 2em;
        }
    }
        
`
export const Group = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    padding-bottom: 5vw;
    @media(min-width:600px){
        align-items: initial;    
    }

    ${Lead}{
        align-self: center;
        @media(min-width:600px){
            align-self: auto;
        }
    }
`;
export const Illustration = styled.div`
    position: relative;
    display: flex;
    justify-content: center;

    svg{
        /* height: 100%;
        color: ${({ theme }) => theme.brand};
        color: hsl(235 100% 60%); */
        width: 100%;
        color: #6257DB;
        @media (max-width: 599px){
            width: 80%;
            max-width: 400px;
        }

        .outline_black{
            stroke:${({ theme }) => theme.name === "light" ? "black" : "black"};
            stroke-width: 2;
        }
    }
`;

export const Section = styled.section.attrs(props => ({
    maxWidth: props.maxWidth || "1200px",
}))`
    padding: 3.5em 0;
    display: grid;
    align-content: center;
    grid-template-columns: 1em 1fr 1em;
    grid-template-rows: 2em 1fr minmax(2em, auto);
    row-gap: 1em;
    grid-template-areas: 
            ". . ."
            ". info ."
            ". illustration  ."
            ". . .";

    @media (min-width:600px){
        grid-template-areas: 
            ". .... illustration ."
            ". info illustration ."
            ". .... illustration .";
        grid-template-columns: ${({ maxWidth }) => (
        `minmax(1em, 1fr) 
            repeat(2, minmax( calc(300px - 2em), calc( ${maxWidth} / 2)))
            minmax(1em, 1fr);`
    )};
    }

    ${Group} { grid-area: info; }
    ${Illustration}{ grid-area: illustration; }
`;