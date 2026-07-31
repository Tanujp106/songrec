import assert from "node:assert/strict";
import test from "node:test";

import { jsonInternalError } from "../src/lib/http";

test("returns a stable 500 response without provider details", async () => {
  const response = jsonInternalError();

  assert.equal(response.status, 500);
  assert.deepEqual(await response.json(), { error: "Internal server error" });
});
