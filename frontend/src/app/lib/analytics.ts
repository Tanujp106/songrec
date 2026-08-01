export type MeasurementEnv = {
  PROD?: boolean;
  VITE_GA_MEASUREMENT_ID?: string;
  VITE_CLARITY_PROJECT_ID?: string;
};

export type MeasurementConfig = {
  googleMeasurementId?: string;
  clarityProjectId?: string;
};

type MeasurementWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  clarity?: ((...args: unknown[]) => void) & { q?: unknown[][] };
  __songrecMeasurements?: {
    google?: boolean;
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
    googleMeasurementId: normalizeId(env.VITE_GA_MEASUREMENT_ID),
    clarityProjectId: normalizeId(env.VITE_CLARITY_PROJECT_ID),
  };

  return config.googleMeasurementId || config.clarityProjectId ? config : null;
}

function installGoogleAnalytics(measurementId: string) {
  const analyticsWindow = window as MeasurementWindow;
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.gtag = analyticsWindow.gtag || ((...args: unknown[]) => {
    analyticsWindow.dataLayer?.push(args);
  });

  if (!analyticsWindow.__songrecMeasurements?.google) {
    analyticsWindow.gtag("js", new Date());
    analyticsWindow.gtag("config", measurementId, { send_page_view: true });
    analyticsWindow.__songrecMeasurements = {
      ...analyticsWindow.__songrecMeasurements,
      google: true,
    };
  }

  if (!document.getElementById("songrec-google-tag")) {
    const script = document.createElement("script");
    script.id = "songrec-google-tag";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }
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
  if (config.googleMeasurementId) installGoogleAnalytics(config.googleMeasurementId);
  if (config.clarityProjectId) installClarity(config.clarityProjectId);
}
