import { createClient } from "@supabase/supabase-js";
import { requireEnv } from "./env";

let cachedClient: ReturnType<typeof createClient> | null = null;

export function getSupabaseClient() {
  if (cachedClient) return cachedClient;

  const supabaseUrl = requireEnv("SUPABASE_URL");
  const supabaseSecretKey = requireEnv("SUPABASE_SECRET_KEY");

  cachedClient = createClient(supabaseUrl, supabaseSecretKey, {
    auth: { persistSession: false }
  });

  return cachedClient;
}
