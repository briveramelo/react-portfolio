import React from "react";
import { Typography, TypographyProps } from "@mui/material";

interface SiblingParagraphProps {
  children: React.ReactNode;
  className?: string;
  variant?: TypographyProps["variant"];
  sx?: object;
}

/**
 * `SiblingParagraph` is a utility component designed to work seamlessly with `ReactMarkdown`
 * to ensure that styling properties such as `className`, `variant`, and `sx` are applied
 * only to plain text nodes within the paragraph, rather than to all child elements
 * (e.g., `<strong>`, `<em>`, etc.).
 *
 * ## Purpose
 * When using `ReactMarkdown`, it wraps content in a `<p>` tag by default. Applying styles
 * to the `<p>` tag would inadvertently affect all children, including inline elements
 * like `<strong>` and `<em>`. This component helps prevent that by:
 *
 * - Wrapping only plain text content inside individual styled `<Typography>` spans.
 * - Ensuring elements like `<strong>` and other inline Markdown elements remain separate siblings.
 *
 * ## How It Works
 * - The component iterates over the `children` prop.
 * - It accumulates consecutive text nodes and wraps them inside a styled `<Typography>` span.
 *
 * ## Usage with ReactMarkdown
 * ```tsx
 * <ReactMarkdown
 *   components={{
 *     p: ({ children }) => (
 *       <SiblingParagraph
 *         className="fade-in"
 *         variant="body1"
 *         sx={{ color: 'text.secondary' }}
 *       >
 *         {children}
 *       </SiblingParagraph>
 *     ),
 *     strong: ({ children }) => (
 *       <HighlightedText className="highlight-animation">
 *         {children}
 *       </HighlightedText>
 *     ),
 *   }}
 * >
 *   **This is a bold statement** and some regular text.
 * </ReactMarkdown>
 * ```
 *
 * ## Props
 * @param {React.ReactNode} children - The content inside the paragraph, can contain text and elements.
 * @param {string} [className] - Optional class names to apply to the text spans.
 * @param {TypographyProps['variant']} [variant] - Typography variant for text styling.
 * @param {object} [sx] - MUI `sx` prop for inline styling.
 *
 * ## Example Output
 * Given the input:
 * ```md
 * **Bold Text** Regular text.
 * ```
 * The rendered output will be:
 * ```html
 * <p>
 *   <strong class="highlight-animation">Bold Text</strong>
 *   <span class="fade-in"> Regular text.</span>
 * </p>
 * ```
 */

export function SiblingParagraph({
  children,
  className,
  variant,
  sx,
}: SiblingParagraphProps) {
  const newChildren: React.ReactNode[] = [];
  let buffer: React.ReactNode[] = [];

  // Function to flush accumulated text nodes into a single span element
  function flushBuffer() {
    if (buffer.length > 0) {
      newChildren.push(
        <Typography
          key={Math.random()}
          className={className}
          variant={variant}
          sx={sx}
          component="span"
        >
          {buffer}
        </Typography>,
      );
      buffer = [];
    }
  }

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      flushBuffer(); // Push accumulated text as a sibling
      newChildren.push(child); // Push the React element as its own sibling
    } else if (typeof child === "string") {
      buffer.push(child); // Accumulate text nodes
    }
  });

  flushBuffer(); // Flush any remaining text buffer

  return <>{newChildren}</>;
}
