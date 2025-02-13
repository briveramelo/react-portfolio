import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { BeatingHeart } from "./BeatingHeart.tsx";
import { SteamingCoffee } from "./SteamingCoffee.tsx";
import { ReactIconAnimation } from "./ReactIconAnimation.tsx";

interface FooterProps {
  backgroundColor: string;
  textColor: string;
  heartTriggerRef?: React.RefObject<HTMLButtonElement>;
}

export const Footer: React.FC<FooterProps> = ({
  backgroundColor,
  textColor,
  heartTriggerRef,
}) => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: backgroundColor,
        pt: 4,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          textAlign: "center",
          mb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 0,
          }}
        >
          <Typography variant="body1" sx={{ mr: 1, color: textColor }}>
            Custom made with
          </Typography>
          <BeatingHeart heartTriggerRef={heartTriggerRef} />
          <Box sx={{ width: 5 }} flexShrink={1}></Box>
          <SteamingCoffee />
          <Box sx={{ width: 21 }} flexShrink={1}></Box>
          <ReactIconAnimation triggerRef={heartTriggerRef} />
        </Box>
      </Container>

      <Typography variant="body2" sx={{ color: textColor }}>
        The source code for this website is available on{" "}
        <a
          href="https://github.com/briveramelo/react-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "underline" }}
          id="github_link"
        >
          Github
        </a>
        . v{import.meta.env.VITE_APP_VERSION}
      </Typography>
      <Typography variant="body2" sx={{ color: textColor }}>
        I use{" "}
        <a
          href="https://plausible.io"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "underline" }}
          id="plausible_analytics_link"
        >
          Plausible Analytics
        </a>
        {" - "}
        no cookies, no personal data, no ad targeting - just privacy-friendly
        insights.
      </Typography>
      <Typography variant="body2" sx={{ color: textColor }}>
        © {new Date().getFullYear()} Brandon Rivera-Melo
      </Typography>
    </Box>
  );
};
