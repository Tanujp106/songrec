import { NextResponse } from "next/server";

export function jsonError(message: string, status = 400, details?: unknown) {
  const body: { error: string; details?: unknown } = { error: message };
  if (process.env.NODE_ENV !== "production" && details !== undefined) {
    body.details = details;
  }

  return NextResponse.json(
    body,
    { status }
  );
}

export function jsonInternalError(init?: ResponseInit) {
  return NextResponse.json({ error: "Internal server error" }, {
    ...init,
    status: 500
  });
}

export async function parseJson<T = unknown>(
  request: Request,
  maxBytes = 16 * 1024
): Promise<T | null> {
  try {
    const contentLength = request.headers.get("content-length");
    if (contentLength && Number(contentLength) > maxBytes) return null;

    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > maxBytes) return null;
    return JSON.parse(body) as T;
  } catch {
    return null;
  }
}
