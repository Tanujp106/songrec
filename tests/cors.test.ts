import assert from "node:assert/strict";
import test from "node:test";

import { corsHeaders } from "../src/lib/cors";

test("varies CORS responses by request origin", () => {
  const localHeaders = corsHeaders("http://localhost:3000");
  const deployedHeaders = corsHeaders("https://songrec.tanujpatel.design");
  const fallbackHeaders = corsHeaders("https://untrusted.example");

  assert.equal(localHeaders["Access-Control-Allow-Origin"], "http://localhost:3000");
  assert.equal(deployedHeaders["Access-Control-Allow-Origin"], "https://songrec.tanujpatel.design");
  assert.equal(fallbackHeaders["Access-Control-Allow-Origin"], "https://songsrec.vercel.app");
  assert.equal(localHeaders["Access-Control-Allow-Headers"], "Content-Type, Authorization");
  assert.equal("Access-Control-Allow-Credentials" in localHeaders, false);
  assert.equal(localHeaders.Vary, "Origin");
  assert.equal(deployedHeaders.Vary, "Origin");
  assert.equal(fallbackHeaders.Vary, "Origin");
});
