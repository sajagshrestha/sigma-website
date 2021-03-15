import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Logo, NavContainer, NavWrapper, NavMenuMobile } from "./Nav.styles";
import Hamburger from "./Hamburger";
// import { motion } from "framer-motion";
const menuVariants = {
  open: {
    left: 0,
  },
  closed: {
    left: "",
  },
};
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

        <NavMenuMobile
          initial={false}
          variants={menuVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}
        >
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </NavMenuMobile>
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;
