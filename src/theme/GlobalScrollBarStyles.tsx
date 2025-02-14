import { GlobalStyles, Theme } from "@mui/material";

export const GlobalScrollbarStyles = (theme: Theme) => (
  <GlobalStyles
    styles={{
      html: {
        /* WebKit-based browsers */
        "&::-webkit-scrollbar": {
          width: "12px",
        },
        "&::-webkit-scrollbar-track": {
          background: theme.customPalette.scrollbar.background,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.customPalette.scrollbar.bar,
          borderRadius: "6px",
          border: `3px solid ${theme.customPalette.scrollbar.background}`,
        },
        /* Firefox */
        scrollbarColor: `${theme.customPalette.scrollbar.bar} ${theme.customPalette.scrollbar.background}`,
        scrollbarWidth: "thin",
      },
    }}
  />
);
