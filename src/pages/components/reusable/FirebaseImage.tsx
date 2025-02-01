import React from "react";
import FirebaseAsset from "./FirebaseAsset";

interface FirebaseImageProps {
  firebaseImagePath: string;
  height: number;
  alt: string;
}

const FirebaseImage: React.FC<FirebaseImageProps> = ({
  firebaseImagePath,
  height,
  alt,
}) => {
  return (
    <FirebaseAsset
      firebasePath={firebaseImagePath}
      height={height}
      render={(url) =>
        url ? (
          <img src={url} alt={alt} width="auto" />
        ) : (
          <p>No image available</p>
        )
      }
    />
  );
};

export default FirebaseImage;
