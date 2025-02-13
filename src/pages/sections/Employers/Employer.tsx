import { Box, Typography } from "@mui/material";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { EmployerData } from "../../../data/employerData";
import { useHoverTracking } from "../../../utils/tracking/hooks/useHoverTracking.ts";

interface EmployerProps {
  company: EmployerData;
  textColor: string;
  useDarkImages: boolean;
}

const Employer: React.FC<EmployerProps> = ({
  company,
  textColor,
  useDarkImages,
}) => {
  const { trackPointerEnter, trackPointerLeave } = useHoverTracking();

  return (
    <Box
      id={`company_${company.name}`}
      onPointerEnter={trackPointerEnter}
      onPointerLeave={trackPointerLeave}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
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
          filter: useDarkImages ? "grayscale(1) invert(1)" : "grayscale(1)",
        }}
      />

      {/* Colored Content Version */}
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
  );
};

export default Employer;
