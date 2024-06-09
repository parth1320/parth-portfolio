import React from "react";
import styled from "styled-components";
import { Wrapper, Title, Desc } from "../Skills/SkillsStyledComponent";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";
import { TimelineSection } from "./ExperienceStyledComponent";
import { experiences } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>Here are some of my experinence</Desc>
        <TimelineSection>
          <Timeline>
            {experiences.map((exp, index) => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ExperienceCard experience={exp} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;
