import { useTheme, createTheme, darken, lighten } from "@mui/material/styles";
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
  body1: { fontSize: "1rem", lineHeight: "1.2", fontWeight: 500 },
  body2: { fontSize: "0.85rem", lineHeight: "1.1", fontWeight: 500 },
  button: { fontSize: "1rem", lineHeight: "1.5", fontWeight: 500 },
} as const;

const experience = {
  red: "rgb(227,18,18)",
  orange: "rgb(255, 153, 0)",
  green: "rgb(30,206,30)",
  star: "#FFD700",
  empty: "rgb(109,109,109)",
};

const idleColor = "rgba(18,126,215,1)";
const highlightColor = "#ffa500";
const lightenFactor = 0.15;
const interactable = {
  idle: idleColor,
  hovered: lighten(idleColor, lightenFactor),
  highlighted: highlightColor,
  highlightHovered: lighten(highlightColor, lightenFactor),
  used: lighten("#ffffff", lightenFactor),
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
    textError: string;
    textSuccess: string;
    light: string;
    dark: string;
  };
  text: {
    primary: string;
    secondary: string;
    highlighting: string;
    paper: string;
    dark: string;
    light: string;
  };
  interactable: {
    idle: string;
    used: string;
    hovered: string;
    highlighted: string;
    highlightHovered: string;
  };
  experience: typeof experience;
  scrollbar: {
    background: string;
    bar: string;
  };
}

const Pop = createTheme({
  palette: {
    background: {
      default: "rgb(24, 24, 24)",
    },
  },
  customPalette: {
    mode: ThemeMode.Pop,
    background: {
      default: "rgb(24, 24, 24)",
      paper: "rgb(245, 245, 240)",
      contrast: "rgb(255, 255, 255)",
      textError: "rgb(255,219,219)",
      textSuccess: "rgb(213,255,213)",
      light: "rgb(245, 245, 240)",
      dark: "rgb(24, 24, 24)",
    },
    text: {
      primary: "rgb(255, 255, 255)",
      secondary: "rgb(8, 8, 8)",
      highlighting: "rgb(173, 216, 230)",
      paper: "rgb(8, 8, 8)",
      dark: "rgb(8, 8, 8)",
      light: "rgb(255,255,255)",
    },
    interactable: interactable,
    experience: {
      ...experience,
      empty: "rgb(60,60,60)",
    },
    scrollbar: {
      background: "rgb(24, 24, 24)",
      bar: "rgb(109,109,109)",
    },
  },
  typography,
});

const Dark = createTheme({
  palette: {
    background: {
      default: "rgb(24, 24, 24)",
    },
  },
  customPalette: {
    mode: ThemeMode.Dark,
    background: {
      default: "rgb(24, 24, 24)",
      paper: "rgb(48, 48, 48)",
      contrast: "rgb(0,19,56)",
      textError: "rgb(85,0,0)",
      textSuccess: "rgb(0,48,0)",
      light: "rgb(245, 245, 240)",
      dark: "rgb(24, 24, 24)",
    },
    text: {
      primary: "rgb(255, 255, 255)",
      secondary: "rgb(236,236,236)",
      highlighting: "rgba(30, 136, 229, 0.75)",
      paper: "rgb(248,248,248)",
      dark: "rgb(8, 8, 8)",
      light: "rgb(255,255,255)",
    },
    interactable: interactable,
    experience: {
      ...experience,
      empty: "rgb(60,60,60)",
    },
    scrollbar: {
      background: "rgb(24, 24, 24)",
      bar: "rgb(64,64,64)",
    },
  },
  typography,
});

const Light = createTheme({
  palette: {
    background: {
      default: "rgb(255, 255, 255)",
    },
  },
  customPalette: {
    mode: ThemeMode.Light,
    background: {
      default: "rgb(255, 255, 255)",
      paper: "rgb(245, 245, 240)",
      contrast: "rgb(245, 245, 240)",
      textError: "rgb(255,219,219)",
      textSuccess: "rgb(213,255,213)",
      light: "rgb(245, 245, 240)",
      dark: "rgb(24, 24, 24)",
    },
    text: {
      primary: "rgb(8, 8, 8)",
      secondary: "rgb(8, 8, 8)",
      highlighting: "rgb(173, 216, 230)",
      paper: "rgb(8, 8, 8)",
      dark: "rgb(8, 8, 8)",
      light: "rgb(255,255,255)",
    },
    interactable: interactable,
    experience: {
      ...experience,
      empty: "rgb(218,218,218)",
    },
    scrollbar: {
      background: "rgb(245, 245, 240)",
      bar: "rgb(18,126,215)",
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
  { name: ThemeMode.Dark, src: moon },
  { name: ThemeMode.Light, src: sun },
];

export const useCustomPalette = () => {
  const theme = useTheme();
  return theme.customPalette;
};
