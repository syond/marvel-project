import React from "react";
import { NavLink } from "react-router-dom";

import { Container, Logo, Nav } from "./styles";

import logo from "../../assets/MarvelLogo.svg";

import NavItem from "../NavItem";


const Header = () => {
  return (
    <Container>
      <NavLink to="/">
        <Logo>
          <img src={logo} alt="Marvel Comics" />
        </Logo>
      </NavLink>
      <Nav>
        <NavLink to="/characters">
          <NavItem label="Characters" />
        </NavLink>
        <NavLink to="/comics">
          <NavItem label="Comics" />
        </NavLink>
        <NavLink to="/about">
          <NavItem label="About" />
        </NavLink>
      </Nav>
    </Container>
  );
};

export default Header;
