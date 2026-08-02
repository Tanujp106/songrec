import { timingSafeEqual } from "crypto";

function readBearerToken(request: Request): string | null {
  const authorization = request.headers.get("authorization") ?? "";
  if (!authorization.startsWith("Bearer ")) return null;

  const token = authorization.slice("Bearer ".length).trim();
  return token.length > 0 ? token : null;
}

export function isImportRequestAuthorized(request: Request): boolean {
  const expectedToken = (process.env.IMPORT_API_TOKEN ?? "").trim();
  const providedToken = readBearerToken(request);

  if (!expectedToken || !providedToken) return false;

  const expected = Buffer.from(expectedToken);
  const provided = Buffer.from(providedToken);
  return expected.length === provided.length && timingSafeEqual(expected, provided);
}
