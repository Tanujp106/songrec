import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const frontendRoot = join(process.cwd(), "frontend");
const publicRoot = join(frontendRoot, "public");
const siteUrl = "https://songrec.tanujpatel.design";

function readFrontendFile(path: string) {
  return readFileSync(join(frontendRoot, path), "utf8");
}

function readPublicFile(path: string) {
  return readFileSync(join(publicRoot, path), "utf8");
}

function attribute(tag: string, name: string) {
  return new RegExp(`${name}=["']([^"']+)["']`, "i").exec(tag)?.[1];
}

function metaContent(html: string, key: string) {
  const tag = html.match(new RegExp(`<meta[^>]+(?:name|property)=["']${key}["'][^>]*>`, "i"))?.[0];
  return tag ? attribute(tag, "content") : undefined;
}

test("defines complete canonical and social metadata in the homepage", () => {
  const html = readFrontendFile("index.html");
  const canonicalTag = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i)?.[0];

  assert.equal(attribute(canonicalTag ?? "", "href"), `${siteUrl}/`);
  assert.equal(metaContent(html, "og:type"), "website");
  assert.equal(metaContent(html, "og:url"), `${siteUrl}/`);
  assert.equal(metaContent(html, "og:image"), `${siteUrl}/og-image.png`);
  assert.equal(metaContent(html, "twitter:card"), "summary_large_image");
  assert.equal(metaContent(html, "twitter:image"), `${siteUrl}/og-image.png`);
  assert.match(metaContent(html, "description") ?? "", /mood/i);
});

test("publishes crawl controls and a factual public context page", () => {
  const robots = readPublicFile("robots.txt");
  const sitemap = readPublicFile("sitemap.xml");
  const about = readPublicFile("about/index.html");

  assert.match(robots, /Disallow: \/api\//);
  assert.match(robots, new RegExp(`Sitemap: ${siteUrl}/sitemap.xml`));
  assert.match(sitemap, new RegExp(`${siteUrl}/`));
  assert.match(sitemap, new RegExp(`${siteUrl}/about/`));
  assert.match(about, /What is Songrec\?/);
  assert.match(about, /How does Songrec recommend music\?/);
});

test("publishes validated app context without inventing ratings or reviews", () => {
  const html = readFrontendFile("index.html");
  const jsonLd = html.match(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i)?.[1];

  assert.ok(jsonLd, "expected JSON-LD in the homepage");
  const data = JSON.parse(jsonLd);
  const graph = data["@graph"] as Array<Record<string, unknown>>;
  const app = graph.find((entry) => entry["@type"] === "WebApplication");

  assert.equal(data["@context"], "https://schema.org");
  assert.equal(app?.name, "Songrec");
  assert.equal(app?.url, `${siteUrl}/`);
  assert.equal(app?.applicationCategory, "MusicApplication");
  assert.equal("aggregateRating" in (app ?? {}), false);
  assert.equal("review" in (app ?? {}), false);
  assert.equal(existsSync(join(publicRoot, "og-image.png")), true);
  assert.equal(existsSync(join(publicRoot, "site.webmanifest")), true);
});

test("ships a 1200 by 630 Open Graph image", () => {
  const image = readFileSync(join(publicRoot, "og-image.png"));

  assert.equal(image.readUInt32BE(16), 1200);
  assert.equal(image.readUInt32BE(20), 630);
});
