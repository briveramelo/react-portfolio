import React from "react";
import { Container, Typography, Button, Box, Avatar } from "@mui/material";

export function Hero() {
  return (
    <Box
      component="section"
      id="brandon"
      sx={{
        backgroundColor: "background.dark",
        color: "text.secondary",
        py: 10,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: 4,
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
              color: "text.primary",
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
              color: "text.primary",
              maxWidth: "600px",
            }}
          >
            Healing through playful design
            <br />
            <i>and science</i>
          </Typography>

          <Button
            variant="contained"
            color="primary"
            href="#contact"
            sx={{
              mt: 3,
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "999px",
              boxShadow: 3,
            }}
          >
            Let’s get started
          </Button>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            mt: { xs: 4, md: 0 },
            ml: { md: 4 },
          }}
        >
          <Avatar
            src="/src/assets/people/brandon.jpg"
            alt="Picture of Brandon"
            sx={{
              width: 400,
              height: 600,
              border: "4px solid",
              borderColor: "background.paper",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
