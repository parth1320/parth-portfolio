import React, { useState } from "react";
import ProjectCard from "../Cards/ProjectCard/ProjectCard";
import {
  Desc,
  Container,
  Wrapper,
  Title,
} from "../Skills/SkillsStyledComponent";
import {
  CardContainer,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
} from "./ProjectsStyledComponent";
import { projects } from "../../data/constants";

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container>
      <Wrapper>
        <Title id="projects">Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my
          projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "full stack" ? (
            <ToggleButton active onClick={() => setToggle("full stack")}>
              Full-Stack
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("full stack")}>
              Full-Stack
            </ToggleButton>
          )}
          <Divider />
          {toggle === "front end" ? (
            <ToggleButton active onClick={() => setToggle("front end")}>
              Front-End
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("front end")}>
              Front-End
            </ToggleButton>
          )}
          <Divider />
          {toggle === "back end" ? (
            <ToggleButton active onClick={() => setToggle("back end")}>
              Back-End
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("back end")}>
              Back-End
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          {projects
            .filter((project) => project.category === toggle)
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
