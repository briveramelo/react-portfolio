import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { NavLink } from "../../data/sectionStyles";

export interface UseNavigationOptions {
  onNavigate?: () => void;
}

export function useNavigation(
  navigationLinks: NavLink[],
  options?: UseNavigationOptions,
) {
  const navigate = useNavigate();

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

      navigate(href, { replace: false });
    },
    [navigationLinks, options, navigate],
  );

  return handleNavClick;
}
