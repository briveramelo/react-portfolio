import React, { forwardRef } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { TestimonialCard } from "./Testimonials/TestimonialCard.tsx";
import { OpenInNew } from "@mui/icons-material";
import { useHoverTracking } from "../../utils/tracking/hooks/useHoverTracking.ts";
import { useIntersectionObserver } from "../../utils/hooks/useIntersectionObserver.ts";
import { testimonialsData } from "../../data/testimonialData.ts";
import { useCustomPalette } from "../../theme/theme.ts";

interface TestimonialsSectionProps {
  backgroundColor: string;
  id: string;
  textColor: string;
}

export const TestimonialsSection = forwardRef<
  HTMLElement,
  TestimonialsSectionProps
>(({ backgroundColor, textColor, id }, ref) => {
  const { trackPointerEnter, trackPointerLeave } = useHoverTracking();
  const isSectionVisible = useIntersectionObserver(
    ref as React.RefObject<HTMLElement>,
    { threshold: 0.1 },
  );
  const { background, text } = useCustomPalette();

  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: 10,
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      ref={ref}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h1"
            gutterBottom
            sx={{ fontWeight: "bold", color: textColor }}
          >
            <a
              href="https://www.linkedin.com/in/briveramelo/details/recommendations/?detailScreenTabIndex=0"
              target="_blank"
              rel="noopener noreferrer"
              id="testimonials_header"
              onPointerEnter={trackPointerEnter}
              onPointerLeave={trackPointerLeave}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Testimonials
              <OpenInNew sx={{ fontSize: "1.5rem", verticalAlign: "top" }} />
            </a>
          </Typography>
          <Typography variant="body1" sx={{ color: textColor }}>
            I care about the quality of my work and the teams I support, but you
            should hear it from them.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonialsData.map((testimonial) => (
            <Grid
              item
              xs={12}
              md={testimonial.size === "full" ? 12 : 6}
              key={testimonial.name}
            >
              <TestimonialCard
                data={testimonial}
                backgroundColor={background.paper}
                textColor={text.paper}
                isSectionVisible={isSectionVisible}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
});
