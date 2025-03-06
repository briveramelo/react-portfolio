import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { MediaControlContext } from "../MediaCarousel/Controls/MediaControlContext.tsx";

interface TimestampLinkProps {
  href: string;
  children: React.ReactNode;
}

const TimestampLink: React.FC<TimestampLinkProps> = ({ href, children }) => {
  const { seekTo } = useContext(MediaControlContext);

  const timeString = href.startsWith("#") ? href.slice(1) : href;
  const parts = timeString.split(":");

  const seconds =
    parts.length === 2
      ? parseInt(parts[0], 10) * 60 + parseFloat(parts[1])
      : parseFloat(timeString);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isNaN(seconds)) return;
    seekTo(seconds);
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
