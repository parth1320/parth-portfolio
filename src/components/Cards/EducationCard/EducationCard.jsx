import React from "react";
import {
  Description,
  Card,
  Grade,
  Top,
  Image,
  Body,
  Name,
  Date,
  Span,
  Degree,
  Document,
} from "./EducationCardStyledComponent";

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Image src={education.img} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>{education?.grade}</Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
      {education.doc && (
        <a href={education.doc} target="new">
          <Document src={education.doc} />
        </a>
      )}
    </Card>
  );
};

export default EducationCard;
