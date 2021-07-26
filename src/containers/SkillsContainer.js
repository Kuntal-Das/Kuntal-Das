import React from "react";
import { Segment } from "../compound-components";
// import { ReactComponent as SkillsIllustration } from "../svgs/skills-vector.svg";

export default function SkillsContainer() {
    return (
        <Segment>
            <Segment.Group>
                <Segment.Title>My Skills</Segment.Title>
                <Segment.SubTitle>Web Devlopment</Segment.SubTitle>
                <Segment.Text>
                    Web Development is what I love doing the most, I
                    <Segment.Bold>Develop</Segment.Bold>
                    responsive websites from design files using HTML Css and/or using frameworks like React or asp.net and
                    <Segment.Bold>Deploy</Segment.Bold>
                    them in the cloud.
                </Segment.Text>

                <Segment.SubTitle>Web Designing</Segment.SubTitle>
                <Segment.Text>
                    I devide my design process into two parts, first I make choises
                    about color fonts and design style, in the second part I make the
                    layout design in Figma for different device widths.
                </Segment.Text>
            </Segment.Group>
            <Segment.Illustration>
                <img src="svgs/skills-vector.svg" alt=""/>
            </Segment.Illustration>
        </Segment>
    )
}