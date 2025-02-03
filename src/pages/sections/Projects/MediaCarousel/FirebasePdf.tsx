import React from "react";
import FirebaseAsset from "./FirebaseAsset.tsx";
import PdfViewer from "./PdfViewer.tsx";

interface FirebasePdfProps {
  firebasePdfPath: string;
  height: number;
}

const FirebasePdf: React.FC<FirebasePdfProps> = ({
  firebasePdfPath,
  height,
}) => {
  return (
    <FirebaseAsset
      firebasePath={firebasePdfPath}
      height={height}
      render={(url) =>
        url ? <PdfViewer pdfUrl={url} /> : <p>No PDF available</p>
      }
    />
  );
};

export default FirebasePdf;
