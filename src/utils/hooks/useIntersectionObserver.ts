import React, { useEffect, useMemo, useState } from "react";

export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {},
  startingVisibility = false,
): boolean => {
  const [isVisible, setIsVisible] = useState(startingVisibility);

  // Memoize the options within the hook.
  const memoizedOptions = useMemo(
    () => ({
      root: options.root,
      rootMargin: options.rootMargin,
      threshold: options.threshold,
    }),
    [options.root, options.rootMargin, JSON.stringify(options.threshold)],
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, memoizedOptions);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [elementRef, memoizedOptions]);

  return isVisible;
};
