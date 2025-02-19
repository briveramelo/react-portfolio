import React from "react";
import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import FirebaseDownloadLink from "../../components/FirebaseDownloadLink.tsx";
import { useAuth } from "../../../context/AuthContext.tsx";
import { useCustomPalette } from "../../../theme/theme.ts";

const HeroCardBack: React.FC = () => {
  const { user } = useAuth();
  const { background, text } = useCustomPalette();

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: background.paper,
        borderRadius: "20px",
        border: "8px solid",
        borderColor: background.paper,
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
      className="pop-shadow"
      padding={2}
    >
      <ReactMarkdown
        remarkPlugins={[remarkBreaks]}
        components={{
          p: ({ children }) => (
            <Box
              component="p"
              sx={{
                fontSize: "1.15rem",
                color: text.paper,
                marginBottom: "1.25rem",
              }}
            >
              {children}
            </Box>
          ),
          br: () => <span style={{ display: "block", height: "0.01rem" }} />,
        }}
      >
        {`**Professional Mission**
Restore 1,000,000 quality-adjusted life years (QALYs) for people using digital solutions like video games, apps, web services, and biometric sensors.

**My Why**
As a Type 1 Diabetic, I rely on smart glucose management technology to stay healthy. This inspires me to create similar systems that restore balance and empower others to thrive.

**Curious?**
Peruse the portfolio and see how we might build a healthier world at scale. 
`}
      </ReactMarkdown>
      {user && (
        <Box mt={4}>
          <FirebaseDownloadLink
            downloadFilename={"Brandon Rivera-Melo Resume 2025.01.pdf"}
            height={20}
            linkSx={{ fontSize: "1.15rem", fontWeight: "bold" }}
            firebasePath="resumes/brm-resume-2025.01-portfolio-utm.pdf"
            linkText="Resumé"
          />
        </Box>
      )}
    </Box>
  );
};

export default HeroCardBack;
