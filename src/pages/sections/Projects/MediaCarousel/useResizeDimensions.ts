import { useState, useCallback } from "react";

export const useResizeDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: "100%",
    height: "100%",
  });

  const resizeDimensions = useCallback((img: HTMLImageElement | null) => {
    if (!img) return;

    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;
    const containerWidth = img.parentElement?.clientWidth || naturalWidth;
    const containerHeight = img.parentElement?.clientHeight || naturalHeight;

    // Calculate the scale factor needed to "contain" the image.
    const scale = Math.min(
      containerWidth / naturalWidth,
      containerHeight / naturalHeight,
    );

    const newWidth = naturalWidth * scale;
    const newHeight = naturalHeight * scale;

    // Express these as percentages of the container dimensions.
    const percentageWidth = (newWidth / containerWidth) * 100;
    const percentageHeight = (newHeight / containerHeight) * 100;

    setDimensions({
      width: `${percentageWidth.toFixed(2)}%`,
      height: `${percentageHeight.toFixed(2)}%`,
    });
  }, []);

  return { dimensions, resizeDimensions };
};
