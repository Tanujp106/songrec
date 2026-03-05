import { createClient } from "@supabase/supabase-js";
import { requireEnv } from "./env";

const supabaseUrl = requireEnv("SUPABASE_URL");
const supabaseSecretKey = requireEnv("SUPABASE_SECRET_KEY");

export const supabase = createClient(supabaseUrl, supabaseSecretKey, {
  auth: { persistSession: false }
});
