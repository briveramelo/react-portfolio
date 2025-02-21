import React from "react";
import { Typography } from "@mui/material";

interface TimestampLinkProps {
  href: string;
  children: React.ReactNode;
  onTimestampClick: (timeSec: number) => void;
}

const TimestampLink: React.FC<TimestampLinkProps> = ({
  href,
  children,
  onTimestampClick,
}) => {
  // Remove the '#' and split by colon
  const timeString = href.startsWith("#") ? href.slice(1) : href;
  const parts = timeString.split(":");
  // Convert mm:ss to total seconds (you could extend this to support hh:mm:ss if needed)
  const seconds =
    parts.length === 2
      ? parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10)
      : parseInt(timeString, 10);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!isNaN(seconds)) {
      onTimestampClick(seconds);
    }
  };

  return (
    <Typography
      component="a"
      href={href}
      onClick={handleClick}
      sx={{
        cursor: "pointer",
        textDecoration: "underline",
        color: "primary.main",
      }}
    >
      {children}
    </Typography>
  );
};

export default TimestampLink;
