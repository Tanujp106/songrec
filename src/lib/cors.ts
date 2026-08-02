export function corsHeaders(requestOrigin?: string | null) {
  const allowedOrigins = [
    "https://songsrec.vercel.app",
    "https://songrec.tanujpatel.design",
    "http://localhost:3000",
    "http://localhost:5173"
  ];

  // Never reflect an untrusted Origin. The fallback keeps direct/non-browser
  // requests compatible while browsers still cannot read a response from an
  // unapproved origin.
  const origin = requestOrigin && allowedOrigins.includes(requestOrigin)
    ? requestOrigin
    : allowedOrigins[0];

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    Vary: "Origin"
  };
}
