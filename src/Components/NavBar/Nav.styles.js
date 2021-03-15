import styled from "styled-components";
import { Container, MainWrapper, media } from "../../Themes";
import { motion } from "framer-motion";
import { Link } from "gatsby";
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
  margin-right: 1rem;
  ${media.desktop} {
    display: none;
  }
`;

export const NavMobileContainer = styled(motion.div)`
  position: absolute;
  padding: 10rem 0;
  width: 100%;
  height: 100vh;
  top: 0;
  left: -100vw;
  background: ${props => props.theme.backgroundMenu};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  ${media.desktop} {
    display: none;
  }
`;
export const NavMenuDesktopContainer = styled.div`
  display: none;
  ${media.desktop} {
    width: min(65%, 35rem);
    display: flex;
    justify-content: space-between;
  }
`;

export const NavLink = styled(Link)`
  text-transform: uppercase;
  color: ${props => props.theme.textLight900};
  font-size: 2.3rem;
  text-decoration: none;
  ${media.desktop} {
    font-size: 1.1rem;
    color: ${props => props.theme.textDark900};
  }
`;
