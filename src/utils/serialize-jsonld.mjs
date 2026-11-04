const SCRIPT_CONTEXT_ESCAPES = {
  "<": "\\u003c",
  ">": "\\u003e",
  "&": "\\u0026",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};

/** Serialize JSON-LD without allowing data to terminate its HTML script context. */
export function serializeJsonLd(graph) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
    /[<>&\\u2028\\u2029]/g,
    (character) => SCRIPT_CONTEXT_ESCAPES[character] ?? character
  );
}
