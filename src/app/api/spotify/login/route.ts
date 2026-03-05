import { NextResponse } from "next/server";

export const runtime = "nodejs";

function requireAdminKeyIfConfigured(request: Request) {
  const configured = process.env.SONGREC_ADMIN_KEY;
  if (!configured) return;

  const { searchParams } = new URL(request.url);
  const provided =
    request.headers.get("x-admin-key") ?? searchParams.get("admin_key");
  if (!provided || provided !== configured) {
    throw new Error("Unauthorized");
  }
}

function randomState() {
  return Buffer.from(crypto.getRandomValues(new Uint8Array(16))).toString(
    "hex"
  );
}

export async function GET(request: Request) {
  try {
    requireAdminKeyIfConfigured(request);

    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

    if (!clientId || !redirectUri) {
      return NextResponse.json(
        {
          error:
            "Missing SPOTIFY_CLIENT_ID or SPOTIFY_REDIRECT_URI environment variables"
        },
        { status: 500 }
      );
    }

    const scope =
      process.env.SPOTIFY_OAUTH_SCOPES ??
      "playlist-read-private playlist-read-collaborative";

    const state = randomState();
    const authUrl = new URL("https://accounts.spotify.com/authorize");
    authUrl.searchParams.set("client_id", clientId);
    authUrl.searchParams.set("response_type", "code");
    authUrl.searchParams.set("redirect_uri", redirectUri);
    authUrl.searchParams.set("scope", scope);
    authUrl.searchParams.set("state", state);

    const response = NextResponse.redirect(authUrl.toString());
    response.cookies.set("spotify_oauth_state", state, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 10 * 60,
      path: "/"
    });

    return response;
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
