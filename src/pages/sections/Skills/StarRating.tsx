import React, { useMemo } from "react";
import { Box, keyframes } from "@mui/material";
import StarIcon from "@/assets/star.svg?react";
import {
  maxStarCount,
  starPopAnimationDurationMs,
} from "../../../data/constants.ts";
import { useAnimatedValue } from "../../../utils/hooks/useAnimatedValue.ts";
import { useCustomPalette } from "../../../theme.ts";

interface StarRatingProps {
  count: number; // 1–5
  isVisible: boolean;
  isSectionVisible: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  count,
  isVisible,
  isSectionVisible,
}) => {
  const animatedStarCount = useAnimatedValue(
    count,
    starPopAnimationDurationMs,
    isVisible,
  );
  const { experience } = useCustomPalette();
  const popAnimation = useMemo(
    () => keyframes`
      0% { transform: scale(0); opacity: 0; }
      50% { transform: scale(1.3); opacity: 1; }
      100% { transform: scale(1); opacity: 1; }
  `,
    [],
  );

  return (
    <Box display="flex">
      {Array.from({ length: maxStarCount }, (_, i) => {
        const isGold = i < Math.round(animatedStarCount);

        return (
          <Box
            key={i}
            sx={{
              animation: isVisible
                ? `${popAnimation} ${starPopAnimationDurationMs}ms ease-out`
                : "",
              animationDelay: `${i * 0.1}s`,
              animationFillMode: "backwards",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              willChange: isSectionVisible ? "transform, opacity" : "",
            }}
          >
            <StarIcon
              style={{
                height: 16,
                fill: isGold ? experience.star : experience.empty, // Immediately assign correct color
                marginRight: 4,
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default React.memo(StarRating);
