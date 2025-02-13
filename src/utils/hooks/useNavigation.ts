import { useCallback } from "react";
import { NavLink } from "../../data/sectionStyles"; // Adjust the import path as needed

export interface UseNavigationOptions {
  /** Optional callback to run when a navigation link is clicked (e.g. to close a mobile drawer) */
  onNavigate?: () => void;
}

/**
 * A custom hook that encapsulates navigation link handling.
 * It scrolls to the target section and updates the URL hash.
 */
export function useNavigation(
  navigationLinks: NavLink[],
  options?: UseNavigationOptions,
) {
  const handleNavClick = useCallback(
    (href: string) => {
      // Run any additional logic (e.g. close a mobile drawer)
      options?.onNavigate?.();

      // Find the nav link with the matching href
      const navLink = navigationLinks.find((nav) => nav.href === href);
      if (!navLink?.ref?.current) return;

      // Scroll to the section
      navLink.ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // If the hash already matches, do nothing more
      if (window.location.hash === href) return;

      // Update the URL without a page reload
      window.history.pushState(null, "", href);
    },
    [navigationLinks, options],
  );

  return handleNavClick;
}
