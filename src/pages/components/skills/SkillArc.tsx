import React from "react";
import { Box, keyframes } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  starArcAnimationDurationMs,
  maxStarCount,
  starPopAnimationDurationMs,
} from "../../../data/constants.ts";
import { getAnimatedValue } from "../../../utils/getAnimatedValue.ts";
import HalfStar from "./HalfStar.tsx"; // Import the custom HalfStar component
import { useCustomPalette } from "../../../theme.ts";

interface SkillCategoryArcProps {
  starCount: number; // Accepts full or half values (e.g. 1, 1.5, 2, 2.5)
}

const SkillArc: React.FC<SkillCategoryArcProps> = ({ starCount }) => {
  const { skills } = useCustomPalette();
  const { star, empty } = skills;
  const arcSize = 300;
  const radius = arcSize / 2;
  const peakScale = 1.3;
  const starContainerSize = 45 * peakScale;
  const starFontSize = "30px";
  const animatedStarCount = getAnimatedValue(
    starCount,
    starPopAnimationDurationMs,
  );

  const popAnimation = keyframes`
      0% { transform: scale(0); opacity: 0; }
      50% { transform: scale(${peakScale}); opacity: 1; }
      100% { transform: scale(1); opacity: 1; }
  `;

  // Fixed star positions based on the maximum star count
  const getStarPositions = () => {
    const positions = [];
    const startAngle = -Math.PI / 2; // Top center
    const totalSpacing = Math.PI / 2; // Half-circle arc
    const angleStep = maxStarCount > 1 ? totalSpacing / maxStarCount : 0;
    const angleOffset = ((maxStarCount - 1) * angleStep) / 2; // Centers stars

    for (let i = 0; i < maxStarCount; i++) {
      const angle = startAngle - angleOffset + i * angleStep;
      const x = arcSize / 2 + radius * Math.cos(angle);
      const y = arcSize / 2 + radius * Math.sin(angle);
      positions.push({ x, y });
    }

    return positions;
  };

  const starPositions = getStarPositions();
  const roundedCount = Math.round(animatedStarCount);

  return (
    <Box position="relative">
      <svg height={90} width={arcSize}>
        {starPositions.map((pos, index) => {
          const isGold = index < roundedCount;
          const isHalfStar =
            index === Math.floor(animatedStarCount) && starCount % 1 !== 0;

          return (
            <foreignObject
              key={index}
              x={pos.x - starContainerSize / 2}
              y={pos.y - starContainerSize / 2 + 22.5}
              width={starContainerSize}
              height={starContainerSize}
            >
              <Box
                component="div"
                sx={{
                  animation: `${popAnimation} ${starPopAnimationDurationMs}ms ease-out`,
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "backwards",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  willChange: "transform, opacity",
                }}
              >
                {isHalfStar ? (
                  <HalfStar leftColor={star} rightColor={empty} size="35px" />
                ) : (
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      color: isGold ? star : empty,
                      fontSize: starFontSize,
                    }}
                  />
                )}
              </Box>
            </foreignObject>
          );
        })}
      </svg>
    </Box>
  );
};

export default SkillArc;
