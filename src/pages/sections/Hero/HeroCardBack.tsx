import React from "react";
import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { cp } from "../../../utils/utils";

const HeroCardBack: React.FC = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: cp("background.paper"),
        borderRadius: "20px",
        border: "8px solid",
        borderColor: cp("background.paper"),
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
                color: cp("text.paper"),
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
Restore 1,000,000 quality-adjusted life years (QALYs) for those with disease and disability with digital solutions like video games, apps, web services, and biometric sensors.

**My Why**
As a Type 1 Diabetic, I rely on smart glucose management technology to stay healthy. This inspires me to create similar systems that restore balance and empower others to thrive.

**Curious?**
Peruse the portfolio and see how we might build a healthier world at scale. 
`}
      </ReactMarkdown>
    </Box>
  );
};

export default HeroCardBack;
