import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Box, Container } from "@mui/material";
import { HeroText } from "./Hero/HeroText";
import HeroCard from "./Hero/HeroCard.tsx";
import { useIntersectionObserver } from "../../utils/hooks/useIntersectionObserver.ts";
import ScrollDownIndicator from "../components/ScrollDownIndicator.tsx";
import { useCustomPalette } from "../../theme/theme.ts";
import { SpinningCardProvider } from "../components/SpinningCardContext.tsx";

interface HeroProps {
  backgroundColor: string;
  textColor: string;
  id: string;
  homeLinkRef: React.RefObject<HTMLElement> | undefined;
}

export const HeroSection = forwardRef<HTMLElement, HeroProps>(
  ({ backgroundColor, textColor, id, homeLinkRef }, ref) => {
    const isSectionVisible = useIntersectionObserver(
      ref as React.RefObject<HTMLElement>,
      { threshold: 0.1 },
      true,
    );

    const [isSectionVisibleDelayed, setIsSectionVisibleDelayed] =
      useState<boolean>(true);
    const [hasCardBeenHovered, setHasCardBeenHovered] =
      useState<boolean>(false);
    const [hasSectionLostVisibility, setHasSectionLostVisibility] =
      useState<boolean>(false);
    const isFirstCardAnimationRef = useRef<boolean>(true);

    const { interactable } = useCustomPalette();

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsSectionVisibleDelayed(isSectionVisible);
      }, 500);

      return () => clearTimeout(timer);
    }, [isSectionVisible]);

    useEffect(() => {
      if (!isSectionVisibleDelayed) {
        setHasSectionLostVisibility(true);
      }
    }, [isSectionVisibleDelayed]);

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
        {/* Link target */}
        <Box
          id={id}
          ref={homeLinkRef}
          sx={{ position: "absolute", mt: -100 }}
        />
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
          <HeroText textColor={textColor} isSectionVisible={isSectionVisible} />
          <SpinningCardProvider>
            <HeroCard
              isSectionVisible={isSectionVisible}
              onHoveredChange={setHasCardBeenHovered}
              isFirstCardAnimationRef={isFirstCardAnimationRef}
            />
          </SpinningCardProvider>
        </Container>
        {hasCardBeenHovered && (
          <ScrollDownIndicator
            color={
              hasSectionLostVisibility
                ? interactable.used
                : interactable.highlighted
            }
            size={40}
          />
        )}
      </Box>
    );
  },
);
