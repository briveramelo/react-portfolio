import React, { forwardRef, useState } from "react";
import { Box, Container } from "@mui/material";
import { HeroText } from "./Hero/HeroText";
import HeroCard from "./Hero/HeroCard.tsx";
import { useIntersectionObserver } from "../../utils/useIntersectionObserver.ts";
import ScrollDownIndicator from "../components/reusable/ScrollDownIndicator.tsx";

interface HeroProps {
  backgroundColor: string;
  textColor: string;
  id: string;
}

export const Hero = forwardRef<HTMLElement, HeroProps>(
  ({ backgroundColor, textColor, id }, ref) => {
    const isSectionVisible = useIntersectionObserver(
      ref as React.RefObject<HTMLElement>,
      { threshold: 0.1 },
    );
    const [hasCardBeenHovered, setHasCardBeenHovered] =
      useState<boolean>(false);

    return (
      <Box
        component="section"
        id={id}
        sx={{
          mt: { xs: -7, sm: 0 },
          py: { xs: 0, sm: 9 },
          backgroundColor: backgroundColor,
          color: textColor,
          scrollMarginTop: "80px",
          minHeight: "100vh",
          overflow: "hidden",
        }}
        ref={ref}
      >
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            my: 8,
          }}
        >
          <HeroText
            textColor={textColor}
            isFirstCardAnimation={true}
            isSectionVisible={isSectionVisible}
          />
          <HeroCard
            isSectionVisible={isSectionVisible}
            onHoveredChange={setHasCardBeenHovered}
          />
          {hasCardBeenHovered && (
            <ScrollDownIndicator color={"orange"} size={40} />
          )}
        </Container>
      </Box>
    );
  },
);
