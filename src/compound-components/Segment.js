import React, { Component } from "react";
import { FlexCol, Group, Illustration, Section } from "../components";

export default class Segment extends Component {
    render = () => {
        const { children, ...restProps } = this.props;
        return <Section {...restProps}>{children}</Section>
    }
}

Segment.Title = ({ children, ...restProps }) => <h1>{children}</h1>;
Segment.SubTitle = ({ children, ...restProps }) => <h1>{children}</h1>;
Segment.Text = ({ children, ...restProps }) => <h1>{children}</h1>;
Segment.Bold = ({ children, ...restProps }) => <h1>{children}</h1>;

Segment.FlexCol = ({ children, ...restProps }) => (
    <FlexCol {...restProps}>{children}</FlexCol>
)

Segment.Group = ({ children, ...restProps }) => (
    <Group {...restProps}>{children}</Group>
)

Segment.Illustration = ({ children, ...restProps }) => (
    <Illustration {...restProps}>
        {children}
    </Illustration>
)