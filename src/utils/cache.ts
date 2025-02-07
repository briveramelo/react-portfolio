import { getDownloadURL, ref, FirebaseStorage } from "firebase/storage";
export const firebaseAssetCacheKey = "firebase-asset-cache";

export async function getCachedFirebaseAsset(
  firebasePath: string,
  storage: FirebaseStorage,
  cacheKey: string,
  urlCache?: { [key: string]: string },
  setUrlCache?: (path: string, url: string) => void,
): Promise<string | null> {
  const cachedBlobUrl = await loadAsset(cacheKey, firebasePath);
  if (cachedBlobUrl) {
    return cachedBlobUrl;
  }

  // Optionally, check the in-memory URL cache
  if (urlCache && urlCache[firebasePath]) {
    return urlCache[firebasePath];
  }

  // Not cached? Fetch from Firebase Storage
  const assetRef = ref(storage, firebasePath);
  try {
    const url = await getDownloadURL(assetRef);
    // If a cache setter is provided, update the URL cache
    if (setUrlCache) {
      setUrlCache(firebasePath, url);
    }
    // Cache the asset as a blob URL
    const blobUrl = await cacheAsset(cacheKey, url, firebasePath);
    return blobUrl;
  } catch (error) {
    console.error("Error fetching asset:", error);
    return null;
  }
}

export const cacheAsset = async (
  cacheName: string,
  url: string,
  key: string,
): Promise<string> => {
  const cacheStorage = await caches.open(cacheName);

  // Check if already cached under the correct key
  const cachedResponse = await cacheStorage.match(key);
  if (!cachedResponse) {
    const response = await fetch(url);
    await cacheStorage.put(key, response); // Store under key (firebasePath)
  }

  // Retrieve from cache and return blob URL
  const cachedBlob = await cacheStorage.match(key);
  if (cachedBlob) {
    return URL.createObjectURL(await cachedBlob.blob());
  }

  return url;
};

export const loadAsset = async (
  cacheName: string,
  key: string,
): Promise<string | null> => {
  const cacheStorage = await caches.open(cacheName);
  const cachedResponse = await cacheStorage.match(key);

  if (cachedResponse) {
    return URL.createObjectURL(await cachedResponse.blob());
  }

  return null;
};
