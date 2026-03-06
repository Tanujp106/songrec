export function extractPlaylistId(input: string): string | null {
  const trimmed = input.trim();

  const urlMatch = trimmed.match(/playlist\/([a-zA-Z0-9]+)(\?.*)?$/);
  if (urlMatch) return urlMatch[1];

  const uriMatch = trimmed.match(/^spotify:playlist:([a-zA-Z0-9]+)$/);
  if (uriMatch) return uriMatch[1];

  const idMatch = trimmed.match(/^[a-zA-Z0-9]{10,}$/);
  if (idMatch) return trimmed;

  return null;
}


export function normalizeMoodArray(input: unknown): string[] {
  if (!Array.isArray(input)) return [];
  const normalized = input
    .map((m) => (typeof m === "string" ? m.trim().toLowerCase() : ""))
    .filter((m) => m.length > 0);
  return Array.from(new Set(normalized));
}

export const ALLOWED_MOODS = new Set([
  "party",
  "feel-good",
  "soft",
  "indie",
  "nostalgic",
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
