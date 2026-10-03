/**
 * Brand asset routing.
 *
 * The owner-supplied IMG_6104.PNG remains the visual source-of-truth.
 * The deployed site uses a repository-local, smooth traced vector derivative
 * so rendering is deterministic and does not depend on Dropbox at runtime.
 */
export const suppliedLogoSourceUrl =
  "https://www.dropbox.com/scl/fi/aqibwvywas752lppcrkad/IMG_6104.PNG?rlkey=kd5v1u6n3ae3dgzrgvtrfrtb4&raw=1";

export const webLogoUrl =
  `${import.meta.env.BASE_URL}brand/alpha-team-mark.svg`;
