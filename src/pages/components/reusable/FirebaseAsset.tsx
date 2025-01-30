import React, { useEffect, useState, ReactNode } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { CircularProgress, Box } from "@mui/material";
import { firebaseApp } from "../../../firebaseConfig";
import { useAuth } from "../../../context/AuthContext";
import { useFirebaseCache } from "../../../context/FirebaseCacheContext";
import { cacheAsset, loadAsset } from "../../../utils/cache";

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
  const cacheName = "firebase-asset-cache";

  useEffect(() => {
    let isMounted = true;

    if (!user) {
      console.error("User not authenticated.");
      setLoading(false);
      return;
    }

    const checkCacheAndLoad = async () => {
      // Try to load from IndexedDB first
      const cachedBlobUrl = await loadAsset(cacheName, firebasePath);
      if (cachedBlobUrl) {
        setAssetUrl(cachedBlobUrl);
        setLoading(false);
        return;
      }

      // If not in IndexedDB, check the cache context
      if (urlCache[firebasePath]) {
        setAssetUrl(urlCache[firebasePath]);
        setLoading(false);
        return;
      }

      const assetRef = ref(storage, firebasePath);
      try {
        const url = await getDownloadURL(assetRef);

        if (isMounted) {
          setUrlCache(firebasePath, url);
          const blobUrl = await cacheAsset(cacheName, url, firebasePath);
          setAssetUrl(blobUrl);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching asset:", error);
        if (isMounted) {
          setAssetUrl(null);
          setLoading(false);
        }
      }
    };

    checkCacheAndLoad();

    return () => {
      isMounted = false;
    };
  }, [firebasePath, user, urlCache, setUrlCache]);

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
