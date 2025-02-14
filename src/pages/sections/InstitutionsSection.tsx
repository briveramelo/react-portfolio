import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import {
  featuredEmployerData,
  schoolData,
} from "../../data/institutionData.ts";
import { useHoverTracking } from "../../utils/tracking/hooks/useHoverTracking.ts";
import InstitutionCollection from "./Institutions/InstitutionCollection.tsx";
import { OpenInNew } from "@mui/icons-material";

interface InstitutionsProps {
  backgroundColor: string;
  textColor: string;
  id: string;
  invertImages: boolean;
}

export const InstitutionsSection = forwardRef<HTMLElement, InstitutionsProps>(
  ({ backgroundColor, textColor, invertImages, id }, ref) => {
    const { trackPointerLeave, trackPointerEnter } = useHoverTracking();

    return (
      <Box
        component="section"
        id={id}
        onPointerEnter={trackPointerEnter}
        onPointerLeave={trackPointerLeave}
        sx={{
          pt: 5,
          backgroundColor: backgroundColor,
          color: textColor,
          pb: 5,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "space-between",
        }}
        ref={ref}
      >
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h1"
            gutterBottom
            sx={{ fontWeight: "bold", color: textColor }}
          >
            Institutions
          </Typography>
        </Box>
        <InstitutionCollection
          title={"Industry"}
          textColor={textColor}
          invertImage={invertImages}
          data={featuredEmployerData}
        />
        <Box height={60} sx={{ flexShrink: 1 }} />
        <InstitutionCollection
          title={"Academia"}
          textColor={textColor}
          invertImage={!invertImages}
          data={schoolData}
        />
      </Box>
    );
  },
);
