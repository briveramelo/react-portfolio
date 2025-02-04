import React, { useMemo } from "react";
import { Box, Avatar } from "@mui/material";
import { Refresh } from "@mui/icons-material";
import { cp } from "../../../utils/utils";
import { generateSinusoidalScaleKeyframes } from "../../../utils/keyframeGenerator.ts";
import { keyframes } from "@emotion/react";
import brandon from "@/assets/people/brandon.webp";

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

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          borderRadius: "50%",
          zIndex: 1,
          color: hasBeenHovered ? "rgba(255, 255, 255, .8)" : "orange",
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
          borderColor: cp("background.paper"),
        }}
        className="pop-shadow"
      />
    </Box>
  );
};

export default HeroCardFront;
