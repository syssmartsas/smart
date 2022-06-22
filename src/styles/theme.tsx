interface ColorScale {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  650?: string;
  700?: string;
}

export type ColorsType = {
  primary: ColorScale;
  secondary?: ColorScale;
  white: ColorScale;
  black: ColorScale;
  gray: ColorScale;
};

export interface BreackPoints {
  xl: number; //TV : empieza desde 1840 hasta el máximo....
  lg: number; //pantalla grande : empieza desde 1280 y termina en 1839
  md: number; //laptop : empieza desde 960 y termina en 1279
  sm: number; //tablet : empieza desde 600 y termina en 659
  xs: number; //movil: empieza desde 0 y termina en 599
}

export interface Theme {
  fontFamily: string;
  colors: ColorsType;
  fontSize: number;
  progressBackground?: string;
  breakpoints: BreackPoints;
}

export const MainTheme: Theme = {
  fontFamily: "Cabin,Arial,Helvetica,sans-serif",
  fontSize: 16,
  progressBackground: "#FFFFFF",
  colors: {
    primary: {
      700: "#0c685c",
    },
    white: {
      700: "#FFFFFF",
      600: "#ecececec",
    },
    black: {
      700: "#11192a",
      650: "rgb(34, 51, 84)",
      600: "#262626",
      500: "#292929",
      400: "#5B5B5B",
      300: "#A4A4A4",
      200: "#f2f5f9",
      100: "#efefef",
    },
    gray: {
      700: "#787878",
      600: "#505050",
      500: "#F2F5F9",
      400: "#C4C4C442",
    },
  },
  breakpoints: {
    xl: 1840, //TV : empieza desde 1840 hasta el máximo....
    lg: 1280, //pantalla grande : empieza desde 1280 y termina en 1839
    md: 960, //laptop : empieza desde 960 y termina en 1279
    sm: 600, //tablet : empieza desde 600 y termina en 659
    xs: 0, //movil: empieza desde 0 y termina en 599
  },
};

export const LightTheme: Theme = {
  ...MainTheme,
};

export const DarkTheme: Theme = {
  ...MainTheme,
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
