import React from "react";

interface InvertableImageProps {
  src: string;
  alt: string;
  invert: boolean;
  id?: string;
}

const InvertableImage: React.FC<InvertableImageProps> = ({
  src,
  alt,
  invert,
  id,
}) => {
  const filterStyle = invert ? "invert(1)" : "";
  return (
    <img
      id={id}
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        alignItems: "center",
        justifyContent: "center",
        filter: filterStyle,
      }}
    />
  );
};

export default React.memo(InvertableImage);
