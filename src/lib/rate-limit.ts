type RateLimitOptions = {
  limit: number;
  windowMs: number;
};

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, RateLimitBucket>();
const activeRequests = new Map<string, number>();
let lastCleanupAt = 0;
const CLEANUP_INTERVAL_MS = 60_000;
const MAX_BUCKETS = 10_000;

function getClientKey(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  const address = (forwardedFor || realIp || "anonymous").slice(0, 128);
  return address || "anonymous";
}

function cleanup(now: number) {
  if (now - lastCleanupAt < CLEANUP_INTERVAL_MS) return;
  lastCleanupAt = now;

  for (const [key, bucket] of buckets.entries()) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }

  if (buckets.size > MAX_BUCKETS) {
    const overflow = buckets.size - MAX_BUCKETS;
    const oldest = Array.from(buckets.entries()).sort(
      (a, b) => a[1].resetAt - b[1].resetAt
    );
    for (let index = 0; index < overflow; index += 1) {
      buckets.delete(oldest[index][0]);
    }
  }
}

export function checkRateLimit(
  request: Request,
  scope: string,
  options: RateLimitOptions,
  now = Date.now()
) {
  cleanup(now);

  const key = `${scope}:${getClientKey(request)}`;
  const current = buckets.get(key);
  const bucket = current && current.resetAt > now
    ? current
    : { count: 0, resetAt: now + options.windowMs };

  bucket.count += 1;
  buckets.set(key, bucket);

  const allowed = bucket.count <= options.limit;
  return {
    allowed,
    retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    remaining: Math.max(0, options.limit - bucket.count),
  };
}

export function resetRateLimitsForTests() {
  buckets.clear();
  lastCleanupAt = 0;
}

export function acquireConcurrencySlot(
  scope: string,
  limit: number
): (() => void) | null {
  const active = activeRequests.get(scope) ?? 0;
  if (active >= limit) return null;

  activeRequests.set(scope, active + 1);
  let released = false;
  return () => {
    if (released) return;
    released = true;

    const current = activeRequests.get(scope) ?? 0;
    if (current <= 1) activeRequests.delete(scope);
    else activeRequests.set(scope, current - 1);
  };
}

export function resetConcurrencyForTests() {
  activeRequests.clear();
}
