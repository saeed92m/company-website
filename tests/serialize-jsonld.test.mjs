import test from "node:test";
import assert from "node:assert/strict";
import { serializeJsonLd } from "../src/utils/serialize-jsonld.mjs";

test("serializes JSON-LD as valid JSON and preserves graph data", () => {
  const graph = [{ "@type": "Organization", name: "Company", url: "https://example.test" }];
  const serialized = serializeJsonLd(graph);
  assert.deepEqual(JSON.parse(serialized), { "@context": "https://schema.org", "@graph": graph });
});

test("escapes script-sensitive characters and Unicode line separators", () => {
  const hostile = '</script><script>alert("x")</script> & \u2028 \u2029';
  const serialized = serializeJsonLd([{ name: hostile }]);
  assert.equal(serialized.includes("</script>"), false);
  assert.equal(serialized.includes("<"), false);
  assert.equal(serialized.includes(">"), false);
  assert.equal(serialized.includes("&"), false);
  assert.equal(serialized.includes("\u2028"), false);
  assert.equal(serialized.includes("\u2029"), false);
  assert.deepEqual(JSON.parse(serialized)["@graph"][0].name, hostile);
});
