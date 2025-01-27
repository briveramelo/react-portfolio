import { Box } from "@mui/material";
import React, { useEffect, useRef, useState, useCallback } from "react";

export function Collapsible({
  isOpen,
  isSectionVisible,
  durationMs,
  children,
  otherContentRef,
}: {
  isOpen: boolean;
  isSectionVisible: boolean;
  durationMs: number;
  children: React.ReactNode;
  otherContentRef?: any;
}) {
  const contentRef = otherContentRef ?? useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false);

  // Function to update the height dynamically
  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  // Update height when `isOpen` changes
  useEffect(() => {
    setDisableTransition(false); // Enable smooth transition
    updateHeight();
  }, [isOpen, updateHeight]);

  // Handle window resize events to adjust height immediately without transition
  useEffect(() => {
    const handleResize = () => {
      setDisableTransition(true);
      updateHeight();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateHeight]);

  return (
    <Box
      sx={{
        transition: disableTransition
          ? "none"
          : `height ${durationMs}ms ease-in-out`,
        height: height,
        willChange: isSectionVisible ? "height" : "auto",
      }}
    >
      <Box ref={contentRef}>{children}</Box>
    </Box>
  );
}
