import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { BeatingHeart } from "./specialty/BeatingHeart.tsx";
import { SteamingCoffee } from "./specialty/SteamingCoffee.tsx";
import { useHoverTracking } from "../../tracking/useHoverTracking.ts";

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
  const { trackMouseEnter, trackMouseLeave } = useHoverTracking();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: backgroundColor,
        py: 4,
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
            Made with
          </Typography>
          <BeatingHeart heartTriggerRef={heartTriggerRef} />
          <Typography variant="body1" sx={{ ml: 1, mr: 2, color: textColor }}>
            and
          </Typography>
          <SteamingCoffee />
        </Box>
        <Typography variant="body2" sx={{ color: textColor }}>
          I use{" "}
          <a
            href="https://plausible.io"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "underline" }}
            id="plausible-analytics-link"
            onMouseEnter={trackMouseEnter}
            onMouseLeave={trackMouseLeave}
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
      </Container>
    </Box>
  );
};
