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

export async function fetchRecommendation(
  mood: string,
  sliderValue: number
): Promise<SongRecommendation> {
  const base =
    (import.meta.env.VITE_API_BASE_URL as string | undefined) ??
    "http://localhost:3001";
  const url = `${base}/api/get-song?mood=${encodeURIComponent(
    mood
  )}&sliderValue=${encodeURIComponent(String(sliderValue))}`;

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    cache: "no-store"
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message =
      typeof data?.error === "string" ? data.error : "Failed to fetch song.";
    throw new Error(message);
  }

  return data as SongRecommendation;
}

export async function fetchMoodImages(
  mood: string,
  limit = 24
): Promise<string[]> {
  const base =
    (import.meta.env.VITE_API_BASE_URL as string | undefined) ??
    "http://localhost:3001";
  const url = `${base}/api/get-album-images?mood=${encodeURIComponent(
    mood
  )}&limit=${encodeURIComponent(String(limit))}`;

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    cache: "no-store"
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    return [];
  }

  const images = Array.isArray(data?.images) ? data.images : [];
  return images.filter((img) => typeof img === "string");
}
