import { useTheme, createTheme } from "@mui/material/styles";
import sun from "@/assets/sun-d.svg";
import moon from "@/assets/moon-d.svg";
import moustache from "@/assets/moustache-smile2.svg";

declare module "@mui/material/styles" {
  interface Theme {
    customPalette: CustomPalette;
  }
  interface ThemeOptions {
    customPalette?: Partial<CustomPalette>;
  }
}

const typography = {
  fontFamily: '"IBM Plex Mono", Arial',
  h1: { fontSize: "3rem", lineHeight: "1.375", fontWeight: 700 },
  h2: { fontSize: "2.5rem", lineHeight: "1.375", fontWeight: 700 },
  h3: { fontSize: "2rem", lineHeight: "1.375", fontWeight: 700 },
  h4: { fontSize: "1.5rem", lineHeight: "1.5", fontWeight: 600 },
  h5: { fontSize: "1.25rem", lineHeight: "1.5", fontWeight: 600 },
  h6: { fontSize: "1.1rem", lineHeight: "1.5", fontWeight: 500 },
  body1: { fontSize: "1rem", lineHeight: "1.5", fontWeight: 500 },
  body2: { fontSize: "0.75rem", lineHeight: "1.5", fontWeight: 500 },
  button: { fontSize: "1rem", lineHeight: "1.5", fontWeight: 500 },
} as const;

const skills = {
  red: "rgb(227,18,18)",
  orange: "rgb(255, 153, 0)",
  green: "rgb(30,206,30)",
  star: "#FFD700",
  empty: "rgb(109,109,109)",
};

export enum ThemeMode {
  Pop = "Pop",
  Dark = "Dark",
  Light = "Light",
}

export interface CustomPalette {
  mode: ThemeMode;
  background: {
    default: string;
    paper: string;
    contrast: string;
  };
  text: {
    primary: string;
    secondary: string;
    highlighting: string;
    paper: string;
  };
  primary: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
  };
  secondary: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
  };
  hyperlink: {
    primary: string;
    secondary: string;
  };
  skills: typeof skills;
}

const Pop = createTheme({
  customPalette: {
    mode: ThemeMode.Pop,
    background: {
      default: "rgb(24, 24, 24)",
      paper: "rgb(245, 245, 240)",
      contrast: "rgb(255, 255, 255)",
    },
    text: {
      primary: "rgb(255, 255, 255)",
      secondary: "rgb(8, 8, 8)",
      highlighting: "rgb(173, 216, 230)",
      paper: "rgb(8, 8, 8)",
    },
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
    hyperlink: {
      primary: "rgb(98, 186, 27)",
      secondary: "rgb(18,126,215)",
    },
    skills: {
      ...skills,
      empty: "rgb(60,60,60)",
    },
  },
  typography,
});

const Dark = createTheme({
  customPalette: {
    mode: ThemeMode.Dark,
    background: {
      default: "rgb(24, 24, 24)",
      paper: "rgb(48, 48, 48)",
      contrast: "rgb(0,19,56)",
    },
    text: {
      primary: "rgb(255, 255, 255)",
      secondary: "rgb(236,236,236)",
      highlighting: "rgba(30, 136, 229, 0.75)",
      paper: "rgb(248,248,248)",
    },
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
    hyperlink: {
      primary: "rgb(98, 186, 27)",
      secondary: "rgb(18,126,215)",
    },
    skills: {
      ...skills,
      empty: "rgb(60,60,60)",
    },
  },
  typography,
});

const Light = createTheme({
  customPalette: {
    mode: ThemeMode.Light,
    background: {
      default: "rgb(255, 255, 255)",
      paper: "rgb(245, 245, 240)",
      contrast: "rgb(245, 245, 240)",
    },
    text: {
      primary: "rgb(8, 8, 8)",
      secondary: "rgb(8, 8, 8)",
      highlighting: "rgb(173, 216, 230)",
      paper: "rgb(8, 8, 8)",
    },
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
    hyperlink: {
      primary: "rgb(18,126,215)",
      secondary: "rgb(98, 186, 27)",
    },
    skills: {
      ...skills,
      empty: "rgb(218,218,218)",
    },
  },
  typography,
});

export const themes = {
  Pop,
  Dark,
  Light,
} as const;

export type ThemeImage = {
  name: ThemeMode;
  src: string;
};

export const themeImages: ThemeImage[] = [
  { name: ThemeMode.Pop, src: moustache },
  { name: ThemeMode.Light, src: sun },
  { name: ThemeMode.Dark, src: moon },
];

export const useCustomPalette = () => {
  const theme = useTheme();
  return theme.customPalette;
};
