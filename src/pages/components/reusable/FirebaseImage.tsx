import React from "react";
import FirebaseAsset from "./FirebaseAsset";

interface FirebaseImageProps {
  firebaseImagePath: string;
  height: number;
  scaleFactor: number | undefined;
}

const FirebaseImage: React.FC<FirebaseImageProps> = ({
  firebaseImagePath,
  height,
  scaleFactor,
}) => {
  return (
    <FirebaseAsset
      firebasePath={firebaseImagePath}
      height={height}
      render={(url) =>
        url ? (
          <img
            src={url}
            alt="Firebase Image"
            height={(scaleFactor ?? 1) * height}
            width="auto"
          />
        ) : (
          <p>No image available</p>
        )
      }
    />
  );
};

export default FirebaseImage;
