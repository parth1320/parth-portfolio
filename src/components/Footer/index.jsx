import React from "react";
import {
  Copyright,
  FooterContainer,
  FooterWrapper,
  NavLink,
  Logo,
  Nav,
  SocialMediaIcon,
  SocialMediaIcons,
} from "./FooterStyledComponent";
import { Bio } from "../../data/constants";
import { LinkedIn, X, GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Parth Kakadiya</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.github} target="display">
            <GitHub />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display">
            <X />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedIn />
          </SocialMediaIcon>
          {/* <SocialMediaIcon href={Bio.instagram} target="display">
            <Instagram />
          </SocialMediaIcon> */}
        </SocialMediaIcons>
        <Copyright> © 2021 Parth Kakadiya. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
