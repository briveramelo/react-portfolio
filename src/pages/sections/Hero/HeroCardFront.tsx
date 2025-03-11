import React, { useMemo } from "react";
import { Box, Avatar } from "@mui/material";
import { Refresh } from "@mui/icons-material";
import { generateSinusoidalScaleKeyframes } from "../../../utils/keyframeGenerator.ts";
import { keyframes } from "@emotion/react";
import brandon from "@/assets/people/brandon.webp";
import { useCustomPalette } from "../../../theme/theme.ts";

interface HeroCardFrontProps {
  showRotationIcon: boolean;
  hasBeenHovered: boolean;
}

const HeroCardFront: React.FC<HeroCardFrontProps> = ({
  showRotationIcon,
  hasBeenHovered,
}) => {
  const pulseAnimation = useMemo(
    () => generateSinusoidalScaleKeyframes(1, 0.3, 20, 3),
    [],
  );
  const spinAnimation = useMemo(
    () => keyframes`
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    `,
    [],
  );
  const { interactable, background } = useCustomPalette();

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
        pointerEvents: "none",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          borderRadius: "50%",
          zIndex: 1,
          color: hasBeenHovered ? interactable.used : interactable.highlighted,
          animation: hasBeenHovered
            ? undefined
            : `${pulseAnimation} 2s infinite`,
          opacity: showRotationIcon ? 1 : 0,
          transition: `opacity 0.6s ease-in-out`,
        }}
      >
        <Refresh
          sx={{
            fontSize: 30,
            animation: hasBeenHovered
              ? undefined
              : `${spinAnimation} 2s linear infinite`,
          }}
        />
      </Box>

      <Avatar
        src={brandon}
        alt="Picture of Brandon"
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "20px",
          border: "8px solid",
          borderColor: background.paper,
        }}
        className="pop-shadow"
      />
    </Box>
  );
};

export default HeroCardFront;
