import { useDialKit } from "dialkit";
export function useDiscoveryDeckDial() {
  const values = useDialKit("Curated deck", {
    layout: {
      cardWidthVw: [80, 60, 95, 1] as [number, number, number, number],
      cardHeightVh: [55, 38, 70, 1] as [number, number, number, number],
      cardMaxPx: [560, 320, 680, 4] as [number, number, number, number],
      topGap: [40, 0, 72, 2] as [number, number, number, number],
      detailGap: [12, 0, 32, 1] as [number, number, number, number],
      detailHeight: [120, 80, 180, 4] as [number, number, number, number],
      radius: [24, 0, 56, 2] as [number, number, number, number],
      cardInset: [12, 0, 18, 1] as [number, number, number, number],
      chamberPeek: [20, 8, 96, 2] as [number, number, number, number],
    },
    timing: {
      chamberDelay: [1600, 0, 2400, 50] as [number, number, number, number],
      findingDuration: [2500, 400, 2600, 50] as [number, number, number, number],
      panelSpring: { type: "spring" as const, stiffness: 190, damping: 38, mass: 1 },
      cardSpring: { type: "easing" as const, duration: 0.3, ease: [1, -0.4, 0.5, 1] as [number, number, number, number] },
      exitDuration: [0.32, 0.1, 0.8, 0.01] as [number, number, number, number],
    },
    stack: {
      x: [8, 0, 20, 1] as [number, number, number, number],
      y: [8, 0, 20, 1] as [number, number, number, number],
      rotate: [6, 0, 12, 0.2] as [number, number, number, number],
      scaleStep: [0.03, 0, 0.12, 0.01] as [number, number, number, number],
      opacityStep: [0.2, 0, 0.35, 0.01] as [number, number, number, number],
      shadowBlur: [32, 0, 80, 2] as [number, number, number, number],
    },
    interaction: {
      swipeThreshold: [110, 24, 160, 2] as [number, number, number, number],
      exitDistance: [80, 80, 180, 5] as [number, number, number, number],
      exitTilt: [5, 0, 24, 1] as [number, number, number, number],
    },
  }, {
    id: "songrec:curated-deck:v1",
    persist: true,
  });

  return values;
}
