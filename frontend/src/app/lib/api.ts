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

const viteEnv = (import.meta as ImportMeta & {
  env?: { VITE_API_BASE_URL?: string; PROD?: boolean };
}).env;

const API_BASE =
  viteEnv?.VITE_API_BASE_URL ??
  (viteEnv?.PROD ? "" : "http://localhost:3001");

const ALL_MOODS = [
  "party", "feel-good", "soft", "indie",
  "retro", "sad", "love", "hiphop",
] as const;

const FALLBACK_SONGS: Record<string, SongRecommendation> = {
  party: {
    song_name: "Levitating",
    artist: ["Dua Lipa"],
    album_image: "https://i.scdn.co/image/ab67616d0000b273d4daf28d55fe4197ede848be",
    spotify_url: "https://open.spotify.com/track/39LLxExYz6ewLAo9BPVTTA",
    popularity: 85,
    release_year: 2020,
    duration_ms: 203064,
    album_name: "Future Nostalgia",
    album_id: "5lKlFlReHOLShQKyRv6AL9",
    release_date: "2020-03-27",
    release_date_precision: "day",
  },
  "feel-good": {
    song_name: "Here Comes the Sun",
    artist: ["The Beatles"],
    album_image: "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
    spotify_url: "https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2",
    popularity: 82,
    release_year: 1969,
    duration_ms: 185733,
    album_name: "Abbey Road",
    album_id: "0ETFjACtuP2ADo6LFhL6HN",
    release_date: "1969-09-26",
    release_date_precision: "day",
  },
  soft: {
    song_name: "Skinny Love",
    artist: ["Bon Iver"],
    album_image: "https://i.scdn.co/image/ab67616d0000b273a7d1a03d31c1a6f665cf6288",
    spotify_url: "https://open.spotify.com/track/2SrSdSvpminqmStGELCSNd",
    popularity: 76,
    release_year: 2008,
    duration_ms: 218427,
    album_name: "For Emma, Forever Ago",
    album_id: "4bJCKmpKEbOmig1lCBMz9r",
    release_date: "2008-02-19",
    release_date_precision: "day",
  },
  indie: {
    song_name: "Do I Wanna Know?",
    artist: ["Arctic Monkeys"],
    album_image: "https://i.scdn.co/image/ab67616d0000b2730c64e752dec4c08362cc4f3b",
    spotify_url: "https://open.spotify.com/track/5FVd6KXrgO9B3JPmGaZMoD",
    popularity: 87,
    release_year: 2013,
    duration_ms: 272394,
    album_name: "AM",
    album_id: "78bpIziExqiI9qztvNFlQu",
    release_date: "2013-09-09",
    release_date_precision: "day",
  },
  retro: {
    song_name: "Dreams",
    artist: ["Fleetwood Mac"],
    album_image: "https://i.scdn.co/image/ab67616d0000b273e52a59a28efa4773163d9a2b",
    spotify_url: "https://open.spotify.com/track/0ofHAoxe9vBkTCp2UQIavz",
    popularity: 83,
    release_year: 1977,
    duration_ms: 254573,
    album_name: "Rumours",
    album_id: "1bt6q2SruMsBtcerNVtpZB",
    release_date: "1977-02-04",
    release_date_precision: "day",
  },
  sad: {
    song_name: "Motion Sickness",
    artist: ["Phoebe Bridgers"],
    album_image: "https://i.scdn.co/image/ab67616d0000b2733e79e3388e41175bf16e20ab",
    spotify_url: "https://open.spotify.com/track/2bAZSDDKBLkdi3KlnPnEgb",
    popularity: 73,
    release_year: 2017,
    duration_ms: 256200,
    album_name: "Stranger in the Alps",
    album_id: "7JHDsNJOiIuhBbKBbGJulq",
    release_date: "2017-09-22",
    release_date_precision: "day",
  },
  love: {
    song_name: "At Last",
    artist: ["Etta James"],
    album_image: "https://i.scdn.co/image/ab67616d0000b27345c7f4be63e5361c4e8f4e78",
    spotify_url: "https://open.spotify.com/track/0m71tlxPsjVMPR9g3sJVud",
    popularity: 78,
    release_year: 1960,
    duration_ms: 181333,
    album_name: "At Last!",
    album_id: "3lLzlv2v3OPElEO63YVEHX",
    release_date: "1960-11-15",
    release_date_precision: "day",
  },
  hiphop: {
    song_name: "m.A.A.d city",
    artist: ["Kendrick Lamar", "MC Eiht"],
    album_image: "https://i.scdn.co/image/ab67616d0000b273d28d2ebdedb220e479743797",
    spotify_url: "https://open.spotify.com/track/4MV4cRGSFWoYmmhdKkGaOH",
    popularity: 74,
    release_year: 2012,
    duration_ms: 340000,
    album_name: "good kid, m.A.A.d city",
    album_id: "3DGQ1iZ9XKUQxAUWjfC34w",
    release_date: "2012-10-22",
    release_date_precision: "day",
  },
};

/** Convert Spotify 640px URL to 64px thumbnail (~2KB instead of ~30KB) */
export function toThumb(url: string): string {
  return url.includes("ab67616d0000b273")
    ? url.replace("ab67616d0000b273", "ab67616d00004851")
    : url;
}

function getFallback(mood: string): SongRecommendation {
  const key = mood === "nostalgic" ? "retro" : mood;
  return FALLBACK_SONGS[key] ?? FALLBACK_SONGS.indie;
}

function isNullableString(value: unknown): value is string | null {
  return value === null || typeof value === "string";
}

export function isSongRecommendation(value: unknown): value is SongRecommendation {
  if (!value || typeof value !== "object") return false;
  const song = value as Record<string, unknown>;
  return (
    typeof song.song_name === "string" &&
    song.song_name.length > 0 &&
    Array.isArray(song.artist) &&
    song.artist.length > 0 &&
    song.artist.every((artist) => typeof artist === "string") &&
    isNullableString(song.album_image) &&
    isNullableString(song.spotify_url) &&
    typeof song.popularity === "number" &&
    (song.release_year === null || typeof song.release_year === "number") &&
    (song.duration_ms === null || typeof song.duration_ms === "number") &&
    isNullableString(song.album_name) &&
    isNullableString(song.album_id) &&
    isNullableString(song.release_date) &&
    isNullableString(song.release_date_precision)
  );
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
  } catch {
    return getFallback(mood);
  }

  const contentType = response.headers.get("content-type") ?? "";
  let data: unknown = null;
  if (contentType.includes("application/json")) {
    data = await response.json().catch(() => null);
  } else {
    data = await response.text().catch(() => null);
  }
  if (!response.ok) {
    return getFallback(mood);
  }

  return isSongRecommendation(data) ? data : getFallback(mood);
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
