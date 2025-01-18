import React, { useState, MouseEvent } from "react";
import { Container, Typography, Box, Avatar } from "@mui/material";
import brandon from "@/assets/people/brandon.webp";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

// Define the props for the Hero component
interface HeroProps {
  backgroundColor: string;
  textColor: string;
}

export const Hero: React.FC<HeroProps> = ({ backgroundColor, textColor }) => {
  const [targetRotationDeg, setTargetRotationDeg] = useState<number>(0);
  const [instantFlip, setInstantFlip] = useState<boolean>(false);

  // Determine if the mouse is on the right half of the card
  const isRight = (event: MouseEvent<HTMLDivElement>): boolean => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    return event.clientX - left > width / 2;
  };

  // Mouse enters: spin left (-180) or spin right (180)
  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>): void => {
    setTargetRotationDeg(isRight(event) ? -180 : 180);
  };

  // Mouse leaves: either rotate back to 0 with or without an instant flip
  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>): void => {
    const leavingRight = isRight(event);
    // If we're at 180 but leaving from the right, or at -180 but leaving from the left
    const shouldInstantFlip =
      (targetRotationDeg === 180 && leavingRight) ||
      (targetRotationDeg === -180 && !leavingRight);

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
  };

  return (
    <Box
      component="section"
      id="brandon"
      sx={{
        py: 10,
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      {/* Invisible Link Target */}
      <Box
        id="home"
        sx={{
          position: "absolute",
          top: "-80px", // force snapping the scroll bar to the top on linking to this section
          height: 0,
        }}
      />

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
              transition: instantFlip ? "none" : "transform 0.5s ease",
              transform: `rotateY(${targetRotationDeg}deg)`,
              pointerEvents: "none",
            }}
          >
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
                  borderColor: "background.paper",
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
                backgroundColor: "background.paper",
                borderRadius: "20px",
                border: "8px solid",
                borderColor: "background.paper",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
              className="pop-shadow"
              padding={2}
            >
              <ReactMarkdown
                remarkPlugins={[remarkBreaks]}
                components={{
                  p: () => (
                    <Typography
                      variant="body1"
                      fontSize="1.15rem"
                      sx={{
                        color: "text.paper",
                        marginBottom: "1.25rem",
                      }}
                    />
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
Check out my portfolio and see how we can build a healthier world together. 
`}
              </ReactMarkdown>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
