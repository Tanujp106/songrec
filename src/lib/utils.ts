export function extractPlaylistId(input: string): string | null {
  const trimmed = input.trim();

  try {
    const url = new URL(trimmed);
    if (
      url.protocol === "https:" &&
      (url.hostname === "open.spotify.com" || url.hostname === "play.spotify.com")
    ) {
      const urlMatch = url.pathname.match(/^\/playlist\/([a-zA-Z0-9]+)$/);
      if (urlMatch) return urlMatch[1];
    }
  } catch {
    // Fall through to the Spotify URI and raw-ID formats below.
  }

  const uriMatch = trimmed.match(/^spotify:playlist:([a-zA-Z0-9]+)$/);
  if (uriMatch) return uriMatch[1];

  const idMatch = trimmed.match(/^[a-zA-Z0-9]{10,}$/);
  if (idMatch) return trimmed;

  return null;
}

function safeHttpsUrl(
  value: unknown,
  allowedHosts: readonly string[],
  pathPrefix?: string
): string | null {
  if (typeof value !== "string" || value.length > 2_048) return null;

  try {
    const url = new URL(value);
    if (
      url.protocol !== "https:" ||
      !allowedHosts.includes(url.hostname) ||
      (pathPrefix && !url.pathname.startsWith(pathPrefix))
    ) {
      return null;
    }
    return url.toString();
  } catch {
    return null;
  }
}

export function normalizeSpotifyTrackUrl(value: unknown): string | null {
  return safeHttpsUrl(value, ["open.spotify.com"], "/track/");
}

export function normalizeSpotifyImageUrl(value: unknown): string | null {
  return safeHttpsUrl(value, [
    "i.scdn.co",
    "mosaic.scdn.co",
    "image-cdn-ak.spotifycdn.com"
  ]);
}


const MOOD_ALIASES = new Map<string, string>([
  ["nostalgic", "retro"],
]);

export function normalizeMood(input: string): string {
  const trimmed = input.trim().toLowerCase();
  return MOOD_ALIASES.get(trimmed) ?? trimmed;
}

export function normalizeMoodArray(input: unknown): string[] {
  if (!Array.isArray(input)) return [];
  const normalized = input
    .map((m) => (typeof m === "string" ? normalizeMood(m) : ""))
    .filter((m) => m.length > 0);
  return Array.from(new Set(normalized));
}

export const ALLOWED_MOODS = new Set([
  "party",
  "feel-good",
  "soft",
  "indie",
  "retro",
  "sad",
  "love",
  "hiphop"
]);

export function filterAllowedMoods(moods: string[]): string[] {
  return moods.filter((m) => ALLOWED_MOODS.has(m));
}

export function mergeUnique(a: string[] = [], b: string[] = []): string[] {
  return Array.from(new Set([...a, ...b].map((m) => m.trim().toLowerCase())));
}

export function chunkArray<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}


export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function pickWeightedRandom<T extends { popularity?: number }>(
  items: T[],
  sliderValue: number
): T {
  const s = clamp(sliderValue, 0, 100) / 100;
  const weights = items.map((item) => {
    const p = clamp(item.popularity ?? 0, 0, 100) / 100;
    return s * p + (1 - s) * (1 - p);
  });

  const total = weights.reduce((sum, w) => sum + w, 0);
  if (total <= 0) {
    return items[Math.floor(Math.random() * items.length)];
  }

  let threshold = Math.random() * total;
  for (let i = 0; i < items.length; i += 1) {
    threshold -= weights[i];
    if (threshold <= 0) return items[i];
  }

  return items[items.length - 1];
}
