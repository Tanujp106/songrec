import assert from "node:assert/strict";
import test from "node:test";

import { createRequestGuard } from "../frontend/src/app/lib/request-guard";

test("allows only one active request until it is released", () => {
  const guard = createRequestGuard();

  const firstRequest = guard.begin();
  assert.notEqual(firstRequest, null);
  assert.equal(guard.begin(), null);
  guard.release(firstRequest!);
  assert.notEqual(guard.begin(), null);
});

test("cancelling invalidates a late request without releasing a newer one", () => {
  const guard = createRequestGuard();
  const firstRequest = guard.begin();
  assert.notEqual(firstRequest, null);

  guard.cancel();
  assert.equal(guard.isCurrent(firstRequest!), false);

  const secondRequest = guard.begin();
  assert.notEqual(secondRequest, null);
  guard.release(firstRequest!);
  assert.equal(guard.isCurrent(secondRequest!), true);
});
