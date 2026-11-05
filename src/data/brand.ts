/**
 * Brand asset routing.
 *
 * The deployed site uses a repository-local vector derivative of the
 * owner-supplied logo. It does not need a third-party share URL at runtime.
 */
export const webLogoUrl =
  `${import.meta.env.BASE_URL.replace(/\/+$/, "")}/brand/alpha-team-mark.svg`;
