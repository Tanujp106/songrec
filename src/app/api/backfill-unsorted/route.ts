import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const runtime = "nodejs";

// One-off helper: assign a default mood to already-imported songs that have no moods.
export async function POST() {
  // First fetch ids needing update (Supabase doesn't support easy OR updates on arrays).
  const { data, error } = await supabase
    .from("songs")
    .select("id, moods")
    .limit(5000);

  if (error) {
    return NextResponse.json(
      { error: `Supabase select failed: ${error.message}` },
      { status: 500 }
    );
  }

  const idsToUpdate = (data ?? [])
    .filter((row) => !row.moods || row.moods.length === 0)
    .map((row) => row.id);

  if (idsToUpdate.length === 0) {
    return NextResponse.json({ updated: 0 });
  }

  // Chunk updates to avoid URL/statement limits.
  const chunkSize = 200;
  let updated = 0;

  for (let i = 0; i < idsToUpdate.length; i += chunkSize) {
    const chunk = idsToUpdate.slice(i, i + chunkSize);

    const { error: updateError } = await supabase
      .from("songs")
      .update({ moods: ["unsorted"] })
      .in("id", chunk);

    if (updateError) {
      return NextResponse.json(
        { error: `Supabase update failed: ${updateError.message}` },
        { status: 500 }
      );
    }

    updated += chunk.length;
  }

  return NextResponse.json({ updated });
}
