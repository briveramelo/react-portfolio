declare module "@mui/material/styles" {
  type CustomPaletteMode = "house" | "light" | "dark";
  interface Palette {
    mode: CustomPaletteMode;
    skills: {
      red: string;
      orange: string;
      green: string;
    };
    hyperlink: {
      primary: string;
      secondary: string;
    };
  }
  interface PaletteOptions {
    mode?: CustomPaletteMode;
    skills?: {
      red: string;
      orange: string;
      green: string;
    };
    hyperlink?: {
      primary: string;
      secondary: string;
    };
  }
  interface TypeBackground {
    fillbar?: string;
  }
  interface TypeText {
    highlighting?: string;
  }
}
