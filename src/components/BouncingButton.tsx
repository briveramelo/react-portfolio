import React, { useState, useRef } from "react";
import { Button } from "@mui/material";
import { useIntersectionObserver } from "../utils/useIntersectionObserver";

interface BouncingButtonProps {
  onClick: () => void;
  numBounces: number;
  bounceDurationMs: number;
  children: React.ReactNode;
  sx?: object; // Optional style override
}

const BouncingButton: React.FC<BouncingButtonProps> = ({
  onClick,
  numBounces,
  bounceDurationMs,
  children,
  sx,
  ...rest
}) => {
  const [isBouncing, setIsBouncing] = useState<boolean>(false);
  const [animationPlayed, setAnimationPlayed] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null!);
  const isVisible = useIntersectionObserver(buttonRef, { threshold: 1.0 });

  React.useEffect(() => {
    if (isVisible && !animationPlayed) {
      setIsBouncing(true); // Start bounce animation
      setAnimationPlayed(true); // Lock animation
      setTimeout(() => setIsBouncing(false), numBounces * bounceDurationMs);
    }
  }, [isVisible, animationPlayed, numBounces, bounceDurationMs]);

  return (
    <Button
      ref={buttonRef}
      onClick={() => {
        setIsBouncing(false);
        onClick();
      }}
      className="pop-shadow"
      sx={{
        animation: isBouncing
          ? `bounce ${bounceDurationMs}ms ease-in-out infinite`
          : "none",
        "@keyframes bounce": {
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0) scale(1)",
          },
          "40%": {
            transform: "translateY(-15px) scale(1.2)",
          },
          "60%": {
            transform: "translateY(-3px) scale(1.025)",
          },
        },
        "&:hover": { transform: "translateY(-10%) !important" },
        ...sx, // Merge custom styles
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default BouncingButton;
