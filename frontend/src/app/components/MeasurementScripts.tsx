import { useEffect } from "react";
import { getMeasurementConfig, installMeasurements } from "../lib/analytics";

export function MeasurementScripts() {
  useEffect(() => {
    const config = getMeasurementConfig({
      PROD: import.meta.env.PROD,
      VITE_GA_MEASUREMENT_ID: import.meta.env.VITE_GA_MEASUREMENT_ID,
      VITE_CLARITY_PROJECT_ID: import.meta.env.VITE_CLARITY_PROJECT_ID,
    });

    if (config) installMeasurements(config);
  }, []);

  return null;
}
