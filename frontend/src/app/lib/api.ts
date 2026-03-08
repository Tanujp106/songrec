export type SongRecommendation = {
  song_name: string;
  artist: string[];
  album_image: string | null;
  spotify_url: string | null;
  popularity: number;
  release_year: number | null;
  duration_ms: number | null;
  album_name: string | null;
  album_id: string | null;
  release_date: string | null;
  release_date_precision: string | null;
};

const API_BASE =
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ??
  (import.meta.env.PROD ? "" : "http://localhost:3001");

const ALL_MOODS = [
  "party", "feel-good", "soft", "indie",
  "nostalgic", "sad", "love", "hiphop",
] as const;

/** Convert Spotify 640px URL to 64px thumbnail (~2KB instead of ~30KB) */
export function toThumb(url: string): string {
  return url.includes("ab67616d0000b273")
    ? url.replace("ab67616d0000b273", "ab67616d00004851")
    : url;
}

export async function fetchRecommendation(
  mood: string,
  sliderValue: number
): Promise<SongRecommendation> {
  const url = `${API_BASE}/api/get-song?mood=${encodeURIComponent(
    mood
  )}&sliderValue=${encodeURIComponent(String(sliderValue))}`;

  let response: Response;
  try {
    response = await fetch(url, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Network error";
    throw new Error(
      `Failed to reach API at ${API_BASE || "(same origin)"}: ${message}`
    );
  }

  const contentType = response.headers.get("content-type") ?? "";
  let data: unknown = null;
  if (contentType.includes("application/json")) {
    data = await response.json().catch(() => null);
  } else {
    data = await response.text().catch(() => null);
  }
  if (!response.ok) {
    let message =
      typeof (data as { error?: string } | null)?.error === "string"
        ? (data as { error: string }).error
        : typeof data === "string" && data.length > 0
          ? data
          : "Failed to fetch song.";
    if (typeof data === "string" && /<html|<!doctype/i.test(data)) {
      message = `Server error (${response.status}). Check API logs.`;
    }
    throw new Error(message);
  }

  return data as SongRecommendation;
}

export async function fetchMoodImages(
  mood: string,
  limit = 80
): Promise<string[]> {
  const url = `${API_BASE}/api/get-album-images?mood=${encodeURIComponent(
    mood
  )}&limit=${encodeURIComponent(String(limit))}`;

  let response: Response;
  try {
    response = await fetch(url, {
      headers: { Accept: "application/json" },
      // Allow browser to cache the URL list — images don't change often
    });
  } catch {
    return [];
  }

  const contentType = response.headers.get("content-type") ?? "";
  const data = contentType.includes("application/json")
    ? await response.json().catch(() => ({}))
    : {};
  if (!response.ok) return [];

  const images = Array.isArray(data?.images) ? data.images : [];
  return images
    .filter((img: unknown) => typeof img === "string")
    .map((img: string) => toThumb(img));
}

/**
 * Fetch images for ALL moods in parallel on app mount.
 * Returns a Map<mood, thumbnailUrl[]>.
 * Each API call is ~1KB JSON. 8 calls fire simultaneously.
 */
export async function fetchAllMoodImages(
  limit = 80
): Promise<Map<string, string[]>> {
  const results = await Promise.allSettled(
    ALL_MOODS.map(async (mood) => {
      const images = await fetchMoodImages(mood, limit);
      return { mood, images };
    })
  );

  const map = new Map<string, string[]>();
  for (const result of results) {
    if (result.status === "fulfilled") {
      map.set(result.value.mood, result.value.images);
    }
  }
  return map;
}

/**
 * Preload image files into browser cache.
 * Priority batch: first `priorityCount` images load with await.
 * Remaining images fire-and-forget in background.
 */
export function preloadImageFiles(
  urls: string[],
  priorityCount = 20
): Promise<void> {
  const priority = urls.slice(0, priorityCount);
  const rest = urls.slice(priorityCount);

  // Fire background ones immediately (no await)
  rest.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  // Await priority batch so first visible tiles are cached
  return Promise.all(
    priority.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        })
    )
  ).then(() => undefined);
}
