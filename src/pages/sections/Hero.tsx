import React, { useState, useRef, MouseEvent, forwardRef } from "react";
import { Container, Typography, Box, Avatar } from "@mui/material";
import brandon from "@/assets/people/brandon.webp";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { cp } from "../../utils/utils";
import { useFlareEffect } from "../../components/useFlareEffect.tsx";

// Define the props for the Hero component
interface HeroProps {
  backgroundColor: string;
  textColor: string;
}

export const Hero = forwardRef<HTMLElement, HeroProps>(
  ({ backgroundColor, textColor }, ref) => {
    const [targetRotationDeg, setTargetRotationDeg] = useState<number>(0);
    const [instantFlip, setInstantFlip] = useState<boolean>(false);
    const transitionDurationMs = 500; // Duration of the transition in ms
    const startTimeRefMs = useRef<number | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useFlareEffect({
      canvasRef,
      containerRef,
      xOffset: -40,
      yAmpFactor: 0.65,
      phaseOffset: Math.PI * 0.5,
      durationMs: 15000,
    });

    // Track if the animation is halfway done
    const hasTransitionElapsedHalfway = (): boolean => {
      if (!startTimeRefMs.current) return false;
      const elapsedTimeMs = Date.now() - startTimeRefMs.current;
      return elapsedTimeMs >= transitionDurationMs / 2;
    };

    // Determine if the mouse is on the right half of the card
    const isRight = (event: MouseEvent<HTMLDivElement>): boolean => {
      const { left, width } = event.currentTarget.getBoundingClientRect();
      return event.clientX - left > width / 2;
    };

    // Mouse enters: spin left (-180) or spin right (180)
    const handleMouseEnter = (event: MouseEvent<HTMLDivElement>): void => {
      setTargetRotationDeg(isRight(event) ? -180 : 180);
      startTimeRefMs.current = Date.now();
    };

    // Mouse leaves: either rotate back to 0 with or without an instant flip
    const handleMouseLeave = (event: MouseEvent<HTMLDivElement>): void => {
      const leavingRight = isRight(event);
      const shouldInstantFlip =
        hasTransitionElapsedHalfway() &&
        ((targetRotationDeg === 180 && leavingRight) ||
          (targetRotationDeg === -180 && !leavingRight));

      if (shouldInstantFlip) {
        setInstantFlip(true);
        setTargetRotationDeg((prev) => (prev === 180 ? -180 : 180));

        // Wait a frame for the above to render with no transition
        // Then re-enable transitions and smoothly rotate to 0
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setInstantFlip(false);
            setTargetRotationDeg(0);
          });
        });
      } else {
        setTargetRotationDeg(0);
      }
      startTimeRefMs.current = null; // Reset the start time
    };

    return (
      <Box
        component="section"
        id="home"
        sx={{
          py: 10,
          backgroundColor: backgroundColor,
          color: textColor,
          scrollMarginTop: "80px",
        }}
        ref={ref}
      >
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            my: 8,
          }}
        >
          {/* Text Section */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                color: textColor,
              }}
            >
              Brandon
              <br />
              Rivera-Melo
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.25rem",
                mt: 2,
                color: textColor,
                maxWidth: "600px",
              }}
            >
              Crafting a healthier world with
              <br />
              <i>tech and play</i>
            </Typography>
          </Box>

          {/* Image Section */}
          <Box
            sx={{
              perspective: "1000px",
              display: "block",
              position: "relative",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Box
              sx={{
                width: "400px",
                height: "600px",
                position: "relative",
                transformStyle: "preserve-3d",
                transition: instantFlip
                  ? "none"
                  : `transform ${transitionDurationMs}ms ease`,
                transform: `rotateY(${targetRotationDeg}deg)`,
                pointerEvents: "none",
              }}
              ref={containerRef}
            >
              {/* Flare Effect Canvas Overlay */}
              <canvas
                ref={canvasRef}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                  backfaceVisibility: "hidden",
                }}
              ></canvas>

              {/* Front Side */}
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                }}
              >
                <Avatar
                  src={brandon}
                  alt="Picture of Brandon"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    border: "8px solid",
                    borderColor: cp("background.paper"),
                  }}
                  className="pop-shadow"
                />
              </Box>

              {/* Back Side */}
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundColor: cp("background.paper"),
                  borderRadius: "20px",
                  border: "8px solid",
                  borderColor: cp("background.paper"),
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                className="pop-shadow"
                padding={2}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkBreaks]}
                  components={{
                    p: ({ children }) => (
                      <Typography
                        variant="body1"
                        fontSize="1.15rem"
                        sx={{
                          color: cp("text.paper"),
                          marginBottom: "1.25rem",
                        }}
                      >
                        {children}
                      </Typography>
                    ),
                    br: () => (
                      <span
                        style={{
                          display: "block",
                          height: "0.01rem",
                        }}
                      />
                    ),
                  }}
                >
                  {`**Professional Mission**
Restore 1,000,000 quality-adjusted life years (QALYs) for those with disease and disability through use digital solutions like video games, apps, web services, and biometric sensors.

**My Why**
As a Type 1 Diabetic, I rely on smart glucose management technology to stay healthy. This inspires me to create similar systems that restore balance and empower others to thrive.

**Curious?**
Peruse the portfolio and see how we might build a healthier world at scale. 
`}
                </ReactMarkdown>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  },
);
