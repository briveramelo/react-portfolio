import React, { MouseEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { useHoverTracking } from "../../../tracking/useHoverTracking.ts";

export const ReactIconAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { trackMouseEnter, trackMouseLeave } = useHoverTracking();
  const [ellipseRotations, setEllipseRotations] = useState([0, 120, 240]);
  const ellipseRefs = useRef<(SVGEllipseElement | null)[]>([]);

  const setRef = (index: number, element: SVGEllipseElement | null) => {
    if (element) {
      ellipseRefs.current[index] = element;
    }
  };

  const getCurrentAngle = (element: SVGEllipseElement | null) => {
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
  };

  const handleOnHover = (
    event: MouseEvent<HTMLDivElement> | null,
    isMouseEnter: boolean,
  ) => {
    setIsHovered(isMouseEnter);
    if (isMouseEnter) {
      trackMouseEnter();
    } else if (event !== null) {
      trackMouseLeave(event);
    }

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
        height: 100,
        width: 100,
        overflow: "visible",
      }}
    >
      <Box
        zIndex={1}
        sx={{ position: "absolute", height: 65, width: 65 }}
        onMouseLeave={(e) => handleOnHover(e, false)}
        onMouseEnter={() => handleOnHover(null, true)}
        id={"react-icon"}
      />
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
            cx="50"
            cy="50"
            rx="30"
            ry="10"
            stroke="#61DAFB"
            strokeWidth={3}
            fill="none"
            key={`ellipse-${index}-${isHovered ? "hov" : ""}`}
            initial={{
              rotate: initialRotation,
              rx: 30,
              ry: 10,
            }}
            animate={{
              rotate: 360 + initialRotation,
              rx: [30, 25, 30],
              ry: [10, 15, 10],
            }}
            transition={
              isHovered
                ? {
                    rotate: { duration: 2, ease: "linear", repeat: Infinity },
                    rx: {
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                      bounce: 1,
                    },
                    ry: {
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                      bounce: 1,
                    },
                  }
                : {
                    rotate: { duration: 6, ease: "linear", repeat: Infinity },
                    rx: {
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      bounce: 1,
                    },
                    ry: {
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      bounce: 1,
                    },
                  }
            }
          />
        ))}

        {/* Center Nucleus */}
        <motion.circle
          cx="50"
          cy="50"
          r="3"
          fill="#61DAFB"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={
            isHovered
              ? { duration: 1, ease: "easeInOut", repeat: Infinity, bounce: 1 }
              : { duration: 2, ease: "easeInOut", repeat: Infinity, bounce: 1 }
          }
          key={isHovered ? "fastCirc" : "slowCirc"}
        />
      </motion.svg>
    </Box>
  );
};
