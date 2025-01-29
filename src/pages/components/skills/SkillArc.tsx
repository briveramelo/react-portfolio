import React from "react";
import { Box, keyframes } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const { faStar } = await import("@fortawesome/free-solid-svg-icons/faStar");
import {
  maxStarCount,
  starPopAnimationDurationMs,
} from "../../../data/constants.ts";
import { getAnimatedValue } from "../../../utils/getAnimatedValue.ts";
import HalfStar from "./HalfStar.tsx";
import { useCustomPalette } from "../../../theme.ts";

interface SkillCategoryArcProps {
  starCount: number; // Accepts full or half values (e.g. 1, 1.5, 2, 2.5)
  isSectionVisible: boolean;
}

const SkillArc: React.FC<SkillCategoryArcProps> = ({
  starCount,
  isSectionVisible,
}) => {
  const { experience } = useCustomPalette();
  const { star, empty } = experience;
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
  const halfRoundedValue = Math.round(animatedStarCount * 2) / 2;

  return (
    <Box position="relative">
      <svg height={90} width={arcSize}>
        {starPositions.map((pos, index) => {
          const isHalfStar = index + 0.5 === halfRoundedValue;
          const isGold = index < halfRoundedValue;

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
                  willChange: isSectionVisible ? "transform, opacity" : "", //since it starts hidden, conditional works well
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
