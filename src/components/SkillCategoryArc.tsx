import React from "react";
import { Box, keyframes } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { animationDurationMs, maxStarCount } from "../utils/constants.ts";
import { getAnimatedValue } from "../utils/getAnimatedValue.tsx";

interface SkillCategoryArcProps {
  starCount: number; // Accepts full or half values (e.g. 1, 1.5, 2, 2.5)
}

const SkillCategoryArc: React.FC<SkillCategoryArcProps> = ({ starCount }) => {
  const arcSize = 300;
  const radius = arcSize / 2;
  const peakScale = 1.3;
  const starContainerSize = 45;
  const starFontSize = "30px";
  const animatedStarCount = getAnimatedValue(starCount, animationDurationMs);
  const popAnimation = keyframes`
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(${peakScale}); opacity: 1; }
    100% { transform: scale(1); }
  `;
  const popAnimationDurationMs = 600;

  // Calculate star positions along an invisible arc
  const getStarPositions = (count: number) => {
    const positions = [];
    const startAngle = -Math.PI / 2; // Top center
    const totalSpacing = Math.PI / 2; // Half-circle arc

    const angleStep = count > 1 ? totalSpacing / count : 0;
    const angleOffset = ((count - 1) * angleStep) / 2; // Centers stars

    for (let i = 0; i < count; i++) {
      const angle = startAngle - angleOffset + i * angleStep;
      const x = arcSize / 2 + radius * Math.cos(angle);
      const y = arcSize / 2 + radius * Math.sin(angle);
      positions.push({ x, y });
    }

    return positions;
  };

  const halfRoundedStarCount = Math.round(animatedStarCount * 2) / 2;
  const fullStarCount = Math.floor(halfRoundedStarCount);
  const hasHalfStar = halfRoundedStarCount % 1 !== 0;
  const totalStarCount = hasHalfStar ? fullStarCount + 1 : fullStarCount;

  const starPositions = getStarPositions(totalStarCount);

  return (
    <Box position="relative">
      <svg height={100}>
        {starPositions.map((pos, index) => (
          <foreignObject
            key={index}
            x={pos.x - starContainerSize / 2}
            y={pos.y - starContainerSize / 2 + 10}
            width={starContainerSize * peakScale}
            height={starContainerSize * peakScale}
          >
            <Box
              component="div"
              sx={{
                animation: `${popAnimation} ${popAnimationDurationMs}ms ease-out`,
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "backwards",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
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
                  color: "#FFD700", // Gold color for stars
                  fontSize: starFontSize,
                }}
              />
            </Box>
          </foreignObject>
        ))}
      </svg>
    </Box>
  );
};

export default SkillCategoryArc;
