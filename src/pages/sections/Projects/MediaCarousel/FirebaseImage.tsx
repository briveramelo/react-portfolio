import React from "react";
import FirebaseAsset from "./FirebaseAsset.tsx";

interface FirebaseImageProps {
  firebaseImagePath: string;
  height: number | string;
  alt: string;
  style?: React.CSSProperties;
}

const FirebaseImage: React.FC<FirebaseImageProps> = ({
  firebaseImagePath,
  height,
  alt,
  style = {},
}) => {
  return (
    <FirebaseAsset
      firebasePath={firebaseImagePath}
      height={height}
      render={(url) =>
        url ? (
          <img
            src={url}
            alt={alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              ...style,
            }}
          />
        ) : (
          <p>No image available</p>
        )
      }
    />
  );
};

export default FirebaseImage;
