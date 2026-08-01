import assert from "node:assert/strict";
import test from "node:test";
import { getMeasurementConfig } from "../frontend/src/app/lib/analytics";

test("keeps measurement disabled outside production", () => {
  assert.equal(
    getMeasurementConfig({
      PROD: false,
      VITE_CLARITY_PROJECT_ID: "clarity-test",
    }),
    null,
  );
});

test("normalizes configured production measurement IDs", () => {
  assert.deepEqual(
    getMeasurementConfig({
      PROD: true,
      VITE_CLARITY_PROJECT_ID: " clarity-test ",
    }),
    {
      clarityProjectId: "clarity-test",
    },
  );
});

test("does not activate without at least one production ID", () => {
  assert.equal(getMeasurementConfig({ PROD: true }), null);
  assert.equal(getMeasurementConfig({ PROD: true, VITE_CLARITY_PROJECT_ID: "   " }), null);
});
