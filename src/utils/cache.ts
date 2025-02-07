export const firebaseAssetCacheKey = "firebase-asset-cache";
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
