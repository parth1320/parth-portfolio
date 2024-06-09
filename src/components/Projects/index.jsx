import React from "react";
import { Div } from "../HeroBganimation/HeroBgAnimationStyle";
import {
  Desc,
  Container,
  Wrapper,
  Title,
} from "../Skills/SkillsStyledComponent";
import {
  Divider,
  ToggleButton,
  ToggleButtonGroup,
} from "./ProjectsStyledComponent";

const Projects = () => {
  return (
    <Container>
      <Wrapper>
        <Title id="projects">Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my
          projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton>React</ToggleButton>
          <Divider />
          <ToggleButton>Node</ToggleButton>
          <Divider />

          <ToggleButton>Express</ToggleButton>
          <Divider />

          <ToggleButton>MongoDB</ToggleButton>
        </ToggleButtonGroup>
      </Wrapper>
    </Container>
  );
};

export default Projects;
