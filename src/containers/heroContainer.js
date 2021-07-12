import React from "react"
import { Hero } from "../compound-components"
// import { ReactComponent as WorkingInLaptop } from "../svgs/workingInLaptop.svg"

export default function HeroContainer() {
    return (
        <Hero>
            <Hero.Group>
                <Hero.Lead>Hi, I'm Kuntal Das</Hero.Lead>
                <Hero.Title>I make Attractive Web Experience</Hero.Title>
                <Hero.FlexCol>
                    <Hero.ButtonLink fill="true" to="/contact">Contact Me</Hero.ButtonLink>
                    <Hero.ButtonLink to="/about">About Me</Hero.ButtonLink>
                </Hero.FlexCol>
            </Hero.Group>

            <Hero.Illustration>
                {/* <WorkingInLaptop /> */}
            </Hero.Illustration>
        </Hero>
    )
}