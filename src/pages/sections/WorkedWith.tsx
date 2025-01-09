import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import uhealthW from "@/assets/orgs/uhealth-w.png";
import uhealth from "@/assets/orgs/uhealth.png";
import gapplabW from "@/assets/orgs/gapplab-w.png";
import gapplab from "@/assets/orgs/gapplab.png";
import aolW from "@/assets/orgs/aol-w.png";
import aol from "@/assets/orgs/aol.png";
import dfaW from "@/assets/orgs/dfa-w.png";
import dfa from "@/assets/orgs/dfa.png";

export function WorkedWith({ backgroundColor, textColor, useDarkImages }) {
  const companies = [
    {
      whiteSrc: uhealthW,
      colorSrc: uhealth,
      alt: "UHealth",
    },
    {
      whiteSrc: gapplabW,
      colorSrc: gapplab,
      alt: "The GApp Lab",
    },
    {
      whiteSrc: aolW,
      colorSrc: aol,
      alt: "Age of Learning",
    },
    {
      whiteSrc: dfaW,
      colorSrc: dfa,
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
