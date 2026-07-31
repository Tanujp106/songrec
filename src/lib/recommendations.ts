export type RecommendationCandidate = {
  song_name: string;
  artist: string[];
  album_id: string | null;
  spotify_url: string | null;
};

function getTrackKey(song: RecommendationCandidate): string {
  if (song.spotify_url) return `url:${song.spotify_url}`;
  return `track:${song.song_name.toLowerCase()}::${song.artist.join("|").toLowerCase()}`;
}

function pickWeightedIndex(weights: number[], random: () => number): number {
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  if (total <= 0) return Math.floor(random() * weights.length);

  let threshold = random() * total;
  for (let index = 0; index < weights.length; index += 1) {
    threshold -= weights[index];
    if (threshold <= 0) return index;
  }

  return weights.length - 1;
}

export function selectUniqueRecommendations<T extends RecommendationCandidate>(
  candidates: T[],
  weights: number[],
  limit = 5,
  random: () => number = Math.random
): T[] {
  const remaining = candidates.map((candidate, index) => ({ candidate, weight: weights[index] ?? 0 }));
  const selected: T[] = [];
  const seen = new Set<string>();

  while (remaining.length > 0 && selected.length < limit) {
    const index = pickWeightedIndex(remaining.map((item) => item.weight), random);
    const [{ candidate }] = remaining.splice(index, 1);
    const trackKey = getTrackKey(candidate);
    if (seen.has(trackKey)) continue;
    seen.add(trackKey);
    selected.push(candidate);
  }

  return selected;
}
