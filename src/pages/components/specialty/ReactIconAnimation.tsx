import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

export const ReactIconAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  // State for initial rotation values of each ellipse
  const [ellipseRotations, setEllipseRotations] = useState([0, 120, 240]);
  const ellipseRefs = useRef<(SVGEllipseElement | null)[]>([]);
  const setRef = (index: number, element: SVGEllipseElement | null) => {
    if (element) {
      ellipseRefs.current[index] = element;
    }
  };
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
  };
  const hoverCircleProps = {
    duration: 1,
    ease: "easeInOut",
    repeat: Infinity,
    bounce,
  };

  function getCurrentAngle(element: SVGEllipseElement | null) {
    if (!element) return 0;

    const style = window.getComputedStyle(element);
    const transform = style.transform;

    if (transform && transform !== "none") {
      // Extract the rotation value from the matrix
      const values = transform
        .match(/matrix\(([^)]+)\)/)?.[1]
        .split(", ")
        .map(Number);

      if (values && values.length >= 4) {
        const [a, b] = values;
        return Math.round(Math.atan2(b, a) * (180 / Math.PI));
      }
    }

    return 0; // Default to 0 if no transform or angle is found
  }

  const handleOnHover = (isMouseEnter: boolean) => {
    setIsHovered(isMouseEnter);

    setEllipseRotations((prev) => {
      if (!ellipseRefs.current) return prev;

      return prev.map((_, i) => {
        const currentRef = ellipseRefs.current[i];
        return getCurrentAngle(currentRef);
      });
    });
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
      onMouseEnter={() => handleOnHover(true)}
      onMouseLeave={() => handleOnHover(false)}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        animate={{
          scale: isHovered ? 1.2 : 1,
        }}
      >
        {/* Dynamically render each ellipse */}
        {ellipseRotations.map((initialRotation, index) => (
          <motion.ellipse
            ref={(element) => setRef(index, element)}
            {...sharedEllipseProps}
            key={`ellipse-${index}-${isHovered ? "hov" : ""}`}
            initial={{ rotate: initialRotation, ...sharedEllipseInitialProps }}
            animate={{ rotate: 360 + initialRotation, ...sharedEllipseAnimationProps }}
            transition={
              isHovered
                ? hoverEllipseTransitionProps
                : baseEllipseTransitionProps
            }
          />
        ))}

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
          key={isHovered ? "fastCirc" : "slowCirc"}
        />
      </motion.svg>
    </Box>
  );
};
