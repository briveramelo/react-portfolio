import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

export const ReactIconAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

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

  const sharedEllipseAnimationProps = {
    rx: [30, 25, 30],
    ry: [10, 15, 10],
  };

  const sharedEllipseInitialProps = {
    rx: 30,
    ry: 10,
  };

  const baseEllipseTransitionProps = {
    rotate: { duration: 6, ease: "linear", repeat: Infinity },
    rx: { duration: 2, ease: "easeInOut", repeat: Infinity, bounce },
    ry: { duration: 2, ease: "easeInOut", repeat: Infinity, bounce },
  };

  const hoverEllipseTransitionProps = {
    rotate: { duration: 2, ease: "linear", repeat: Infinity }, // Faster spin
    rx: { duration: 1, ease: "easeInOut", repeat: Infinity, bounce },
    ry: { duration: 1, ease: "easeInOut", repeat: Infinity, bounce },
  };
  const baseCircleProps = {
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
    bounce,
  }
  const hoverCircleProps = {
    duration: 1,
    ease: "easeInOut",
    repeat: Infinity,
    bounce,
  }

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        animate={{
          scale: isHovered ? 1.2 : 1,
        }}
      >
        {/* Ring 1 */}
        <motion.ellipse
          {...sharedEllipseProps}
          initial={{ rotate: 0, ...sharedEllipseInitialProps }}
          animate={{ rotate: 360, ...sharedEllipseAnimationProps }}
          transition={isHovered ? hoverEllipseTransitionProps : baseEllipseTransitionProps}
          key={isHovered ? "hov1" : "not1"}
        />

        {/* Ring 2 */}
        <motion.ellipse
          {...sharedEllipseProps}
          initial={{ rotate: 120, ...sharedEllipseInitialProps }}
          animate={{ rotate: 480, ...sharedEllipseAnimationProps }}
          transition={isHovered ? hoverEllipseTransitionProps : baseEllipseTransitionProps}
          key={isHovered ? "hov2" : "not2"}
        />

        {/* Ring 3 */}
        <motion.ellipse
          {...sharedEllipseProps}
          initial={{ rotate: 240, ...sharedEllipseInitialProps }}
          animate={{ rotate: 600, ...sharedEllipseAnimationProps }}
          transition={isHovered ? hoverEllipseTransitionProps : baseEllipseTransitionProps}
          key={isHovered ? "hov3" : "not3"}
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
          transition={isHovered ? hoverCircleProps : baseCircleProps}
          key={isHovered ? 'fastCirc' : 'slowCirc'}
        />
      </motion.svg>
    </Box>
  );
};
