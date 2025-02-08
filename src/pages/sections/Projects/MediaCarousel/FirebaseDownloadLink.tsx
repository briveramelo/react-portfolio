import React, { useState, useRef } from "react";
import { Link, CircularProgress, Box } from "@mui/material";
import { getStorage } from "firebase/storage";
import { useAuth } from "../../../../context/AuthContext";
import { firebaseApp } from "../../../../firebaseConfig";
import {
  firebaseAssetCacheKey,
  getCachedFirebaseAsset,
} from "../../../../utils/cache";
import { useFirebaseCache } from "../../../../context/FirebaseCacheContext";

interface FirebaseDownloadLinkProps {
  firebasePath: string;
  linkText: string;
  height: number;
  downloadFilename: string;
}

const FirebaseDownloadLink: React.FC<FirebaseDownloadLinkProps> = ({
  firebasePath,
  linkText,
  height,
  downloadFilename,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const storage = getStorage(firebaseApp);
  const { user } = useAuth();
  const { urlCache, setUrlCache } = useFirebaseCache();
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);

  const handleDownload = async () => {
    if (!user) {
      console.error("User not authenticated.");
      return;
    }
    if (isLoading) return; // Prevent duplicate clicks

    setIsLoading(true);

    const blobUrl = await getCachedFirebaseAsset(
      firebasePath,
      storage,
      firebaseAssetCacheKey,
      urlCache,
      setUrlCache,
    );

    if (blobUrl && hiddenAnchorRef.current) {
      hiddenAnchorRef.current.href = blobUrl;
      hiddenAnchorRef.current.download = downloadFilename;
      hiddenAnchorRef.current.click();
    } else {
      console.error("Error fetching asset.");
    }
    setIsLoading(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height,
        }}
      >
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Link component="button" onClick={handleDownload}>
            {linkText}
          </Link>
        )}
      </Box>
      {/* Hidden anchor element used to trigger the file download */}
      <a ref={hiddenAnchorRef} style={{ display: "none" }} />
    </>
  );
};

export default FirebaseDownloadLink;
