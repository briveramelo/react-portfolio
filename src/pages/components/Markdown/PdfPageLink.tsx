import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { MediaControlContext } from "../MediaCarousel/Controls/MediaControlContext.tsx";
import { useCustomPalette } from "../../../theme/theme.ts";

interface PdfPageLinkProps {
  href: string;
  children: React.ReactNode;
}

const PdfPageLink: React.FC<PdfPageLinkProps> = ({ href, children }) => {
  const { goToPage } = useContext(MediaControlContext);
  const { interactable } = useCustomPalette();

  // Remove the leading "#" if present.
  const pageString = href.startsWith("#") ? href.slice(1) : href;
  const page = parseInt(pageString, 10);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isNaN(page)) return;

    goToPage(page);
  };

  return (
    <Typography
      component="a"
      href={href}
      onClick={handleClick}
      sx={{
        cursor: "pointer",
        textDecoration: "underline",
        color: interactable.idle,
      }}
    >
      {children}
    </Typography>
  );
};

export default PdfPageLink;
