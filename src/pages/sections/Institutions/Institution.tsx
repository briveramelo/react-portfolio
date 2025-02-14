import { Box, Typography } from "@mui/material";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { InstitutionData } from "../../../data/institutionData.ts";
import { useHoverTracking } from "../../../utils/tracking/hooks/useHoverTracking.ts";

interface InstitutionProps {
  institution: InstitutionData;
  textColor: string;
  invertImage: boolean;
}

const Institution: React.FC<InstitutionProps> = ({
  institution,
  textColor,
  invertImage,
}) => {
  const { trackPointerEnter, trackPointerLeave } = useHoverTracking();

  return (
    <Box
      id={`company_${institution.name}`}
      onPointerEnter={trackPointerEnter}
      onPointerLeave={trackPointerLeave}
      sx={{
        position: "relative",
        flexDirection: "column",
        display: "grid",
        gridTemplateRows: "150px auto",
        width: "100%",
      }}
    >
      {/* Image Container */}
      <Box sx={{ position: "relative", height: "150px" }}>
        <img
          className="white"
          src={institution.whiteSrc}
          alt={institution.name}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transition: "opacity 1s ease",
            opacity: 1,
            filter: invertImage ? "grayscale(1) invert(1)" : "grayscale(1)",
          }}
        />
        <img
          className="colored"
          src={institution.colorSrc}
          alt={`${institution.name} colored`}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transition: "opacity 1s ease",
            opacity: 0,
          }}
        />
      </Box>

      {/* Add Text Below Image */}
      <Box
        className="text"
        id={`company_text_${institution.name}`}
        sx={{
          opacity: 0, // Default hidden
          transition: "opacity 0.5s ease",
          mt: 0,
          textAlign: "center",
        }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkBreaks]}
          components={{
            p: ({ children }) => (
              <Typography
                variant="body1"
                fontSize="1rem"
                sx={{
                  marginBottom: "1.25rem",
                  textAlign: "center",
                  color: textColor,
                  whiteSpace: "nowrap",
                }}
              >
                {children}
              </Typography>
            ),
          }}
        >
          {institution.text}
        </ReactMarkdown>
      </Box>
    </Box>
  );
};

export default Institution;
