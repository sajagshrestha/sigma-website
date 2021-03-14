import styled, { createGlobalStyle } from "styled-components";

//Global Styles and Styles reset
export const GlobalStyles = createGlobalStyle`
*{
	margin:0;
	padding:0;
	box-sizing:border-box;
}
`;
//all css varaiable
export const theme = {
  backgroundPrimary: "#fff",
};

export const Container = styled.div`
  width: min(90%, 80rem);
  margin-inline: auto;
`;

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
`;
