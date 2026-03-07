export function corsHeaders() {
  const origin = (process.env.CORS_ORIGIN ?? "").trim();
  return {
    "Access-Control-Allow-Origin": origin.length > 0 ? origin : "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}
