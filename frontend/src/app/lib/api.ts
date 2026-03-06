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
  const base = (import.meta.env.VITE_API_BASE as string | undefined) ?? "";
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
