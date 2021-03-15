import React from "react";
import { NavMenuDesktopContainer, NavLink } from "./Nav.styles";
export const NavMenuDesktop = () => {
  return (
    <NavMenuDesktopContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="#about">About Us</NavLink>
      <NavLink to="#services">Services</NavLink>
      <NavLink to="#our-work">Our Work</NavLink>
      <NavLink to="#contact-us">Contact Us</NavLink>
    </NavMenuDesktopContainer>
  );
};
