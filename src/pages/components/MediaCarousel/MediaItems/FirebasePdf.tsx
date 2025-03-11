import React from "react";
import FirebaseAsset from "./FirebaseAsset.tsx";
import PdfViewer from "./PdfViewer.tsx";
import { CircularProgress } from "@mui/material";

interface FirebasePdfProps {
  firebasePdfPath: string;
  height: string;
  borderRadius: string;
  startPage?: number;
  isActive?: boolean;
}

const FirebasePdf: React.FC<FirebasePdfProps> = ({
  firebasePdfPath,
  height,
  borderRadius,
  startPage,
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
            startPage={startPage}
          />
        ) : (
          <CircularProgress />
        )
      }
    />
  );
};

export default FirebasePdf;
