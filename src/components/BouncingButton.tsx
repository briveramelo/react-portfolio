import React, { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";

interface BouncingButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  sx?: object; // Optional style override
}

const BouncingButton: React.FC<BouncingButtonProps> = ({
  onClick,
  children,
  sx,
  ...rest
}) => {
  const [isBouncing, setIsBouncing] = useState<boolean>(false);
  const [animationPlayed, setAnimationPlayed] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null!);
  const numBounces = 2;
  const bounceDurationMs = 1750;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationPlayed) {
          setIsBouncing(true); // Start bounce animation
          setAnimationPlayed(true); // Lock animation
          setTimeout(() => setIsBouncing(false), numBounces * bounceDurationMs);
        }
      },
      { threshold: 1.0 }, // trigger when fully visible in viewport
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, [animationPlayed]);

  return (
    <Button
      ref={buttonRef}
      onClick={onClick}
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
        ...sx, // Merge custom styles
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default BouncingButton;
