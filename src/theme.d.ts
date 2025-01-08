// Extend the Palette interface
declare module "@mui/material/styles" {
  interface Palette {
    skills: {
      red: string;
      orange: string;
      green: string;
    };
    hyperlink:{
      primary: string;
      secondary: string;
    },
  }
  interface PaletteOptions {
    skills?: {
      red: string;
      orange: string;
      green: string;
    };
    hyperlink?:{
      primary: string;
      secondary: string;
    };
  }

  interface TypeBackground {
    fillbar?: string; // optional or required
  }
}
