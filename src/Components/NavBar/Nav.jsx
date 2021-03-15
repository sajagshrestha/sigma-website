import React, { useState, useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Logo, NavContainer, NavWrapper } from "./Nav.styles";
import Hamburger from "./Hamburger";
import NavMenuMobile from "./NavMenuMobile";
import { NavMenuDesktop } from "./NavMenuDesktop";
// import { motion } from "famer-motion";

const Nav = () => {
  //to control menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  //disable scroll when mwnu is open
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      disableBodyScroll(body);
    } else {
      enableBodyScroll(body);
    }
  }, [isOpen]);

  return (
    <NavWrapper>
      <NavContainer>
        <Logo src="./logo.png" />
        <Hamburger
          isOpen={isOpen}
          onClick={toggleMenu}
          color={isOpen ? "#fff" : "#444040"}
        />
        <NavMenuMobile isOpen={isOpen} toggleMenu={toggleMenu} />
        <NavMenuDesktop />
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;
