import React, { useState } from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  ColorText,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileMenuLinks,
} from "./NavbarStyledComponent";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "styled-components";
import { FaBars } from "react-icons/fa";
// import { DiCssdeck } from "react-icons/di";
import { Bio } from "../../data/constants";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <ColorText>&lt;</ColorText>Parth
          <div style={{ color: theme.primary }}>/</div>Kakadiya
          <ColorText>&gt;</ColorText>
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
          <DarkModeSwitch
            style={{ marginRight: "30px" }}
            onChange={toggleDarkMode}
            checked={darkMode}
            moonColor={theme.primary}
          />
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
            <DarkModeSwitch
              style={{ display: "block", margin: "auto", marginRight: "0" }}
              onChange={toggleDarkMode}
              checked={darkMode}
              moonColor={theme.primary}
            />
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
