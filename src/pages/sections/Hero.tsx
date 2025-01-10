import React from "react";
import { Container, Typography, Box, Avatar, Grid } from "@mui/material";
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
                top: "-80px", // Adjust this based on your header height
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
            Healing through playful design
            <br />
            <i>and science</i>
          </Typography>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            display: "block",
          }}
        >
          <Avatar
            src={brandon}
            alt="Picture of Brandon"
            sx={{
              width: 400,
              height: 600,
              borderRadius: "20px",
              border: "8px solid",
              borderColor: "background.paper",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
