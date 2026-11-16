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

export function resolvePublishableKey(encodedKeys, legacyAnonKey) {
  if (typeof encodedKeys === "string" && encodedKeys.length > 0) {
    try {
      const keys = JSON.parse(encodedKeys);
      const defaultKey = keys && typeof keys === "object" ? keys.default : null;
      if (typeof defaultKey === "string" && defaultKey.length > 0) return defaultKey;
    } catch {
      // Fall back to the legacy anon key when the optional JSON value is malformed.
    }
  }
  return typeof legacyAnonKey === "string" && legacyAnonKey.length > 0 ? legacyAnonKey : null;
}
