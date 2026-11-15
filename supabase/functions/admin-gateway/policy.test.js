import test from "node:test";
import assert from "node:assert/strict";
import {
  hasAdminRole,
  hasVerifiedTotpAal2,
  isAllowedMethod,
  isAllowedOrigin,
} from "./policy.js";

const origins = new Set([
  "https://saeed92m.github.io",
  "http://localhost:4321",
  "http://127.0.0.1:4321",
]);

test("allows requests without an Origin header", () => {
  assert.equal(isAllowedOrigin(null, origins), true);
});

test("allows only exact configured origins", () => {
  assert.equal(isAllowedOrigin("https://saeed92m.github.io", origins), true);
  assert.equal(isAllowedOrigin("https://evil.example", origins), false);
  assert.equal(isAllowedOrigin("https://saeed92m.github.io.evil.example", origins), false);
  assert.equal(isAllowedOrigin("https://SAEED92M.github.io", origins), false);
});

test("rejects non-string origins", () => {
  assert.equal(isAllowedOrigin(undefined, origins), false);
  assert.equal(isAllowedOrigin(42, origins), false);
});

test("allows GET and rejects other methods", () => {
  assert.equal(isAllowedMethod("GET"), true);
  for (const method of ["POST", "PUT", "PATCH", "DELETE", "get", "OPTIONS", ""]) {
    assert.equal(isAllowedMethod(method), false, String(method) + " must not be allowed");
  }
});

test("accepts admin and owner roles from app metadata", () => {
  assert.equal(hasAdminRole({ roles: ["admin"] }), true);
  assert.equal(hasAdminRole({ roles: ["owner"] }), true);
  assert.equal(hasAdminRole({ roles: ["user", "admin"] }), true);
});

test("rejects ordinary, missing, and malformed roles", () => {
  for (const metadata of [
    { roles: ["user"] },
    { roles: [] },
    {},
    null,
    undefined,
    { roles: "admin" },
    ["admin"],
  ]) {
    assert.equal(hasAdminRole(metadata), false);
  }
});

test("requires AAL2 and an explicit TOTP authentication method", () => {
  assert.equal(hasVerifiedTotpAal2({
    currentLevel: "aal2",
    currentAuthenticationMethods: [{ method: "password" }, { method: "totp" }],
  }, null), true);
});

test("rejects AAL1 even when TOTP appears in method metadata", () => {
  assert.equal(hasVerifiedTotpAal2({
    currentLevel: "aal1",
    currentAuthenticationMethods: [{ method: "totp" }],
  }, null), false);
});

test("rejects AAL2 without explicit TOTP", () => {
  for (const methods of [
    [{ method: "password" }],
    [{ method: "otp" }],
    [{ method: "recovery" }],
    [],
    null,
    undefined,
  ]) {
    assert.equal(hasVerifiedTotpAal2({ currentLevel: "aal2", currentAuthenticationMethods: methods }, null), false);
  }
});

test("rejects assurance lookup errors and malformed responses", () => {
  const assurance = { currentLevel: "aal2", currentAuthenticationMethods: [{ method: "totp" }] };
  assert.equal(hasVerifiedTotpAal2(assurance, new Error("lookup failed")), false);
  assert.equal(hasVerifiedTotpAal2(null, null), false);
  assert.equal(hasVerifiedTotpAal2({}, null), false);
});
