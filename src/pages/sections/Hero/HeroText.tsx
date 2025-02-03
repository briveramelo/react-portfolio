import React from "react";
import { Typography, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { useAnimatedText } from "../../../utils/hooks/useAnimatedText.ts";
import {
  ANIMATION_START_DELAY_MS,
  ANIMATED_TRANSITION_DURATION_MS,
  FIRST_ANIMATION_START_DELAY_MS,
  FIRST_ANIMATED_TRANSITION_DURATION_MS,
} from "./heroHelpers.ts";

interface HeroTextProps {
  textColor: string;
  isSectionVisible: boolean;
  isFirstCardAnimation: boolean;
}

export const HeroText: React.FC<HeroTextProps> = ({
  textColor,
  isFirstCardAnimation,
  isSectionVisible,
}) => {
  const rolesText = useAnimatedText({
    texts: [
      `Health Tech Innovator
Lead Software Engineer
Game Developer
Project Manager
Team Player`,
    ],
    msPerCharAdd: 60,
    msPerCharDelete: 30,
    startingPauseMs: isFirstCardAnimation
      ? FIRST_ANIMATION_START_DELAY_MS +
        FIRST_ANIMATED_TRANSITION_DURATION_MS / 2
      : ANIMATION_START_DELAY_MS + ANIMATED_TRANSITION_DURATION_MS / 2,
    endingPauseMs: 1000,
    loopAnimation: false,
    variationFactor: 0.4,
    triggerRestart: isSectionVisible,
  });

  return (
    <Box sx={{ flex: 1 }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          color: textColor,
        }}
      >
        Brandon
        <br />
        Rivera-Melo
      </Typography>

      <Box sx={{ mt: 2, minHeight: "8.25rem", lineHeight: "8.25rem" }}>
        <ReactMarkdown
          remarkPlugins={[remarkBreaks]}
          components={{
            p: ({ children }) => (
              <Typography
                variant="h5"
                sx={{
                  fontSize: "1.25rem",
                  color: textColor,
                  maxWidth: "600px",
                  minHeight: "1.25rem",
                  lineHeight: "1.65rem",
                }}
              >
                {children}
              </Typography>
            ),
          }}
        >
          {rolesText}
        </ReactMarkdown>
      </Box>

      <Typography
        variant="body1"
        sx={{
          fontSize: "1.25rem",
          mt: 6,
          color: textColor,
          maxWidth: "600px",
        }}
      >
        Building a healthier world with
        <br />
        <i>tech and play</i>
      </Typography>
    </Box>
  );
};
