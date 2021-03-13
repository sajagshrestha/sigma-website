import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./src/Themes";

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  );
};
