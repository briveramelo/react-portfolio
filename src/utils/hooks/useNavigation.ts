import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useHeaderContext } from "../../context/HeaderContext";

export interface UseNavigationOptions {
  onNavigate?: () => void;
}

export function useNavigation(options?: UseNavigationOptions) {
  const { navLinks } = useHeaderContext();
  const navigate = useNavigate();

  const handleNavClick = useCallback(
    (href: string) => {
      // Run any additional logic (e.g. close a mobile drawer)
      options?.onNavigate?.();

      // Find the nav link with the matching href
      const navLink = navLinks.find((nav) => nav.href === href);
      if (!navLink?.ref?.current) return;

      // Scroll to the section
      navLink.ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      navigate(href, { replace: false });
    },
    [navLinks, options, navigate],
  );

  return handleNavClick;
}
