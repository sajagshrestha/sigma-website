import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./src/Components/Layout";
import { GlobalStyles, theme } from "./src/Themes";

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>{element}</Layout>
    </ThemeProvider>
  );
};
