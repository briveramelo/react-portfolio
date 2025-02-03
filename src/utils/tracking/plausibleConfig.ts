import Plausible from "plausible-tracker";

export const plausible = Plausible({
  domain: import.meta.env.VITE_PLAUSIBLE_DOMAIN || "brandon.riveramelo.com",
  apiHost: import.meta.env.VITE_PLAUSIBLE_API_HOST || "plausible.brm.ninja",
  trackLocalhost: false,
});
