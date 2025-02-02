import React, {
  useState,
  useRef,
  MouseEvent,
  forwardRef,
  useEffect,
} from "react";
import { Container, Typography, Box, Avatar } from "@mui/material";
import brandon from "@/assets/people/brandon.webp";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { cp } from "../../utils/utils";
import { generateSinusoidalScaleKeyframes } from "../../utils/keyframeGenerator.ts";
import { useFlareEffect } from "../components/specialty/useFlareEffect.ts";
import { useHoverTracking } from "../../tracking/useHoverTracking";
import { useIntersectionObserver } from "../../utils/useIntersectionObserver.ts";
import { keyframes } from "@emotion/react";
import { Refresh } from "@mui/icons-material";
import ScrollDownIndicator from "../components/reusable/ScrollDownIndicator.tsx";
import { useAnimatedText } from "../../utils/useAnimatedText.ts";
import SparkFuseOutline from "../components/specialty/SparkFuseOutline.tsx";

interface HeroProps {
  backgroundColor: string;
  textColor: string;
  id: string;
}
const pulseAnimation = generateSinusoidalScaleKeyframes(1, 0.3, 20, 3);
const FIRST_ANIMATION_START_DELAY_MS = 1500;
const ANIMATION_START_DELAY_MS = 750;
const FIRST_ANIMATED_TRANSITION_DURATION_MS = 4000;
const ANIMATED_TRANSITION_DURATION_MS = 3000; // used when the script controls the animation
const USER_TRANSITION_DURATION_MS = 500; // used when the user controls it on hover

export const Hero = forwardRef<HTMLElement, HeroProps>(
  ({ backgroundColor, textColor, id }, ref) => {
    const [targetRotationDeg, setTargetRotationDeg] = useState<number>(0);
    const [instantFlip, setInstantFlip] = useState<boolean>(false);
    const [transitionDurationMs, setTransitionDurationMs] = useState<number>(
      FIRST_ANIMATED_TRANSITION_DURATION_MS,
    );
    const [isFirstAnimation, setIsFirstAnimation] = useState<boolean>(true);
    const [isAnimating, setIsAnimating] = useState<boolean>(true);
    const [hasHoveredCard, setHasHoveredCard] = useState<boolean>(false);
    const { trackMouseEnter, trackMouseLeave } = useHoverTracking();
    const isSectionVisible = useIntersectionObserver(
      ref as React.RefObject<HTMLElement>,
      { threshold: 0.1 },
    );
    const startTimeRefMs = useRef<number | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useFlareEffect({
      canvasRef,
      containerRef,
      xOffset: -40,
      yAmpFactor: 0.65,
      phaseOffset: Math.PI * 0.275,
      durationMs: 15000,
    });

    const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

    // Helper function that sequences the spin steps.
    // Each step specifies a delay (relative to the previous step) and an action.
    const runSpinSequence = (): ReturnType<typeof setTimeout>[] => {
      const timers: ReturnType<typeof setTimeout>[] = [];
      let accumulatedDelay = 0;
      const sequence = [
        {
          // Do a flip
          delay: isFirstAnimation
            ? FIRST_ANIMATION_START_DELAY_MS
            : ANIMATION_START_DELAY_MS,
          action: () => {
            setTransitionDurationMs(
              isFirstAnimation
                ? FIRST_ANIMATED_TRANSITION_DURATION_MS
                : ANIMATED_TRANSITION_DURATION_MS,
            );
            setTargetRotationDeg(360);
          },
        },
        {
          // Secretly reset rotation back to 0
          delay: isFirstAnimation
            ? FIRST_ANIMATED_TRANSITION_DURATION_MS
            : ANIMATED_TRANSITION_DURATION_MS,
          action: () => {
            setInstantFlip(true);
            setTargetRotationDeg(0);
            setTransitionDurationMs(USER_TRANSITION_DURATION_MS);
            requestAnimationFrame(() => {
              setInstantFlip(false);
              setIsAnimating(false);
              setIsFirstAnimation(false);
            });
          },
        },
      ];

      sequence.forEach((step) => {
        accumulatedDelay += step.delay;
        timers.push(setTimeout(step.action, accumulatedDelay));
      });

      return timers;
    };

    // Runs the interaction-encouragement-animation with cleanup
    useEffect(() => {
      if (isSectionVisible) {
        // Reset to the front
        setIsAnimating(true);
        setInstantFlip(true);
        setTargetRotationDeg(0);
        requestAnimationFrame(() => setInstantFlip(false));

        // Clear any existing timers before starting a new sequence.
        timersRef.current.forEach((timer) => clearTimeout(timer));
        timersRef.current = runSpinSequence();
      } else {
        // When leaving the section, clear any pending timers and reset animation state.
        timersRef.current.forEach((timer) => clearTimeout(timer));
        timersRef.current = [];
        setIsAnimating(false);
        setInstantFlip(true);
        setTargetRotationDeg(0);
        requestAnimationFrame(() => setInstantFlip(false));
      }

      // Cleanup if the component unmounts or dependencies change.
      return () => {
        timersRef.current.forEach((timer) => clearTimeout(timer));
        timersRef.current = [];
      };
    }, [isSectionVisible]);

    // Track if the animation has completed x (eg: 0.2 => 20%) of the total
    const hasTransitionElapsedProportion = (proportion: number): boolean => {
      if (!startTimeRefMs.current) return false;
      const elapsedTimeMs = performance.now() - startTimeRefMs.current;
      return elapsedTimeMs >= transitionDurationMs * proportion;
    };

    // Determine if the mouse is on the right half of the card
    const isRight = (event: MouseEvent<HTMLDivElement>): boolean => {
      const { left, width } = event.currentTarget.getBoundingClientRect();
      return event.clientX - left > width / 2;
    };

    const entrySideRef = useRef<"left" | "right" | null>(null);
    const handleMouseEnter = (event: MouseEvent<HTMLDivElement>): void => {
      if (isAnimating) return;

      const entrySide = isRight(event) ? "right" : "left";
      entrySideRef.current = entrySide;

      // Set an initial rotation: 180° if entering from left,
      // -180° if entering from right.
      setTargetRotationDeg(
        (prev) => prev + (entrySide === "right" ? -180 : 180),
      );
      startTimeRefMs.current = performance.now();
      trackMouseEnter();
    };

    const handleMouseLeave = (event: MouseEvent<HTMLDivElement>): void => {
      if (isAnimating || !entrySideRef.current) return;

      if (hasTransitionElapsedProportion(1)) {
        setHasHoveredCard(true);
      }
      const exitSide = isRight(event) ? "right" : "left";
      const initialEffect = entrySideRef.current === "right" ? -180 : 180;
      const additional =
        exitSide === entrySideRef.current ? -initialEffect : initialEffect;
      setTargetRotationDeg((prev) => prev + additional);

      startTimeRefMs.current = null;
      entrySideRef.current = null;
      trackMouseLeave(event);
    };

    const spinAnimation = keyframes`
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    `;

    const rolesText = "Test";
    //     const rolesText = useAnimatedText({
    //       texts: [
    //         `Health Tech Innovator
    // Lead Software Engineer
    // Game Developer
    // Project Manager
    // Team Player`,
    //       ],
    //       msPerCharAdd: 60,
    //       msPerCharDelete: 30,
    //       startingPauseMs: isFirstAnimation
    //         ? FIRST_ANIMATION_START_DELAY_MS +
    //           FIRST_ANIMATED_TRANSITION_DURATION_MS / 2
    //         : ANIMATION_START_DELAY_MS + ANIMATED_TRANSITION_DURATION_MS / 2,
    //       endingPauseMs: 1000,
    //       loopAnimation: false,
    //       variationFactor: 0.4,
    //       triggerRestart: isSectionVisible,
    //     });

    return (
      <Box
        component="section"
        id={id}
        sx={{
          mt: { xs: -7, sm: 0 },
          py: { xs: 0, sm: 9 },
          backgroundColor: backgroundColor,
          color: textColor,
          scrollMarginTop: "80px",
          minHeight: "100vh",
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

            <Box
              sx={{
                mt: 2,
                minHeight: "8.25rem",
                lineHeight: "8.25rem",
              }}
            >
              <ReactMarkdown
                remarkPlugins={[remarkBreaks]}
                components={{
                  p: ({ children }) => (
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "1.25rem",
                        color: textColor,
                        maxWidth: "600px",
                        minHeight: "1.25rem",
                        lineHeight: "1.65rem",
                      }}
                    >
                      {children}
                    </Typography>
                  ),
                }}
              >
                {rolesText}
              </ReactMarkdown>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.25rem",
                mt: 6,
                color: textColor,
                maxWidth: "600px",
              }}
            >
              Building a healthier world with
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
            id="home_avatar_card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Box
              sx={{
                width: { sm: "400px", xs: "375px" },
                height: { sm: "600px", xs: "562.5px" },
                position: "relative",
                transformStyle: "preserve-3d",
                transition: instantFlip
                  ? "none"
                  : `transform ${transitionDurationMs}ms ease`,
                transform: `rotateY(${targetRotationDeg}deg)`,
                pointerEvents: "none",
                willChange: isSectionVisible ? "transform" : "", //conditional on visibility works well: the first animation is delayed, it's not always needed
              }}
              ref={containerRef}
            >
              <SparkFuseOutline
                borderRadius={8}
                fuseHeadLoopDurationMs={2000}
                sparkBurstCount={20}
                sparkBurstDurationMs={2500}
                width={{ sm: "400px", xs: "375px" }}
                height={{ sm: "600px", xs: "562.5px" }}
              />
              {/* Flare Effect Canvas Overlay */}
              <canvas
                ref={canvasRef}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 2,
                  backfaceVisibility: "hidden",
                }}
              />

              {/* Front Side */}
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Rotation Icon */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    borderRadius: "50%",
                    zIndex: 1,
                    color: hasHoveredCard
                      ? "rgba(255, 255, 255, .8)"
                      : "orange",
                    animation: hasHoveredCard
                      ? ""
                      : `${pulseAnimation} 2s infinite`,
                  }}
                >
                  <Refresh
                    sx={{
                      fontSize: 30,
                      animation: hasHoveredCard
                        ? ""
                        : `${spinAnimation} 2s linear infinite`,
                    }}
                  />
                </Box>

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
  Restore 1,000,000 quality-adjusted life years (QALYs) for those with disease and disability with digital solutions like video games, apps, web services, and biometric sensors.
  
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
        {hasHoveredCard && <ScrollDownIndicator color={"orange"} size={40} />}
      </Box>
    );
  },
);
