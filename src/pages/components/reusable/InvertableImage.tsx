import React from "react";

interface InvertableImageProps {
  src: string;
  alt: string;
  invert: boolean; // Forces inversion when set, otherwise responds to theme
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
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
        filter: filterStyle,
      }}
    />
  );
};

export default React.memo(InvertableImage);
