import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import SpeakerIcon from "@mui/icons-material/VolumeUp";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { firebaseApp } from "../../../../firebaseConfig";
import FirebaseAsset from "./FirebaseAsset";
import { AudioButtonData } from "../../../../data/projectDetails";
import {
  cacheAsset,
  firebaseAssetCacheKey,
  loadAsset,
} from "../../../../utils/cache.ts";
import { generateGravityBounceScaleKeyframes } from "../../../../utils/keyframeGenerator.ts";

interface FirebaseImageWithAudioButtonsProps {
  firebaseImagePath: string;
  height: number;
  alt: string;
  audioButtons: AudioButtonData[];
}

const buttonAnim = generateGravityBounceScaleKeyframes(1, 1.3, 20, 3);
const iconAnim = generateGravityBounceScaleKeyframes(1, 1.4, 20, 3);
const FirebaseImageWithAudioButtons: React.FC<
  FirebaseImageWithAudioButtonsProps
> = ({ firebaseImagePath, height, alt, audioButtons }) => {
  const [hasClickedButton, setHasClickedButton] = useState<boolean>(false);
  const storage = getStorage(firebaseApp);
  const handlePlayAudio = async (audioPath: string) => {
    setHasClickedButton(true);
    try {
      const cachedAudioUrl = await loadAsset(firebaseAssetCacheKey, audioPath);
      if (cachedAudioUrl) {
        const audio = new Audio(cachedAudioUrl);
        audio.play();
        return;
      }

      const audioRef = ref(storage, audioPath);
      const url = await getDownloadURL(audioRef);
      const blobUrl = await cacheAsset(firebaseAssetCacheKey, url, audioPath);

      const audio = new Audio(blobUrl);
      audio.play();
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  return (
    <FirebaseAsset
      firebasePath={firebaseImagePath}
      height={height}
      render={(url) =>
        url ? (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={url}
              alt={alt}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {audioButtons.map((button, idx) => (
              <IconButton
                key={idx}
                onClick={() => handlePlayAudio(button.audioPath)}
                sx={{
                  position: "absolute",
                  top: `${button.y}%`,
                  left: `${button.x}%`,
                  backgroundColor:
                    hasClickedButton || idx !== 0
                      ? "rgba(0,0,0,0.3)"
                      : "rgba(255,106,0,1)",
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
                    animation:
                      hasClickedButton || idx !== 0
                        ? undefined
                        : `${iconAnim} 2s infinite`,
                  }}
                />
              </IconButton>
            ))}
          </Box>
        ) : (
          <p>No image available</p>
        )
      }
    />
  );
};

export default FirebaseImageWithAudioButtons;
