import React, { useRef, useState, useEffect } from "react";
import { Box } from "@mui/material";

interface HoverExpandGridProps {
  children: React.ReactNode[];
  transitionDurationMs: number;
  minCardWidth: number; // in pixels – the minimum width a card should have
  maxCardWidth: number; // in pixels – the maximum width a card should have when at rest (solo)
  maxFlex: number; // relative flex value for the hovered card
  minFlex: number; // relative flex value for non-hovered cards
}

export const HoverExpandGrid: React.FC<HoverExpandGridProps> = ({
  children,
  maxFlex,
  minFlex,
  minCardWidth,
  maxCardWidth,
  transitionDurationMs,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Precompute the number of cards per row based on container width,
  // minCardWidth, and our flex safety constraints.
  const [cardsPerRow, setCardsPerRow] = useState(1);
  // Track the globally hovered card's index.
  const [hoveredGlobalIndex, setHoveredGlobalIndex] = useState<number | null>(
    null,
  );

  // Precompute the number of cards per row.
  useEffect(() => {
    const updateCardsPerRow = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        // Ideal count if each card were exactly minCardWidth.
        const idealCount = Math.floor(containerWidth / minCardWidth) || 1;
        // Preemptive safety:
        // In a hover situation with n cards in the row,
        // the container must be at least:
        //    (maxFlex + (n - 1) * minFlex) * minCardWidth
        // Rearranging for n:
        //    n <= ((containerWidth / minCardWidth - maxFlex) / minFlex) + 1
        const safeCount = Math.floor(
          (containerWidth / minCardWidth - maxFlex) / minFlex + 1,
        );
        const count = Math.max(1, Math.min(idealCount, safeCount));
        setCardsPerRow(count);
      }
    };
    updateCardsPerRow();
    window.addEventListener("resize", updateCardsPerRow);
    return () => window.removeEventListener("resize", updateCardsPerRow);
  }, [minCardWidth, maxFlex, minFlex]);

  // Group children into rows based on the fixed cardsPerRow.
  const childrenArray = React.Children.toArray(children);
  const rows: React.ReactNode[][] = [];
  for (let i = 0; i < childrenArray.length; i += cardsPerRow) {
    rows.push(childrenArray.slice(i, i + cardsPerRow));
  }

  /**
   * Compute the card width (as a percentage string) for a card in a row.
   *
   * For rows with more than one card, if the row is hovered the hovered card
   * gets a share based on maxFlex and the others based on minFlex.
   *
   * For a single-card row, at rest the card’s width is capped to maxCardWidth,
   * but on hover it expands to fill the full row.
   *
   * @param rowCount The number of cards in the row.
   * @param isHoveredRow Whether the current row is hovered.
   * @param isThisHovered Whether this card is the hovered one.
   * @param containerWidth The container’s current width in pixels.
   */
  const computeCardWidth = (
    rowCount: number,
    isHoveredRow: boolean,
    isThisHovered: boolean,
    containerWidth: number,
  ): string => {
    if (rowCount === 1) {
      // For a solo card row:
      if (!isThisHovered) {
        // At rest, cap the width to maxCardWidth.
        const pct =
          containerWidth > maxCardWidth
            ? (maxCardWidth / containerWidth) * 100
            : 100;
        return `${pct}%`;
      } else {
        // On hover, expand to full width.
        return `100%`;
      }
    }

    // For rows with multiple cards:
    if (!isHoveredRow) {
      return `${100 / rowCount}%`;
    }
    // In a hovered row, compute based on the flex ratios.
    const totalRatio = maxFlex + (rowCount - 1) * minFlex;
    return isThisHovered
      ? `${(maxFlex / totalRatio) * 100}%`
      : `${(minFlex / totalRatio) * 100}%`;
  };

  return (
    <Box ref={containerRef} display="flex" flexDirection="column" gap={2}>
      {rows.map((row, rowIndex) => {
        const rowStartIndex = rowIndex * cardsPerRow;
        // Determine if this row is hovered (i.e. contains the hovered card).
        const isHoveredRow =
          hoveredGlobalIndex !== null &&
          hoveredGlobalIndex >= rowStartIndex &&
          hoveredGlobalIndex < rowStartIndex + row.length;
        const containerWidth = containerRef.current?.offsetWidth || 0;
        return (
          <Box
            key={rowIndex}
            display="flex"
            gap={2}
            alignItems="stretch"
            // For a solo card row, center the card.
            sx={row.length === 1 ? { justifyContent: "center" } : {}}
          >
            {row.map((child, localIndex) => {
              const globalIndex = rowStartIndex + localIndex;
              const isThisHovered = globalIndex === hoveredGlobalIndex;
              return (
                <Box
                  key={globalIndex}
                  sx={{
                    flex: `0 0 ${computeCardWidth(
                      row.length,
                      isHoveredRow,
                      isThisHovered,
                      containerWidth,
                    )}`,
                    transition: `flex ${transitionDurationMs}ms ease, width ${transitionDurationMs}ms ease`,
                  }}
                  onPointerEnter={() => setHoveredGlobalIndex(globalIndex)}
                  onPointerLeave={() => setHoveredGlobalIndex(null)}
                >
                  {child}
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};
