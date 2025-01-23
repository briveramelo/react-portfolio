import React from "react";
import { Box, keyframes } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { maxStarCount, starPopAnimationDurationMs } from "../../../data/constants.ts";
import { getAnimatedValue } from "../../../utils/getAnimatedValue.ts";
import { useCustomPalette } from "../../../theme.ts";

interface StarRatingProps {
  count: number; // 1–5
}

const StarRating: React.FC<StarRatingProps> = ({ count }) => {
  const animatedStarCount = getAnimatedValue(count, starPopAnimationDurationMs);
  const { skills } = useCustomPalette();
  const popAnimation = keyframes`
      0% { transform: scale(0); opacity: 0; }
      50% { transform: scale(1.3); opacity: 1; }
      100% { transform: scale(1); opacity: 1; }
  `;

  return (
    <Box display="flex">
      {Array.from({ length: maxStarCount }, (_, i) => {
        const isGold = i < Math.round(animatedStarCount);

        return (
          <Box
            key={i}
            sx={{
              animation: `${popAnimation} ${starPopAnimationDurationMs}ms ease-out`,
              animationDelay: `${i * 0.1}s`,
              animationFillMode: "backwards",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faStar}
              style={{
                color: isGold ? skills.star : skills.empty, // Immediately assign correct color
                marginRight: 4,
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default StarRating;
