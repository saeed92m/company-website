import { createClient } from "npm:@supabase/supabase-js@2.119.0";

const allowedOrigins = new Set([
  "https://saeed92m.github.io",
  "http://localhost:4321",
  "http://127.0.0.1:4321",
]);

function corsHeaders(origin: string | null): HeadersInit {
  const headers: Record<string, string> = {
    "Vary": "Origin",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
    "Access-Control-Max-Age": "600",
  };
  if (origin && allowedOrigins.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  return headers;
}

function json(body: Record<string, unknown>, status: number, headers: HeadersInit) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...headers, "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

function getPublishableKey(): string | null {
  const direct = Deno.env.get("SUPABASE_ANON_KEY");
  if (direct) return direct;

  const encodedKeys = Deno.env.get("SUPABASE_PUBLISHABLE_KEYS");
  if (!encodedKeys) return null;

  try {
    const keys = JSON.parse(encodedKeys) as Record<string, string>;
    return keys.default ?? null;
  } catch {
    return null;
  }
}

Deno.serve(async (request: Request) => {
  const origin = request.headers.get("Origin");
  const headers = corsHeaders(origin);

  if (request.method === "OPTIONS") {
    if (origin && !allowedOrigins.has(origin)) {
      return json({ error: "Origin not allowed." }, 403, headers);
    }
    return new Response(null, { status: 204, headers });
  }

  if (origin && !allowedOrigins.has(origin)) {
    return json({ error: "Origin not allowed." }, 403, headers);
  }

  if (request.method !== "GET") {
    return json({ error: "Method not allowed." }, 405, headers);
  }

  const authorization = request.headers.get("Authorization");
  const match = authorization?.match(/^Bearer\s+(.+)$/i);
  const accessToken = match?.[1];
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const publishableKey = getPublishableKey();

  if (!accessToken || !supabaseUrl || !publishableKey) {
    return json({ error: "Unauthorized." }, 401, headers);
  }

  try {
    const supabase = createClient(supabaseUrl, publishableKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    });

    const { data: userData, error: userError } = await supabase.auth.getUser(accessToken);
    if (userError || !userData.user) {
      return json({ error: "Unauthorized." }, 401, headers);
    }

    const metadata = userData.user.app_metadata ?? {};
    const roles = Array.isArray(metadata.roles) ? metadata.roles : [];
    const hasAdminRole = roles.includes("admin") || roles.includes("owner");

    if (!hasAdminRole) {
      return json({ error: "Forbidden." }, 403, headers);
    }

    const { data: assurance, error: assuranceError } =
      await supabase.auth.mfa.getAuthenticatorAssuranceLevel(accessToken);

    const methods = assurance?.currentAuthenticationMethods;
    const usedTotp = Array.isArray(methods) && methods.some((entry) => entry.method === "totp");

    if (assuranceError || assurance?.currentLevel !== "aal2" || !usedTotp) {
      return json({ error: "Additional authentication required." }, 403, headers);
    }

    return json({ ok: true, scope: "admin-gateway" }, 200, headers);
  } catch {
    return json({ error: "Authentication service unavailable." }, 503, headers);
  }
});
