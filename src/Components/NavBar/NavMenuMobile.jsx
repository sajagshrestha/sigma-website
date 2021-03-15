import React from "react";
import { NavMobileContainer, NavLink } from "./Nav.styles";
const menuVariants = {
  open: {
    left: 0,
  },
  closed: {
    left: "",
  },
};
const NavMenuMobile = ({ isOpen, toggleMenu }) => {
  return (
    <NavMobileContainer
      initial={false}
      variants={menuVariants}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.2 }}
    >
      <NavLink onClick={toggleMenu} to="/">
        Home
      </NavLink>
      <NavLink onClick={toggleMenu} to="#about">
        About Us
      </NavLink>
      <NavLink onClick={toggleMenu} to="#services">
        Services
      </NavLink>
      <NavLink onClick={toggleMenu} to="#our-work">
        Our Work
      </NavLink>
      <NavLink onClick={toggleMenu} to="#contact-us">
        Contact Us
      </NavLink>
    </NavMobileContainer>
  );
};

export default NavMenuMobile;
