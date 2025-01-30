import React, { useEffect, useState, useRef, ReactNode } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { CircularProgress, Box } from "@mui/material";
import { firebaseApp } from "../../../firebaseConfig";
import { useAuth } from "../../../context/AuthContext";
import { useFirebaseCache } from "../../../context/FirebaseCacheContext";

interface FirebaseAssetProps {
  firebasePath: string; // Example: "tilt-tracker/manual.pdf"
  height: number;
  render: (url: string | null) => ReactNode;
}

const FirebaseAsset: React.FC<FirebaseAssetProps> = ({
  firebasePath,
  height,
  render,
}) => {
  const [assetUrl, setAssetUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const storage = getStorage(firebaseApp);
  const { urlCache, setUrlCache } = useFirebaseCache();

  useEffect(() => {
    let isMounted = true;

    if (!user) {
      console.error("User not authenticated.");
      setLoading(false);
      return;
    }

    const url = urlCache[firebasePath];
    if (url) {
      setAssetUrl(url);
      setLoading(false);
      return;
    }

    const assetRef = ref(storage, firebasePath);
    getDownloadURL(assetRef)
      .then((url) => {
        if (isMounted) {
          setUrlCache(firebasePath, url);
          setAssetUrl(url);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching asset:", error);
        if (isMounted) {
          setAssetUrl(null);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [firebasePath, user]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height,
      }}
    >
      {loading ? <CircularProgress /> : render(assetUrl)}
    </Box>
  );
};

export default FirebaseAsset;
