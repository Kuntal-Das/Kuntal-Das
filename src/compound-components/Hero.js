import React, { Component } from "react";
import { Lead, TitleH1, Section, FlexCol, ButtonLink, Illustration, Group } from "../components";

export default class Hero extends Component {
    render = () => {
        const { children, ...restProps } = this.props;
        return <Section {...restProps}>{children}</Section>
    }
}

Hero.Lead = ({ children, ...restProps }) => (
    <Lead {...restProps}>{children}</Lead>
)

Hero.Title = ({ children, ...restProps }) => (
    <TitleH1 {...restProps}>{children}</TitleH1>
)

Hero.ButtonLink = ({ children, ...restProps }) => (
    <ButtonLink {...restProps}>{children} </ButtonLink>
)

Hero.FlexCol = ({ children, ...restProps }) => (
    <FlexCol {...restProps}>{children}</FlexCol>
)

Hero.Group = ({ children, ...restProps }) => (
    <Group {...restProps}>{children}</Group>
)

Hero.Illustration = ({ children, ...restProps }) => (
    <Illustration {...restProps}>
        {children}
    </Illustration>
)