# SEO, AEO, GEO, and README Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans (recommended) to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Make Songrec's public documentation and answer-oriented content accurately explain the product to people, search engines, and generative systems without unsupported claims.

**Architecture:** Keep the change static and dependency-free. The root README documents the two-process app; `/about/` and `llms.txt` provide crawlable, question-led context; JSON-LD describes the same visible answers.

**Tech Stack:** Markdown, static HTML, Schema.org JSON-LD, Vite public assets, Node.js tests via `tsx`.

## Global Constraints

- Keep Google Analytics and Microsoft Clarity out of this phase.
- Use `https://songrec.tanujpatel.design` in public SEO documents.
- Do not invent ratings, reviews, testimonials, social profiles, or performance claims.
- Preserve “handpicked songs for every mood” and unrelated uncommitted carousel changes.
- Do not add dependencies or change application behavior.

---

### Task 1: Rewrite the README

**Files:** Modify `README.md`.

**Produces:** An accurate GitHub source of truth for product, architecture, setup, deployment, SEO, and instrumentation.

- [ ] Replace the opening with: “Handpicked songs for every mood. Choose a vibe, tune how popular you want the pick to be, and get a track from Songrec's curated Spotify collection.”
- [ ] Document the eight moods: party, feel-good, soft, indie, retro, sad, love, and hiphop.
- [ ] Document the popularity slider, up to five returned recommendations, Spotify links when available, and starting over.
- [ ] Document the real architecture: `React + Vite frontend (3000) → Next.js API server (3001) → Spotify Web API and Supabase`.
- [ ] Explain `frontend/`, `src/`, `VITE_API_BASE_URL`, server-only credentials, Node.js 18+, and `npm run dev`, `npm test`, `npm run typecheck`, and `cd frontend && npm run build`.
- [ ] Document the canonical site, `/about/`, `/robots.txt`, `/sitemap.xml`, and `/llms.txt`. State that Vercel Analytics is mounted while Google Analytics and Microsoft Clarity remain pending.
- [ ] Run `rg -n "TBD|TODO|placeholder|coming soon|fake|rating|review" README.md` and `git diff --check`.

### Task 2: Strengthen factual AEO/GEO context

**Files:** Modify `frontend/public/about/index.html`, `frontend/public/llms.txt`, and `tests/seo.test.ts`.

**Produces:** Direct answers plus validated `WebPage`/`FAQPage` JSON-LD matching the visible content.

- [ ] Add failing tests that parse About-page JSON-LD, find `FAQPage`, require the exact questions `What is Songrec?`, `How does Songrec recommend music?`, and `Where do recommendations come from?`, require non-empty answers without rating/review/testimonial claims, and require `llms.txt` headings `What is Songrec?`, `How does Songrec work?`, and `Where do recommendations come from?`.
- [ ] Run `npx tsx --test tests/seo.test.ts`; the new assertions must fail before implementation.
- [ ] Make the visible About answers concise and self-contained:

```html
<h2>What is Songrec?</h2>
<p>Songrec is a web app that turns a mood choice and a popularity preference into a music recommendation from a handpicked Spotify collection.</p>

<h2>How does Songrec recommend music?</h2>
<p>Choose a mood, move the popularity slider, and ask Songrec for a recommendation. Songrec uses those two inputs to select matching tracks.</p>

<h2>Where do recommendations come from?</h2>
<p>Recommendations come from a handpicked Spotify collection organized around Songrec's mood and popularity choices.</p>
```

- [ ] Add one About-page `application/ld+json` graph containing a canonical `WebPage` and `FAQPage`; question names and accepted answers must match the visible text. Do not add `aggregateRating`, `review`, `sameAs`, or invented author data.
- [ ] Rewrite `llms.txt` with `Direct answers`, `Public pages`, and `Scope notes` sections, including the three factual answers and links to the app and About page.
- [ ] Run `npx tsx --test tests/seo.test.ts`; all SEO tests must pass.

### Task 3: Verify the merged application

**Files:** Test `tests/*.test.ts`; inspect `frontend/dist/`.

- [ ] Run `npm test`; expect zero failures.
- [ ] Run `npm run typecheck`; expect root and frontend checks to pass.
- [ ] Run `cd frontend && npm run build`; expect the index, About page, `llms.txt`, robots, sitemap, and approved OG GIF in `dist/`.
- [ ] Run `test -f frontend/dist/about/index.html && test -f frontend/dist/llms.txt && test -f frontend/dist/robots.txt && test -f frontend/dist/sitemap.xml && test -f frontend/dist/og-image-mascot-smooth-50fps.gif && git diff --check`.
