import React, { useState, useRef, useLayoutEffect } from "react";
import { Box, IconButton } from "@mui/material";
import SpeakerIcon from "@mui/icons-material/VolumeUp";
import { getStorage } from "firebase/storage";
import FirebaseAsset from "./FirebaseAsset";
import { AudioButtonData } from "../../../../data/projectDetails.tsx";
import { firebaseApp } from "../../../../firebaseConfig";
import {
  firebaseAssetCacheKey,
  getCachedFirebaseAsset,
} from "../../../../utils/cache.ts";
import { generateGravityBounceScaleKeyframes } from "../../../../utils/keyframeGenerator.ts";
import { useFirebaseCache } from "../../../../context/FirebaseCacheContext.tsx";

interface FirebaseImageWithAudioButtonsProps {
  firebaseImagePath: string;
  height: number;
  alt: string;
  audioButtons: AudioButtonData[];
  isSelected: boolean;
}

interface ImgDimensions {
  width: number;
  height: number;
  offsetX: number;
  offsetY: number;
}

const buttonAnim = generateGravityBounceScaleKeyframes(1, 1.3, 20, 3);
const iconAnim = generateGravityBounceScaleKeyframes(1, 1.4, 20, 3);

const FirebaseImageWithAudioButtons: React.FC<
  FirebaseImageWithAudioButtonsProps
> = ({ firebaseImagePath, height, alt, audioButtons, isSelected }) => {
  const [hasClickedButton, setHasClickedButton] = useState<boolean>(false);
  const [imgDimensions, setImgDimensions] = useState<ImgDimensions | null>(
    null,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { urlCache, setUrlCache } = useFirebaseCache();
  const storage = getStorage(firebaseApp);

  // Calculate the drawn image area given the container and the image’s natural dimensions.
  const calculateDimensions = () => {
    if (!containerRef.current || !imageRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    // Guard: If the container's dimensions are zero, skip the calculation.
    if (containerWidth === 0 || containerHeight === 0) return;

    const naturalWidth = imageRef.current.naturalWidth;
    const naturalHeight = imageRef.current.naturalHeight;

    // Guard: If the image's natural dimensions are not available, skip the calculation.
    if (naturalWidth === 0 || naturalHeight === 0) return;

    let displayWidth: number,
      displayHeight: number,
      offsetX: number,
      offsetY: number;
    const containerRatio = containerWidth / containerHeight;
    const imageRatio = naturalWidth / naturalHeight;

    if (imageRatio > containerRatio) {
      // Image is wider than container. It fills container width.
      displayWidth = containerWidth;
      displayHeight = containerWidth / imageRatio;
      offsetX = 0;
      offsetY = (containerHeight - displayHeight) / 2;
    } else {
      // Image is taller than container. It fills container height.
      displayHeight = containerHeight;
      displayWidth = containerHeight * imageRatio;
      offsetY = 0;
      offsetX = (containerWidth - displayWidth) / 2;
    }

    setImgDimensions({
      width: displayWidth,
      height: displayHeight,
      offsetX,
      offsetY,
    });
  };

  // Use a layout effect so that our dimensions are computed after the DOM update but before painting.
  useLayoutEffect(() => {
    calculateDimensions();
    const handleResize = () => calculateDimensions();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSelected, height, firebaseImagePath]);

  const handlePlayAudio = async (audioPath: string) => {
    setHasClickedButton(true);
    const blobUrl = await getCachedFirebaseAsset(
      audioPath,
      storage,
      firebaseAssetCacheKey,
      urlCache,
      setUrlCache,
    );
    if (blobUrl) {
      const audio = new Audio(blobUrl);
      audio.play();
    }
  };

  return (
    <FirebaseAsset
      firebasePath={firebaseImagePath}
      height={height}
      render={(url) =>
        url ? (
          <Box
            ref={containerRef}
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            {/* The image element fills the container but its actual drawn area is computed */}
            <img
              ref={imageRef}
              src={url}
              alt={alt}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
            />
            {imgDimensions &&
              audioButtons.map((button, idx) => {
                // Compute the absolute position relative to the drawn image area.
                const left =
                  imgDimensions.offsetX +
                  (button.x / 100) * imgDimensions.width;
                const top =
                  imgDimensions.offsetY +
                  (button.y / 100) * imgDimensions.height;
                // Calculate a button size that is a fixed percentage of the drawn image width.
                const buttonSize = Math.max(15, imgDimensions.width * 0.05);

                return (
                  <IconButton
                    key={idx}
                    id={button.audioPath}
                    onClick={() => handlePlayAudio(button.audioPath)}
                    sx={{
                      position: "absolute",
                      left,
                      top,
                      width: buttonSize,
                      height: buttonSize,
                      minWidth: buttonSize, // override default IconButton minWidth
                      backgroundColor:
                        hasClickedButton || idx !== 0
                          ? "rgba(0,0,0,0.3)"
                          : "rgba(255,106,0,.7)",
                      color: "white",
                      "&:hover": {
                        backgroundColor:
                          hasClickedButton || idx !== 0
                            ? "rgba(0,0,0,0.5)"
                            : "rgba(255,106,0,1)",
                      },
                      animation:
                        hasClickedButton || idx !== 0
                          ? undefined
                          : `${buttonAnim} 2s infinite`,
                    }}
                  >
                    <SpeakerIcon
                      sx={{
                        // Scale the icon's font size relative to the button size.
                        fontSize: buttonSize * 0.7,
                        animation:
                          hasClickedButton || idx !== 0
                            ? undefined
                            : `${iconAnim} 2s infinite`,
                      }}
                    />
                  </IconButton>
                );
              })}
          </Box>
        ) : (
          <p>No image available</p>
        )
      }
    />
  );
};

export default FirebaseImageWithAudioButtons;
