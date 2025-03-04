import React from "react";
import { Box, keyframes } from "@mui/material";
import StarIcon from "@/assets/misc/star.svg?react";
import {
  maxStarCount,
  starPopAnimationDurationMs,
} from "../../../data/constants.ts";
import { useAnimatedValue } from "../../../utils/hooks/useAnimatedValue.ts";
import HalfStar from "./HalfStar.tsx";
import { useCustomPalette } from "../../../theme/theme.ts";

interface SkillCategoryArcProps {
  starCount: number; // Accepts full or half values (e.g. 1, 1.5, 2, 2.5)
  isVisible: boolean;
  isSectionVisible: boolean;
}

const arcSize = 300;
const radius = arcSize / 2;
const peakScale = 1.3;
const starContainerSize = 45 * peakScale;
const starSize = 30;

const SkillArc: React.FC<SkillCategoryArcProps> = ({
  starCount,
  isVisible,
  isSectionVisible,
}) => {
  const { experience } = useCustomPalette();
  const { star, empty } = experience;
  const animatedStarCount = useAnimatedValue(
    starCount,
    starPopAnimationDurationMs,
    isVisible,
  );

  const popAnimation = React.useMemo(
    () => keyframes`
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(${peakScale}); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  `,
    [],
  );

  const starPositions = React.useMemo(() => {
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
  }, []);

  const halfRoundedValue = Math.round(animatedStarCount * 2) / 2;
  const finalHalfRoundedValue = Math.round(starCount * 2) / 2;
  const isAnimationComplete =
    Math.abs(finalHalfRoundedValue - halfRoundedValue) < 0.01;

  return (
    <Box position="relative">
      <svg height={90} width={arcSize}>
        {starPositions.map((pos, index) => {
          const isHalfStar = isAnimationComplete
            ? Math.abs(index + 0.5 - finalHalfRoundedValue) < 0.01
            : false;
          const isGold = index < halfRoundedValue;
          const x = pos.x - starContainerSize / 2;
          const y = pos.y - starContainerSize / 2 + 22.5;
          return (
            <foreignObject
              key={index}
              x={x.toFixed(3)}
              y={y.toFixed(3)}
              width={starContainerSize}
              height={starContainerSize}
            >
              <Box
                component="div"
                sx={{
                  animation: isVisible
                    ? `${popAnimation} ${starPopAnimationDurationMs}ms ease-out`
                    : "",
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "backwards",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  // Only apply animation-related styles when visible
                  willChange: isSectionVisible
                    ? "transform, opacity"
                    : undefined,
                }}
              >
                {isHalfStar ? (
                  <HalfStar leftColor={star} rightColor={empty} size="35px" />
                ) : (
                  <StarIcon
                    style={{
                      color: isGold ? star : empty,
                      height: starSize,
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

export default React.memo(SkillArc);
