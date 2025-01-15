import React, { useState } from "react";
import { Container, Typography, Box, Avatar } from "@mui/material";
import brandon from "@/assets/people/brandon.jpg";

export function Hero({ backgroundColor, textColor }) {
  const [hovered, setHovered] = useState(false);
  const [spinDirection, setSpinDirection] = useState("normal"); // "normal" or "reverse"
  const [instantFlip, setInstantFlip] = useState(false); // If true, disable transition

  // Determine if mouse is on the right half or left half of the card
  const isRight = (event) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    return event.clientX - left > width / 2;
  };

  // When mouse enters, decide if we rotate forward ("normal") or backward ("reverse")
  const handleMouseEnter = (event) => {
    setSpinDirection(isRight(event) ? "reverse" : "normal");
    setHovered(true);
  };

  // When mouse leaves, decide if we should “instantly flip back” or allow a smooth transition
  const handleMouseLeave = (event) => {
    const onRight = isRight(event);
    const shouldFlipInstantly =
      (onRight && spinDirection === "normal") ||
      (!onRight && spinDirection === "reverse");

    setInstantFlip(shouldFlipInstantly);
    setHovered(false);
  };

  // Reset the instant flip once a transition ends (so the next flip can be animated)
  const handleTransitionEnd = () => {
    setInstantFlip(false);
  };

  // A small helper that calculates the final rotation in degrees
  const getRotation = () => {
    // If we need to instantly flip, snap to –180 or +180
    if (instantFlip) {
      return spinDirection === "normal" ? -180 : 180;
    }
    // When hovered, rotate to -180 or +180; otherwise, keep it at 0
    return hovered ? (spinDirection === "reverse" ? -180 : 180) : 0;
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
          top: "-80px",
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
              transform: `rotateY(${getRotation()}deg)`,
            }}
            onTransitionEnd={handleTransitionEnd}
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="pop-shadow"
            >
              <Typography
                variant="body1"
                sx={{ color: textColor, fontWeight: "bold" }}
              >
                Hello, world!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
