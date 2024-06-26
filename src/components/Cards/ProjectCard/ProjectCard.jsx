import { Avatar } from "@mui/material";
import React from "react";
import {
  Date,
  Card,
  Title,
  Description,
  Details,
  Image,
  Members,
  Tags,
  Tag,
} from "./ProjectsCardStyledComponents";

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <Image src={project.image} alt={project.title} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member) => (
          <Avatar key={member} src={member.img} />
        ))}
      </Members>
    </Card>
  );
};

export default ProjectCard;
