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

    interface TypeBackground {
        fillbar?: string;  // optional or required
    }
}