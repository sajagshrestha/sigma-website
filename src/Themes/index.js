import styled, { createGlobalStyle } from "styled-components";

//Global Styles and Styles reset
export const GlobalStyles = createGlobalStyle`
*{
	margin:0;
	padding:0;
	box-sizing:border-box;
  scroll-behavior:smooth;
  font-family:'Poppins', sans-serif
}

`;
//all css varaiable
export const theme = {
  backgroundPrimary: "#fff",
  backgroundMenu: "#1A80B9",
  textDark900: "#000",
  textDark800: "#444040",
  textLight900: "#fff",
  fontPoppins: `'Poppins', sans-serif;`,
  fontRaleway: `'Raleway', sans-serif;`,
  fontRoboto: `'Roboto', sans-serif;`,
};

//for maintaing layout
export const Container = styled.div`
  width: min(87%, 80rem);
  margin-inline: auto;
`;

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

//media queries
export const media = {
  desktop: `@media screen and (min-width:700px)`,
};
