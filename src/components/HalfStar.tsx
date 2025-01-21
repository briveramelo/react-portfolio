import React from "react";
import halfStar from "@/assets/half-star.svg";

interface HalfStarProps {
  leftColor?: string;
  rightColor?: string;
  size: string;
}

const HalfStar: React.FC<HalfStarProps> = ({
  leftColor = "gold",
  rightColor = "silver",
  size,
}) => {
  return (
    <img
      width={size}
      height={size}
      src={halfStar}
      style={
        {
          "--left-color": leftColor,
          "--right-color": rightColor,
        } as React.CSSProperties
      }
      alt="half star"
    />
  );
};

export default HalfStar;
