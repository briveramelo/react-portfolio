import React, { useRef, useState, useEffect } from "react";
import { Box } from "@mui/material";

interface HoverExpandGridProps {
  children: React.ReactNode[];
  transitionDurationMs: number;
  minCardWidth: number; // in pixels – the minimum width a card should have
  maxCardWidth: number; // in pixels – the maximum width a card should have when at rest (solo)
  maxFlex: number; // relative flex value for the hovered card
  minFlex: number; // relative flex value for non-hovered cards
  gap: number; // gap in pixels between cards
}

export const HoverExpandGrid: React.FC<HoverExpandGridProps> = ({
  children,
  maxFlex,
  minFlex,
  minCardWidth,
  maxCardWidth,
  transitionDurationMs,
  gap,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Precompute the number of cards per row based on container width, minCardWidth, and safety constraints.
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
        // Safety calculation: In a hover situation with n cards in the row,
        // the container must be at least: (maxFlex + (n - 1) * minFlex) * minCardWidth + (n - 1) * gap.
        const safeCount = Math.floor(
          (containerWidth - gap) /
            (minCardWidth * minFlex +
              gap * (minFlex - 1) +
              (maxFlex - minFlex) * minCardWidth) +
            1,
        );
        const count = Math.max(
          1,
          Math.min(idealCount, safeCount || idealCount),
        );
        setCardsPerRow(count);
      }
    };
    updateCardsPerRow();
    window.addEventListener("resize", updateCardsPerRow);
    return () => window.removeEventListener("resize", updateCardsPerRow);
  }, [minCardWidth, maxFlex, minFlex, gap]);

  // Group children into rows based on the fixed cardsPerRow.
  const childrenArray = React.Children.toArray(children);
  const rows: React.ReactNode[][] = [];
  for (let i = 0; i < childrenArray.length; i += cardsPerRow) {
    rows.push(childrenArray.slice(i, i + cardsPerRow));
  }

  /**
   * Compute the card width (as a percentage string) for a card in a row.
   * The effective container width for cards is reduced by the total horizontal gap:
   *    effectiveWidth = containerWidth - gap * (rowCount - 1)
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
    // For rows with a single card:
    if (rowCount === 1) {
      if (!isThisHovered) {
        const pct =
          containerWidth > maxCardWidth
            ? (maxCardWidth / containerWidth) * 100
            : 100;
        return `${pct}%`;
      } else {
        return `100%`;
      }
    }

    // Calculate the total gap in the row.
    const totalGap = (rowCount - 1) * gap;
    const effectiveWidth = containerWidth - totalGap;

    if (!isHoveredRow) {
      // Each card gets an equal share of the effective width.
      const cardWidthPx = effectiveWidth / rowCount;
      return `${(cardWidthPx / containerWidth) * 100}%`;
    }

    // For a hovered row, assign flex ratios.
    const totalRatio = maxFlex + (rowCount - 1) * minFlex;
    const ratio = isThisHovered ? maxFlex : minFlex;
    const cardWidthPx = (ratio / totalRatio) * effectiveWidth;
    return `${(cardWidthPx / containerWidth) * 100}%`;
  };

  return (
    <Box
      ref={containerRef}
      display="flex"
      flexDirection="column"
      gap={`${gap}px`}
    >
      {rows.map((row, rowIndex) => {
        const rowStartIndex = rowIndex * cardsPerRow;
        // Determine if this row is hovered.
        const isHoveredRow =
          hoveredGlobalIndex !== null &&
          hoveredGlobalIndex >= rowStartIndex &&
          hoveredGlobalIndex < rowStartIndex + row.length;
        const containerWidth = containerRef.current?.offsetWidth || 0;
        return (
          <Box
            key={rowIndex}
            display="flex"
            gap={`${gap}px`}
            alignItems="stretch"
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
