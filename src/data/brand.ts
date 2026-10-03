/**
 * Brand asset routing.
 *
 * The owner-supplied IMG_6104.PNG remains the source-of-truth artwork.
 * The Dropbox URL is not used as a runtime dependency because direct
 * browser loading is not reliable on mobile. Until the exact PNG is
 * committed to the repository, the existing repository-local official
 * vector derivative is used for deterministic rendering.
 */
export const suppliedLogoSourceUrl =
  "https://www.dropbox.com/scl/fi/aqibwvywas752lppcrkad/IMG_6104.PNG?rlkey=kd5v1u6n3ae3dgzrgvtrfrtb4&raw=1";

export const webLogoUrl =
  `${import.meta.env.BASE_URL}brand/alpha-team-mark.svg`;
