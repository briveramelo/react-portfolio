import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

export const ReactIconAnimation = () => {
  const color = "#61DAFB";
  const bounce = 1;
  const size = 100;

  const sharedCircleAndEllipseProps = {
    cx: "50",
    cy: "50",
  };

  const sharedEllipseProps = {
    ...sharedCircleAndEllipseProps,
    rx: 30,
    ry: 10,
    stroke: color,
    strokeWidth: 3,
    fill: "none",
  };

  const sharedAnimationProps = {
    rx: [30, 25, 30],
    ry: [10, 15, 10],
  };

  const sharedInitialProps = {
    rx: 30,
    ry: 10,
  };

  const sharedTransitionProps = {
    rotate: { duration: 6, ease: "linear", repeat: Infinity },
    rx: { duration: 2, ease: "easeInOut", repeat: Infinity, bounce },
    ry: { duration: 2, ease: "easeInOut", repeat: Infinity, bounce },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        height: size,
        width: size,
        overflow: "visible",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        {/* Ring 1 */}
        <motion.ellipse
          {...sharedEllipseProps}
          initial={{ rotate: 0, ...sharedInitialProps }}
          animate={{ rotate: 360, ...sharedAnimationProps }}
          transition={sharedTransitionProps}
        />

        {/* Ring 2 */}
        <motion.ellipse
          {...sharedEllipseProps}
          initial={{ rotate: 120, ...sharedInitialProps }}
          animate={{ rotate: 480, ...sharedAnimationProps }}
          transition={sharedTransitionProps}
        />

        {/* Ring 3 */}
        <motion.ellipse
          {...sharedEllipseProps}
          initial={{ rotate: 240, ...sharedInitialProps }}
          animate={{ rotate: 600, ...sharedAnimationProps }}
          transition={sharedTransitionProps}
        />

        {/* Center Nucleus */}
        <motion.circle
          {...sharedCircleAndEllipseProps}
          r="3"
          fill={color}
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            bounce,
          }}
        />
      </svg>
    </Box>
  );
};
