import React from "react";
import { Link } from "@mui/material";
import FirebaseAsset from "./FirebaseAsset";

interface FirebaseDownloadLinkProps {
  firebasePath: string;
  linkText: string;
  height: number;
}

const FirebaseDownloadLink: React.FC<FirebaseDownloadLinkProps> = ({
  firebasePath,
  linkText,
  height,
}) => {
  return (
    <FirebaseAsset
      firebasePath={firebasePath}
      height={height}
      render={(url) =>
        url ? (
          <Link href={url} target="_blank" rel="noopener noreferrer" download>
            {linkText}
          </Link>
        ) : (
          <p>No file available</p>
        )
      }
    />
  );
};

export default FirebaseDownloadLink;
