import React, { useCallback } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import FirebaseDownloadLink from "../../components/FirebaseDownloadLink.tsx";
import { useAuth } from "../../../context/AuthContext.tsx";
import { useCustomPalette } from "../../../theme/theme.ts";

const HeroCardBack: React.FC = () => {
  const { user } = useAuth();
  const { background, text } = useCustomPalette();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const philosophyFontSize = isXs ? ".95rem" : "1.1rem";
  const fontSize = isXs ? "1.05rem" : "1.15rem";

  const createMarkdownComponents = useCallback(
    (fontSize: string, strongFontSize: string) => ({
      p: ({ children }: { children?: React.ReactNode }) => (
        <Box
          component="p"
          sx={{
            fontSize,
            color: text.paper,
            mt: -1,
          }}
        >
          {children}
        </Box>
      ),
      strong: ({ children }: { children?: React.ReactNode }) => (
        <strong style={{ fontSize: strongFontSize }}>{children}</strong>
      ),
      br: () => <span style={{ display: "block", height: "0rem" }} />,
    }),
    [text.paper],
  );

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
        px: 2,
        py: 2,
      }}
      className="pop-shadow"
    >
      <ReactMarkdown
        remarkPlugins={[remarkBreaks]}
        components={createMarkdownComponents(fontSize, fontSize)}
      >
        {`**Professional Mission**
Restore 1,000,000 quality-adjusted life years (QALYs) for people using digital solutions like video games, apps, web services, and biometric sensors.

**My Why**
As a Type 1 Diabetic, I rely on smart glucose management technology to stay healthy. This inspires me to create similar systems that restore balance and empower others to thrive.

**Curious?**
Peruse the portfolio and see how we might build a healthier world. 
`}
      </ReactMarkdown>
      {user && (
        <Box mb={2}>
          <FirebaseDownloadLink
            downloadFilename={"Brandon Rivera-Melo Resume 2025.01.pdf"}
            height={20}
            linkSx={{ fontSize: "1.15rem", fontWeight: "bold" }}
            firebasePath="resumes/brm-resume-2025.01-portfolio-utm.pdf"
            linkText="Resumé"
          />
        </Box>
      )}
      <ReactMarkdown
        remarkPlugins={[remarkBreaks]}
        components={createMarkdownComponents(philosophyFontSize, fontSize)}
      >
        {`**Philosophy**
We are all interconnected in the web of cause and effect; every thought, word, and action stems from our genes and environment. This recognition calls me to create compassionate environments that nurture human flourishing at every scale - from conversations to global apps.`}
      </ReactMarkdown>
    </Box>
  );
};

export default HeroCardBack;
