import React, { forwardRef, useRef, useState } from "react";
import { Box, Container } from "@mui/material";
import { HeroText } from "./Hero/HeroText";
import HeroCard from "./Hero/HeroCard.tsx";
import { useIntersectionObserver } from "../../utils/hooks/useIntersectionObserver.ts";
import ScrollDownIndicator from "../components/specialty/ScrollDownIndicator.tsx";

interface HeroProps {
  backgroundColor: string;
  textColor: string;
  id: string;
  heroLinkRef: React.RefObject<HTMLElement>;
}

export const HeroSection = forwardRef<HTMLElement, HeroProps>(
  ({ backgroundColor, textColor, id, heroLinkRef }, ref) => {
    const isSectionVisible = useIntersectionObserver(
      ref as React.RefObject<HTMLElement>,
      { threshold: 0.1 },
    );
    const [hasCardBeenHovered, setHasCardBeenHovered] =
      useState<boolean>(false);
    const isFirstCardAnimationRef = useRef<boolean>(true);
    return (
      <Box
        component="section"
        sx={{
          mt: { xs: -7, sm: 0 },
          py: { xs: 0, sm: 9 },
          backgroundColor: backgroundColor,
          color: textColor,
          minHeight: "100vh",
          overflow: "hidden",
        }}
        id={id}
        ref={ref}
      >
        {/* link target */}
        <Box
          id={id}
          ref={heroLinkRef}
          sx={{ position: "absolute", mt: -100 }}
        ></Box>
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
            isFirstCardAnimation={isFirstCardAnimationRef.current}
            isSectionVisible={isSectionVisible}
          />
          <HeroCard
            isSectionVisible={isSectionVisible}
            onHoveredChange={setHasCardBeenHovered}
            isFirstCardAnimationRef={isFirstCardAnimationRef}
          />
        </Container>
        {hasCardBeenHovered && (
          <ScrollDownIndicator color={"orange"} size={40} />
        )}
      </Box>
    );
  },
);
