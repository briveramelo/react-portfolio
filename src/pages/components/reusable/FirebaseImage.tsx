import React from "react";
import FirebaseAsset from "./FirebaseAsset";

interface FirebaseImageProps {
  firebaseImagePath: string;
  height: number;
}

const FirebaseImage: React.FC<FirebaseImageProps> = ({
  firebaseImagePath,
  height,
}) => {
  return (
    <FirebaseAsset
      firebasePath={firebaseImagePath}
      height={height}
      render={(url) =>
        url ? (
          <img src={url} alt="Firebase Image" width="100%" />
        ) : (
          <p>No image available</p>
        )
      }
    />
  );
};

export default FirebaseImage;
