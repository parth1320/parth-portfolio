import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileMenuLinks,
} from "./NavbarStyledComponent";
import { useTheme } from "styled-components";
import { FaBars } from "react-icons/fa";
import { DiCssdeck } from "react-icons/di";
import { Bio } from "../../data/constants";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setOpen(!open);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {open && (
          <MobileMenu open={open}>
            <MobileMenuLinks
              href="#about"
              onClick={() => {
                setOpen(!open);
              }}
            >
              About
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#skills"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Skills
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#experience"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Experience
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#projects"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Projects
            </MobileMenuLinks>
            <MobileMenuLinks
              href="#education"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Education
            </MobileMenuLinks>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
