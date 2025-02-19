import React from "react";
import FirebaseAsset from "./FirebaseAsset.tsx";
import PdfViewer from "./PdfViewer.tsx";
import { CircularProgress } from "@mui/material";

interface FirebasePdfProps {
  firebasePdfPath: string;
  height: number;
  borderRadius: string;
  isActive?: boolean;
}

const FirebasePdf: React.FC<FirebasePdfProps> = ({
  firebasePdfPath,
  height,
  borderRadius,
  isActive = true,
}) => {
  return (
    <FirebaseAsset
      firebasePath={firebasePdfPath}
      height={height}
      render={(url) =>
        url ? (
          <PdfViewer
            pdfUrl={url}
            isActive={isActive}
            borderRadius={borderRadius}
          />
        ) : (
          <CircularProgress />
        )
      }
    />
  );
};

export default FirebasePdf;
