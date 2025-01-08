import { createTheme } from "@mui/material/styles";

const typography = {
  fontFamily: '"IBM Plex Mono", Arial',
  h1: { fontSize: "3rem", lineHeight: "1.375", fontWeight: 700 },
  h2: { fontSize: "2.5rem", lineHeight: "1.375", fontWeight: 700 },
  h3: { fontSize: "2rem", lineHeight: "1.375", fontWeight: 700 },
  h4: { fontSize: "1.5rem", lineHeight: "1.5", fontWeight: 600 },
  h5: { fontSize: "1.25rem", lineHeight: "1.5", fontWeight: 600 },
  h6: { fontSize: "1.1rem", lineHeight: "1.5", fontWeight: 500 },
  body1: { fontSize: "1rem", lineHeight: "1.5", fontWeight: 400 },
  body2: { fontSize: "0.75rem", lineHeight: "1.5", fontWeight: 400 },
  button: { fontSize: "1rem", lineHeight: "1.5", fontWeight: 500 },
};
const skills = {
  red: "rgb(227,18,18)",
  orange: "rgb(255, 153, 0)",
  green: "rgb(30,206,30)",
};

const house = createTheme({
  palette: {
    type: "house",
    primary: {
      main: "rgb(98, 186, 27)",
      light: "rgb(156, 226, 156)",
      dark: "rgb(63, 142, 0)",
      contrastText: "rgb(255, 255, 255)",
    },
    secondary: {
      main: "rgb(230, 73, 128)",
      light: "rgb(240, 101, 149)",
      dark: "rgb(214, 51, 108)",
      contrastText: "rgb(255, 255, 255)",
    },
    background: {
      default: "rgb(24, 24, 24)",
      paper: "rgb(245, 245, 240)",
      contrast: "rgb(255, 255, 255)",
      header: "rgb(84, 84, 84)",
      fillbar: "rgb(224, 224, 224)",
    },
    text: {
      primary: "rgb(255, 255, 255)",
      secondary: "rgb(8, 8, 8)",
    },
    hyperlink: {
      primary: "rgb(98, 186, 27)",
      secondary: "rgb(18,126,215)",
    },
    skills: skills,
  },
  typography: typography,
});

const dark = createTheme({
  palette: {
    mode: "dark",
    type: "dark",
    primary: {
      main: "rgb(98, 186, 27)",
      light: "rgb(156, 226, 156)",
      dark: "rgb(63, 142, 0)",
      contrastText: "rgb(255, 255, 255)",
    },
    secondary: {
      main: "rgb(230, 73, 128)",
      light: "rgb(240, 101, 149)",
      dark: "rgb(214, 51, 108)",
      contrastText: "rgb(255, 255, 255)",
    },
    background: {
      default: "rgb(24, 24, 24)",
      paper: "rgb(245, 245, 240)",
      contrast: "rgb(24, 24, 24)",
      fillbar: "rgb(224, 224, 224)",
    },
    text: {
      primary: "rgb(255, 255, 255)",
      secondary: "rgb(8, 8, 8)",
    },
    hyperlink: {
      primary: "rgb(98, 186, 27)",
      secondary: "rgb(18,126,215)",
    },
    skills: skills,
  },
  typography: typography,
});
const light = createTheme({
  palette: {
    mode: "light",
    type: "light",
    primary: {
      main: "rgb(98, 186, 27)",
      light: "rgb(156, 226, 156)",
      dark: "rgb(63, 142, 0)",
      contrastText: "rgb(255, 255, 255)",
    },
    secondary: {
      main: "rgb(230, 73, 128)",
      light: "rgb(240, 101, 149)",
      dark: "rgb(214, 51, 108)",
      contrastText: "rgb(255, 255, 255)",
    },
    background: {
      default: "rgb(255, 255, 255)",
      paper: "rgb(245, 245, 240)",
      contrast: "rgb(24, 24, 24)",
      fillbar: "rgb(224, 224, 224)",
    },
    text: {
      primary: "rgb(8, 8, 8)",
      secondary: "rgb(255, 255, 255)",
    },
    hyperlink: {
      primary: "rgb(18,126,215)",
      secondary: "rgb(98, 186, 27)",
    },
    skills: skills,
  },
  typography: typography,
});

export const themes = {
  house: house,
  light: light,
  dark: dark,
};
export type ThemeImage = {
  name: ThemeMode;
  src: string;
}

export const themeNames = ["house", "light", "dark"] as const;
export const themeImages: ThemeImage[] = [
  {
    name: "house",
    src: "/src/assets/moustache.svg",
  },
  {
    name: "light",
    src: "/src/assets/moustache.svg",
  },
  {
    name: "dark",
    src: "/src/assets/moustache.svg",
  }
];
export type ThemeMode = (typeof themeNames)[number];