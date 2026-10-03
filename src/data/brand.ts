/**
 * Brand asset routing.
 *
 * IMG_6104.PNG is the owner-supplied canonical logo artwork.
 * The deployed site uses that exact PNG as a local static asset; the
 * browser never loads the Dropbox URL at runtime.
 */
export const suppliedLogoSourceUrl =
  "https://www.dropbox.com/scl/fi/aqibwvywas752lppcrkad/IMG_6104.PNG?rlkey=kd5v1u6n3ae3dgzrgvtrfrtb4&raw=1";

export const webLogoUrl =
  `${import.meta.env.BASE_URL}brand/IMG_6104.PNG`;
