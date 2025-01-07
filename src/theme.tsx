import { createTheme } from "@mui/material/styles";

// Extend the Palette interface
declare module "@mui/material/styles" {
  interface Palette {
    skills: {
      red: string;
      orange: string;
      green: string;
    };
  }
  interface PaletteOptions {
    skills?: {
      red: string;
      orange: string;
      green: string;
    };
  }
}

const theme = createTheme({
  palette: {
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
      dark: "rgb(24, 24, 24)",
      light: "rgb(255, 255, 255)",
      header: "rgb(84, 84, 84)",
    },
    text: {
      primary: "rgb(255, 255, 255)",
      secondary: "rgb(8, 8, 8)",
    },
    skills: {
      red: "rgb(227,18,18)",
      orange: "rgb(255, 153, 0)",
      green: "rgb(30,206,30)",
    },
  },

  typography: {
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
  },
});

export default theme;
