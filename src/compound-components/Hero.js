import React, { Component } from "react";
import { Lead, TitleH1, StyledHero, FlexCol, ButtonLink, Illustration, Group, HeroIllustration } from "../components";

export default class Hero extends Component {
    render = () => {
        const { children, ...restProps } = this.props;
        return <StyledHero {...restProps}>{children}</StyledHero>
    }
}


Hero.Lead = ({ children, ...restProps }) => (
    <Lead {...restProps}>{children}</Lead>
)

Hero.Title = ({ children, ...restProps }) => (
    <TitleH1 {...restProps}>{children}</TitleH1>
)

Hero.FlexCol = ({ children, ...restProps }) => (
    <FlexCol {...restProps}>{children}</FlexCol>
)

Hero.ButtonLink = ({ children, ...restProps }) => (
    <ButtonLink {...restProps}>{children} </ButtonLink>
)

Hero.Group = ({ children, ...restProps }) => (
    <Group {...restProps}>{children}</Group>
)

Hero.Illustration = ({ children, ...restProps }) => (
    <Illustration {...restProps}>
        <HeroIllustration />
        {children}
    </Illustration>
)