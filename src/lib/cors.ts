export function corsHeaders(requestOrigin?: string | null) {
  const allowedOrigins = [
    "https://songsrec.vercel.app",
    "https://songrec.tanujpatel.design",
    "http://localhost:3000",
    "http://localhost:5173"
  ];

  // If requestOrigin is provided and is in the allowed list, use it
  // Otherwise, use the first allowed origin or "*" as fallback
  const origin = requestOrigin && allowedOrigins.includes(requestOrigin)
    ? requestOrigin
    : allowedOrigins[0];

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Credentials": "true",
    Vary: "Origin"
  };
}
