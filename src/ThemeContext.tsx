import React, { createContext, useState, useMemo, ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { themes, ThemeMode } from "./theme";
import { CssBaseline } from "@mui/material";

interface ThemeContextProps {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const defaultMode: ThemeMode = "house";

export const ThemeContext = createContext<ThemeContextProps>({
  mode: defaultMode,
  setMode: (mode: ThemeMode) => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);
  const theme = useMemo(() => themes[mode], [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
