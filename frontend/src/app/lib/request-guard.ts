export function createRequestGuard() {
  let nextRequestId = 0;
  let activeRequestId: number | null = null;

  return {
    begin() {
      if (activeRequestId !== null) return null;
      const requestId = ++nextRequestId;
      activeRequestId = requestId;
      return requestId;
    },
    isCurrent(requestId: number) {
      return activeRequestId === requestId;
    },
    release(requestId: number) {
      if (activeRequestId === requestId) activeRequestId = null;
    },
    cancel() {
      activeRequestId = null;
    }
  };
}
