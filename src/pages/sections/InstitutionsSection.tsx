import { Box } from "@mui/material";
import React, { forwardRef } from "react";
import {
  featuredEmployerData,
  schoolData,
} from "../../data/institutionData.ts";
import { useHoverTracking } from "../../utils/tracking/hooks/useHoverTracking.ts";
import InstitutionCollection from "./Institutions/InstitutionCollection.tsx";

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
        }}
        ref={ref}
      >
        <InstitutionCollection
          title={"Industry"}
          textColor={textColor}
          invertImage={invertImages}
          data={featuredEmployerData}
        />
        <Box height={20} />
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
