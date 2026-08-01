export type MeasurementEnv = {
  PROD?: boolean;
  VITE_CLARITY_PROJECT_ID?: string;
};

export type MeasurementConfig = {
  clarityProjectId?: string;
};

type MeasurementWindow = Window & {
  clarity?: ((...args: unknown[]) => void) & { q?: unknown[][] };
  __songrecMeasurements?: {
    clarity?: boolean;
  };
};

function normalizeId(value: string | undefined): string | undefined {
  const normalized = value?.trim();
  return normalized || undefined;
}

export function getMeasurementConfig(env: MeasurementEnv): MeasurementConfig | null {
  if (!env.PROD) return null;

  const config: MeasurementConfig = {
    clarityProjectId: normalizeId(env.VITE_CLARITY_PROJECT_ID),
  };

  return config.clarityProjectId ? config : null;
}

function installClarity(projectId: string) {
  const analyticsWindow = window as MeasurementWindow;

  if (!analyticsWindow.__songrecMeasurements?.clarity) {
    const clarity = ((...args: unknown[]) => {
      clarity.q = clarity.q || [];
      clarity.q.push(args);
    }) as NonNullable<MeasurementWindow["clarity"]>;

    analyticsWindow.clarity = analyticsWindow.clarity || clarity;
    analyticsWindow.__songrecMeasurements = {
      ...analyticsWindow.__songrecMeasurements,
      clarity: true,
    };
  }

  if (!document.getElementById("songrec-clarity-tag")) {
    const script = document.createElement("script");
    script.id = "songrec-clarity-tag";
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${encodeURIComponent(projectId)}`;
    document.head.appendChild(script);
  }
}

export function installMeasurements(config: MeasurementConfig) {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (config.clarityProjectId) installClarity(config.clarityProjectId);
}
