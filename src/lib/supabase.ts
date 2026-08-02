import { createClient } from "@supabase/supabase-js";
import { requireEnv } from "./env";

let cachedClient: ReturnType<typeof createClient> | null = null;
const SUPABASE_REQUEST_TIMEOUT_MS = 8_000;

function fetchWithTimeout(input: RequestInfo | URL, init?: RequestInit) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), SUPABASE_REQUEST_TIMEOUT_MS);
  const callerSignal = init?.signal;
  const abortFromCaller = () => controller.abort();

  if (callerSignal) {
    if (callerSignal.aborted) controller.abort();
    else callerSignal.addEventListener("abort", abortFromCaller, { once: true });
  }

  return globalThis.fetch(input, { ...init, signal: controller.signal }).finally(() => {
    clearTimeout(timeout);
    callerSignal?.removeEventListener("abort", abortFromCaller);
  });
}

export function getSupabaseClient() {
  if (cachedClient) return cachedClient;

  const supabaseUrl = requireEnv("SUPABASE_URL");
  const supabaseSecretKey = requireEnv("SUPABASE_SECRET_KEY");

  cachedClient = createClient(supabaseUrl, supabaseSecretKey, {
    auth: { persistSession: false },
    global: { fetch: fetchWithTimeout }
  });

  return cachedClient;
}
