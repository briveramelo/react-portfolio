import React from "react";
import { Container, Typography, Box, Avatar } from "@mui/material";
import brandon from "@/assets/people/brandon.jpg";

export function Hero({ backgroundColor, textColor }) {
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
          top: "-80px", // force moving up to the top
          height: 0,
        }}
      ></Box>

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
            perspective: "1000px", // Enable 3D perspective
            display: "block",
          }}
        >
          <Box
            sx={{
              width: "400px",
              height: "600px",
              position: "relative",
              transformStyle: "preserve-3d",
              transition: "transform 0.6s",
              "&:hover": {
                transform: "rotateY(180deg)",
              },
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
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
