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
  assert.equal(metaContent(html, "og:image"), `${siteUrl}/og-image-mascot-smooth-50fps.gif`);
  assert.equal(metaContent(html, "og:image:type"), "image/gif");
  assert.equal(metaContent(html, "twitter:card"), "summary_large_image");
  assert.equal(metaContent(html, "twitter:image"), `${siteUrl}/og-image-mascot-smooth-50fps.gif`);
  assert.match(metaContent(html, "description") ?? "", /mood/i);
});

test("publishes one static Google tag on each public page", () => {
  const pages = [readFrontendFile("index.html"), readPublicFile("about/index.html")];

  for (const html of pages) {
    assert.equal((html.match(/googletagmanager\.com\/gtag\/js/g) ?? []).length, 1);
    assert.match(html, /googletagmanager\.com\/gtag\/js\?id=G-1KRY39MT4W/);
    assert.match(html, /gtag\(['"]config['"], ['"]G-1KRY39MT4W['"]\)/);
  }
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

test("publishes factual About-page answers and matching FAQ schema", () => {
  const about = readPublicFile("about/index.html");
  const llms = readPublicFile("llms.txt");
  const expectedQuestions = [
    "What is Songrec?",
    "How does Songrec recommend music?",
    "Where do recommendations come from?",
  ];
  const expectedAnswers = [
    "Songrec is a web app that turns a mood choice and a popularity preference into a music recommendation from a handpicked Spotify collection.",
    "Choose a mood, move the popularity slider, and ask Songrec for a recommendation. Songrec uses those two inputs to select matching tracks.",
    "Recommendations come from a handpicked Spotify collection organized around Songrec's mood and popularity choices.",
  ];
  const jsonLdBlocks = [...about.matchAll(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)]
    .map((match) => JSON.parse(match[1]));
  const graph = jsonLdBlocks.flatMap((block) => block["@graph"] ?? []);
  const webPage = graph.find((entry) => entry["@type"] === "WebPage");
  const faqPage = graph.find((entry) => entry["@type"] === "FAQPage");
  const questions = faqPage?.mainEntity as Array<Record<string, unknown>> | undefined;

  for (const answer of expectedAnswers) assert.match(about, new RegExp(answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.equal(webPage?.url, `${siteUrl}/about/`);
  assert.deepEqual(questions?.map((question) => question.name), expectedQuestions);
  assert.deepEqual(questions?.map((question) => question.acceptedAnswer && (question.acceptedAnswer as Record<string, unknown>).text), expectedAnswers);
  assert.equal(/aggregateRating|review|testimonial/i.test(JSON.stringify(faqPage)), false);
  assert.match(llms, /^## Direct answers$/m);
  assert.match(llms, /^### What is Songrec\?$/m);
  assert.match(llms, /^### How does Songrec work\?$/m);
  assert.match(llms, /^### Where do recommendations come from\?$/m);
  assert.match(llms, /^## Public pages$/m);
  assert.match(llms, /^## Scope notes$/m);
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
  assert.equal(app?.image, `${siteUrl}/og-image-mascot-smooth-50fps.gif`);
  assert.equal("aggregateRating" in (app ?? {}), false);
  assert.equal("review" in (app ?? {}), false);
  assert.equal(existsSync(join(publicRoot, "og-image.png")), true);
  assert.equal(existsSync(join(publicRoot, "site.webmanifest")), true);
});

test("ships a 1200 by 630 Open Graph image", () => {
  const image = readFileSync(join(publicRoot, "og-image.png"));

  assert.equal(image.readUInt32BE(16), 1200);
  assert.equal(image.readUInt32BE(20), 630);

  const gif = readFileSync(join(publicRoot, "og-image-mascot-smooth-50fps.gif"));
  assert.equal(gif.subarray(0, 6).toString("ascii"), "GIF89a");
  assert.equal(gif.readUInt16LE(6), 1200);
  assert.equal(gif.readUInt16LE(8), 630);
});
