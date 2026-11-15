export function isAllowedOrigin(origin, allowedOrigins) {
  if (origin === null) return true;
  return typeof origin === "string" && allowedOrigins instanceof Set && allowedOrigins.has(origin);
}

export function isAllowedMethod(method) {
  return method === "GET";
}

export function hasAdminRole(appMetadata) {
  if (!appMetadata || typeof appMetadata !== "object" || Array.isArray(appMetadata)) return false;
  const roles = appMetadata.roles;
  return Array.isArray(roles) && roles.some((role) => role === "admin" || role === "owner");
}

export function hasVerifiedTotpAal2(assurance, assuranceError) {
  if (assuranceError || !assurance || assurance.currentLevel !== "aal2") return false;
  const methods = assurance.currentAuthenticationMethods;
  return Array.isArray(methods) && methods.some(
    (entry) => entry !== null && typeof entry === "object" && entry.method === "totp",
  );
}
