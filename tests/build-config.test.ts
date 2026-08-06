import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

test("keeps root Next production typechecking separate from test and frontend sources", () => {
  const config = JSON.parse(readFileSync(join(process.cwd(), "tsconfig.json"), "utf8")) as {
    exclude?: string[];
  };

  assert.ok(config.exclude?.includes("tests"));
  assert.ok(config.exclude?.includes("frontend"));
});

test("keeps the development DialKit enabled when the root mounts it", () => {
  const appSource = readFileSync(
    join(process.cwd(), "frontend/src/app/App.tsx"),
    "utf8",
  );

  assert.match(appSource, /<DialRoot\b/);
  assert.doesNotMatch(appSource, /productionEnabled=\{false\}/);
});
