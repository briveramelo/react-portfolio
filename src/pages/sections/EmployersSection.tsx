import { Box, Container, Grid, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import { featuredEmployerData } from "../../data/employerData";
import { useHoverTracking } from "../../utils/tracking/hooks/useHoverTracking.ts";
import Employer from "./Employers/Employer.tsx";

interface EmployersProps {
  backgroundColor: string;
  textColor: string;
  id: string;
  useDarkImages: boolean;
}

export const EmployersSection = forwardRef<HTMLElement, EmployersProps>(
  ({ backgroundColor, textColor, useDarkImages, id }, ref) => {
    const sectionHover = useHoverTracking();

    return (
      <Box
        component="section"
        id={id}
        onPointerEnter={sectionHover.trackPointerEnter}
        onPointerLeave={sectionHover.trackPointerLeave}
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
                <Employer
                  company={company}
                  textColor={textColor}
                  useDarkImages={useDarkImages}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  },
);
