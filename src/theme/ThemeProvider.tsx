import React, { useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { themeCreator } from "./base";
import { DarkTheme, LightTheme } from "../styles/theme";
import { StylesProvider } from "@mui/styles";

export const ThemeContext = React.createContext((themeName: string): void => {
  console.log(themeName);
});

interface Props {
  children?: any;
}

const ThemeProviderWrapper: React.FC<Props> = ({ children }) => {
  const curThemeName =
    (typeof window !== "undefined"
      ? localStorage.getItem("appTheme")
      : "PureLightTheme") || "PureLightTheme";
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName: string): void => {
    localStorage.setItem("appTheme", themeName);
    _setThemeName(themeName);
  };

  const defaultTheme = themeName === "light" ? LightTheme : DarkTheme;

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={setThemeName}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
        </MuiThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
