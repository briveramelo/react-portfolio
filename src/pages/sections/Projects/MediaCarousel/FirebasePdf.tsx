import React from "react";
import FirebaseAsset from "./FirebaseAsset.tsx";
import PdfViewer from "./PdfViewer.tsx";

interface FirebasePdfProps {
  firebasePdfPath: string;
  height: number;
  borderRadius: string | number;
  isActive?: boolean;
}

const FirebasePdf: React.FC<FirebasePdfProps> = ({
  firebasePdfPath,
  height,
  isActive = true,
}) => {
  return (
    <FirebaseAsset
      firebasePath={firebasePdfPath}
      height={height}
      render={(url) =>
        url ? (
          <PdfViewer pdfUrl={url} isActive={isActive} />
        ) : (
          <p>No PDF available</p>
        )
      }
    />
  );
};

export default FirebasePdf;
