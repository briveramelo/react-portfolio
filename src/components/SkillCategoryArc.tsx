import React from "react";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { animationDurationMs, maxStarCount } from "../utils/constants.ts";
import { getAnimatedValue } from "../utils/getAnimatedValue.tsx";

interface SkillCategoryArcProps {
  starCount: number; // Accepts full or half values (e.g. 1, 1.5, 2, 2.5)
}

const SkillCategoryArc: React.FC<SkillCategoryArcProps> = ({ starCount }) => {
  const size = 150;  // Same size as ExperienceCategoryArc
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const animatedValue = getAnimatedValue(starCount, animationDurationMs);

  // Calculate star positions along an invisible arc
  const getStarPositions = (count: number) => {
    const positions = [];
    const startAngle = -Math.PI / 2; // Top center

    for (let i = 0; i < count; i++) {
      const totalSpacing = Math.PI / 2;  // Half-circle arc
      const angleOffset = (count - 1) * (totalSpacing / (count - 1 || 1)) / 2;
      const angle = startAngle - angleOffset + i * (totalSpacing / (count - 1 || 1));

      const x = size / 2 + radius * Math.cos(angle);
      const y = size / 2 + radius * Math.sin(angle);

      positions.push({ x, y });
    }

    return positions;
  };

  const halfRoundedStarCount = Math.round(animatedValue * 2) / 2;
  const fullStarCount = Math.floor(halfRoundedStarCount);
  const hasHalfStar = halfRoundedStarCount % 1 !== 0;
  const totalStarCount = hasHalfStar ? fullStarCount + 1 : fullStarCount;

  const starPositions = getStarPositions(totalStarCount);

  return (
    <Box position="relative" width={size} height={size}>
      <svg width={size} height={size}>
        {starPositions.map((pos, index) => (
          <foreignObject
            key={index}
            x={pos.x - 10}
            y={pos.y}
            width={20}
            height={20}
          >
            <FontAwesomeIcon
              icon={
                index < fullStarCount
                  ? faStar
                  : hasHalfStar && index === fullStarCount
                    ? faStarHalfAlt
                    : faStar
              }
              style={{
                color: "#FFD700",  // Gold color for stars
                fontSize: "20px",
              }}
            />
          </foreignObject>
        ))}
      </svg>
    </Box>
  );
};

export default SkillCategoryArc;
