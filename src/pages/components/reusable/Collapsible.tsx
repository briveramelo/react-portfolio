import { Box } from "@mui/material";
import React, { useEffect, useRef, useState, useCallback } from "react";

export function Collapsible({
  isOpen,
  durationMs,
  children,
}: {
  isOpen: boolean;
  durationMs: number;
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false);
  const addedPadding = 500; // used in cases where scrollHeight misses some content and clips it inadvertently, does not cause harm

  // Function to update the height dynamically
  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? contentRef.current.scrollHeight + addedPadding : 0);
    }
  }, [isOpen]);

  // Update height when `isOpen` changes
  useEffect(() => {
    setDisableTransition(false);
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
          : `max-height ${durationMs}ms ease-in-out`,
        maxHeight: maxHeight,
        // willChange not relevant for maxHeight
      }}
    >
      <Box ref={contentRef}>{children}</Box>
    </Box>
  );
}
