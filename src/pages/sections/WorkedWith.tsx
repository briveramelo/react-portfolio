import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export function WorkedWith({ backgroundColor, textColor, useDarkImages }) {
  const companies = [
    {
      whiteSrc: "/src/assets/orgs/uhealth-w.png",
      colorSrc: "/src/assets/orgs/uhealth.png",
      alt: "UHealth",
    },
    {
      whiteSrc: "/src/assets/orgs/gapplab-w.png",
      colorSrc: "/src/assets/orgs/gapplab.png",
      alt: "The GApp Lab",
    },
    {
      whiteSrc: "/src/assets/orgs/aol-w.png",
      colorSrc: "/src/assets/orgs/aol.png",
      alt: "Age of Learning",
    },
    {
      whiteSrc: "/src/assets/orgs/dfa-w.png",
      colorSrc: "/src/assets/orgs/dfa.png",
      alt: "Design for America",
    },
  ];
  return (
    <Box
      component="section"
      id="employers"
      sx={{
        py: 5,
        backgroundColor: backgroundColor,
        color: textColor,
        pb: 15,
      }}
    >
      <Container
        sx={{
          mt: 4,
          textAlign: "left",
        }}
        maxWidth="lg"
      >
        <Typography
          variant="h1"
          sx={{
            color: textColor,
            mt: 4,
          }}
        >
          Employers
        </Typography>

        <Grid
          container
          spacing={6}
          justifyContent="center"
          alignItems="center"
          pt={10}
        >
          {companies.map((company, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "150px", // Ensure consistent height
                  // overflow: "hidden", // Hide excess content
                  "&:hover .colored": {
                    opacity: "1 !important",
                  },
                  "&:hover .white": {
                    opacity: "0 !important",
                  },
                }}
              >
                {/* White Content Version */}
                <img
                  className="white"
                  src={company.whiteSrc}
                  alt={company.alt}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    transition: "opacity 1s ease",
                    opacity: 1, // default visible
                    filter: useDarkImages
                      ? "grayscale(1) invert(1)"
                      : "grayscale(1)",
                  }}
                />

                <img
                  className="colored"
                  src={company.colorSrc}
                  alt={`${company.alt} colored`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    transition: "opacity 1s ease",
                    opacity: 0, // default hidden
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
