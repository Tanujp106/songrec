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

export async function GET(request: Request) {
  try {
    requireAdminKeyIfConfigured(request);

    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    const cookieState =
      request.headers
        .get("cookie")
        ?.split(";")
        .map((c) => c.trim())
        .find((c) => c.startsWith("spotify_oauth_state="))
        ?.split("=")[1] ?? null;

    if (!code) {
      return NextResponse.json({ error: "Missing code" }, { status: 400 });
    }

    if (!state || !cookieState || state !== cookieState) {
      return NextResponse.json({ error: "Invalid state" }, { status: 400 });
    }

    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

    if (!clientId || !clientSecret || !redirectUri) {
      return NextResponse.json(
        {
          error:
            "Missing SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, or SPOTIFY_REDIRECT_URI"
        },
        { status: 500 }
      );
    }

    const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString(
      "base64"
    );

    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${authHeader}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri
      }).toString()
    });

    if (!tokenResponse.ok) {
      const message = await tokenResponse.text();
      return NextResponse.json(
        { error: `Token exchange failed: ${message}` },
        { status: 500 }
      );
    }

    const data = (await tokenResponse.json()) as {
      access_token: string;
      token_type: string;
      scope?: string;
      expires_in: number;
      refresh_token?: string;
    };

    const response = NextResponse.json({
      access_token: data.access_token,
      expires_in: data.expires_in,
      refresh_token: data.refresh_token,
      scope: data.scope
    });

    // Clear state cookie.
    response.cookies.set("spotify_oauth_state", "", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
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
