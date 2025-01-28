import { Box, Container, Grid, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import remarkBreaks from "remark-breaks";
import ReactMarkdown from "react-markdown";
import { featuredEmployerData } from "../../data/employerData";
import { useHoverTracking } from "../../tracking/useHoverTracking.ts";

interface EmployersProps {
  backgroundColor: string;
  textColor: string;
  id: string;
  useDarkImages: boolean;
}

export const Employers = forwardRef<HTMLElement, EmployersProps>(
  ({ backgroundColor, textColor, useDarkImages, id }, ref) => {
    const sectionHover = useHoverTracking();
    const employerHover = useHoverTracking();

    return (
      <Box
        component="section"
        id={id}
        onMouseEnter={sectionHover.trackMouseEnter}
        onMouseLeave={sectionHover.trackMouseLeave}
        sx={{
          py: 5,
          backgroundColor: backgroundColor,
          color: textColor,
          pb: 15,
          "&:hover .text": {
            opacity: 1,
          },
        }}
        ref={ref}
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
            spacing={12}
            justifyContent="center"
            alignItems="center"
            pt={10}
          >
            {featuredEmployerData.map((company, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  id={`company_${company.name}`}
                  onMouseEnter={employerHover.trackMouseEnter}
                  onMouseLeave={employerHover.trackMouseLeave}
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column", // Stack image and text vertically
                    alignItems: "center",
                    width: "100%",
                    height: "150px", // Ensure consistent height
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
                    id={`company_white_${company.name}`}
                    src={company.whiteSrc}
                    alt={company.name}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      transition: "opacity 1s ease",
                      opacity: 1,
                      filter: useDarkImages
                        ? "grayscale(1) invert(1)"
                        : "grayscale(1)",
                    }}
                  />

                  <img
                    className="colored"
                    id={`company_color_${company.name}`}
                    src={company.colorSrc}
                    alt={`${company.name} colored`}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      transition: "opacity 1s ease",
                      opacity: 0,
                    }}
                  />

                  {/* Add Text Below Image */}
                  <Box
                    className="text"
                    id={`company_text_${company.name}`}
                    sx={{
                      opacity: 0, // Default hidden
                      transition: "opacity 0.5s ease",
                      mt: 20,
                      textAlign: "center",
                    }}
                  >
                    <ReactMarkdown
                      remarkPlugins={[remarkBreaks]} // Enable soft line breaks
                      components={{
                        p: ({ children }) => (
                          <Typography
                            variant="body1"
                            fontSize="1rem"
                            sx={{
                              marginBottom: "1.25rem", // Add spacing after a paragraph
                              textAlign: "center",
                              color: textColor,
                            }}
                          >
                            {children}
                          </Typography>
                        ),
                      }}
                    >
                      {company.text}
                    </ReactMarkdown>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  },
);
