import React from "react";
import {Container, Typography, Box, Avatar, Grid} from "@mui/material";

export function Hero() {
    const companies = [
        { whiteSrc: "/src/assets/orgs/uhealth-w.png", colorSrc: "/src/assets/orgs/uhealth.png", alt: "UHealth" },
        { whiteSrc: "/src/assets/orgs/gapplab-w.png", colorSrc: "/src/assets/orgs/gapplab.png", alt: "The GApp Lab" },
        { whiteSrc: "/src/assets/orgs/aol-w.png", colorSrc: "/src/assets/orgs/aol.png", alt: "Age of Learning" },
        { whiteSrc: "/src/assets/orgs/dfa-w.png", colorSrc: "/src/assets/orgs/dfa.png", alt: "Design for America" },
    ];
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
          maxWidth="md"
          sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
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
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            display: "block",
          }}
        >
          <Avatar
            src="/src/assets/people/brandon.jpg"
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

        {/* Worked With Section */}
        <Container
            sx={{
                mt: 6,
                textAlign: "left",
            }}
            maxWidth="lg"
        >
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    color: "text.primary",
                    mb: 4,
                }}
            >
                Worked with:
            </Typography>

            <Grid container spacing={6} justifyContent="center" alignItems="center">
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
                                    filter: 'grayscale(1)',
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
