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
              Full-Stack
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              Full-Stack
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton active onClick={() => setToggle("web app")}>
              Front-End
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("web app")}>
              Front-End
            </ToggleButton>
          )}
          <Divider />
          {toggle === "android app" ? (
            <ToggleButton active onClick={() => setToggle("android app")}>
              Back-End
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("android app")}>
              Back-End
            </ToggleButton>
          )}
          <Divider />
          {toggle === "machine learning" ? (
            <ToggleButton active onClick={() => setToggle("machine learning")}>
              Other
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("machine learning")}>
              Other
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
