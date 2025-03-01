import React, { useEffect, useState, ReactNode } from "react";
import { getStorage } from "firebase/storage";
import { CircularProgress, Box } from "@mui/material";
import { firebaseApp } from "../../../../firebaseConfig.ts";
import { useAuth } from "../../../../context/AuthContext.tsx";
import { useFirebaseCache } from "../../../../context/FirebaseCacheContext.tsx";
import {
  firebaseAssetCacheKey,
  getCachedFirebaseAsset,
} from "../../../../utils/cache.ts";

interface FirebaseAssetProps {
  firebasePath: string;
  height: string;
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
      setLoading(false);
      return;
    }

    const fetchAsset = async () => {
      const blobUrl = await getCachedFirebaseAsset(
        firebasePath,
        storage,
        firebaseAssetCacheKey,
        urlCache,
        setUrlCache,
      );
      if (isMounted) {
        setAssetUrl(blobUrl);
        setLoading(false);
      }
    };

    fetchAsset();

    return () => {
      isMounted = false;
    };
  }, [firebasePath, user, storage, urlCache, setUrlCache]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        height,
      }}
    >
      {loading ? <CircularProgress /> : render(assetUrl)}
    </Box>
  );
};

export default FirebaseAsset;
