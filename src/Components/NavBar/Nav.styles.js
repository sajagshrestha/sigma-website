import styled from "styled-components";
import { Container, MainWrapper, media } from "../../Themes";
import { motion } from "framer-motion";
export const NavWrapper = styled(MainWrapper)`
  min-height: 7rem;
  position: fixed;
  background-color: ${props => props.theme.backgroundPrimary};
  ${media.desktop} {
    min-height: 7rem;
  }
`;

export const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 4rem;
  width: 8rem;
  cursor: pointer;
  ${media.desktop} {
  }
`;
export const HamburgerContainer = styled(motion.svg)`
  z-index: 10;
  ${media.desktop} {
    display: none;
  }
`;

export const NavMenuMobile = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100vh;
  /* background: ${props => props.theme.backgroundMenu}; */
  top: 0;
  left: -100vw;
  background: ${props => props.theme.backgroundMenu};
  ${media.desktop} {
    display: none;
  }
`;
