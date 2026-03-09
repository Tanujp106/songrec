import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

function getArcPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

export const MOOD_COLORS: Record<string, { from: string; to: string }> = {
  'party': { from: '#14582A', to: '#ffffff' },
  'feel-good': { from: '#8C6A1C', to: '#ffffff' },
  'soft': { from: '#803060', to: '#ffffff' },
  'indie': { from: '#155C50', to: '#ffffff' },
  'retro': { from: '#704520', to: '#ffffff' },
  'sad': { from: '#2A3580', to: '#ffffff' },
  'love': { from: '#901830', to: '#ffffff' },
  'hiphop': { from: '#351850', to: '#ffffff' },
};

// Neutral default face — gentle, pleasant resting expression
const DEFAULT_FACE = {
  lEye: 'M 60 82 Q 75 74 90 82',
  rEye: 'M 110 82 Q 125 74 140 82',
  mouth: 'M 80 125 Q 100 135 120 125',
};

const MOODS = [
  { name: 'party', paths: { lEye: 'M 60 75 Q 75 55 90 75', rEye: 'M 110 75 Q 125 55 140 75', mouth: 'M 65 110 Q 100 160 135 110' } },
  { name: 'feel-good', paths: { lEye: 'M 60 85 Q 75 70 90 85', rEye: 'M 110 85 Q 125 70 140 85', mouth: 'M 70 115 Q 100 145 130 115' } },
  { name: 'soft', paths: { lEye: 'M 60 85 Q 75 90 90 85', rEye: 'M 110 85 Q 125 90 140 85', mouth: 'M 85 125 Q 100 130 115 125' } },
  { name: 'indie', paths: { lEye: 'M 60 82 Q 75 78 90 86', rEye: 'M 110 86 Q 125 78 140 82', mouth: 'M 75 128 Q 100 133 125 126' } },
  { name: 'retro', paths: { lEye: 'M 60 82 Q 75 70 90 78', rEye: 'M 110 78 Q 125 70 140 82', mouth: 'M 78 128 Q 100 136 122 130' } },
  { name: 'sad', paths: { lEye: 'M 60 90 Q 75 75 90 90', rEye: 'M 110 90 Q 125 75 140 90', mouth: 'M 70 135 Q 100 115 130 135' } },
  { name: 'love', paths: { lEye: 'M 60 80 Q 75 55 90 80', rEye: 'M 110 80 Q 125 55 140 80', mouth: 'M 85 125 Q 100 140 115 125' } },
  { name: 'hiphop', paths: { lEye: 'M 60 75 Q 75 85 90 90', rEye: 'M 110 90 Q 125 85 140 75', mouth: 'M 70 130 Q 100 140 130 125' } },
];


const ENTRANCE_EASE = [0.25, 0.46, 0.45, 0.94] as const;
const ENTRANCE_DURATION = 0.55;
const ENTRANCE_Y = 18;
const ENTRANCE_BLUR = 10;

function entranceProps(delay: number) {
  return {
    initial: { opacity: 0, y: ENTRANCE_Y, filter: `blur(${ENTRANCE_BLUR}px)` },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: ENTRANCE_DURATION, delay, ease: ENTRANCE_EASE },
  } as const;
}

interface MoodPickerProps {
  onMoodConfirmed?: (moodName: string | null) => void;
  accentColor?: string;
  selectedMood?: string | null;
  nudge?: boolean;
  entranceDelay?: number;
}

export { entranceProps, ENTRANCE_EASE, ENTRANCE_DURATION };

export function MoodPicker({
  onMoodConfirmed,
  accentColor = "#4A30F0",
  selectedMood = null,
  nudge = false,
  entranceDelay = 0,
}: MoodPickerProps) {
  const dial = {
    dragMaxOffset: 24,
    dragScale: 0.88,
    pullScale: 0.95,
    nudgeScale: 1.1,
    hoverScale: 1.02,
    pullOffsetX: 20,
    pullOffsetY: 20,
    pullTweenDuration: 0.6,
    pullEase: { x1: 0.7, y1: 1, x2: 0.7, y2: 1 },
    _snapStiffness: 220,
    _snapDamping: 14,
    _snapMass: 1,
    _pullStiffness: 230,
    _pullDamping: 14,
    _pullMass: 1,
    _innerShadowStiffness: 210,
    _innerShadowDamping: 12,
    hoverEase: { x1: 0.34, y1: 1.56, x2: 0.64, y2: 1 },
    dragEase: { x1: 0.5, y1: 0.6, x2: 0.6, y2: 0.8 },
    tabStrokeDuration: 0.5,
    shadowTransitionDuration: 0.3,
    scaleTransitionDuration: 0.4,
    shadow: {
      blurBase: 24,
      blurScale: 1,
      spreadBase: 4,
      spreadScale: 0.28,
      opacity: 0.25,
      opacityDragMultiplier: 1.4,
    },
    shadowBlurIntensity: 12,
    shadowDirectionalStrength: 0.4,
    glowInitialScale: 0.85,
    glowPeakScale: 1.15,
    glowFinalScale: 1.1,
    glowDuration: 1.2,
    glowFadeDuration: 1.5,
    tabPathStrokeWidth: 4,
    tabPathStrokeWidthActive: 6,
    tabPathStrokeWidthRubberBand: 5.5,
    tabGlowStrokeWidth: 5,
  };

  const [selectedMoodIndex, setSelectedMoodIndex] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hasPicked, setHasPicked] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [glowVisible, setGlowVisible] = useState(true);
  const [revealedTabs, setRevealedTabs] = useState<number[]>([]);
  const [introRunning, setIntroRunning] = useState(true);

  // Rubber-band tutorial state
  const [rubberBandActive, setRubberBandActive] = useState(false);
  const [tutorialPull, setTutorialPull] = useState<{ x: number; y: number; moodIndex: number } | null>(null);
  const rubberBandTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const dialRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const centerRef = useRef({ x: 0, y: 0 });
  const didDragRef = useRef(false);
  const pillDragActiveRef = useRef(false);
  const pillDragStartXRef = useRef<number | null>(null);
  const pillDragIndexRef = useRef(0);

  const activeMood = MOODS[selectedMoodIndex];
  const isPulling = tutorialPull !== null;
  const activeFace = hasPicked || isPulling ? activeMood.paths : DEFAULT_FACE;
  const showTabs = isDragging || !hasPicked || rubberBandActive;

  const pullTargets = useMemo(
    () => [
      { x: -dial.pullOffsetX, y: 0, moodIndex: 0 },
      { x: 0, y: -dial.pullOffsetY, moodIndex: 2 },
      { x: dial.pullOffsetX, y: 0, moodIndex: 4 },
      { x: 0, y: dial.pullOffsetY, moodIndex: 6 },
    ],
    [dial.pullOffsetX, dial.pullOffsetY]
  );

  useEffect(() => {
    if (!selectedMood) {
      setHasPicked(false);
      return;
    }
    const idx = MOODS.findIndex((mood) => mood.name === selectedMood);
    if (idx >= 0) {
      setSelectedMoodIndex(idx);
      setHasPicked(true);
    }
  }, [selectedMood]);

  useEffect(() => {
    pillDragIndexRef.current = selectedMoodIndex;
  }, [selectedMoodIndex]);

  // Speedometer intro → triggers rubber-band after
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const TAB_INTERVAL = 70; // ms between each tab appearing
    const TABS_DONE = MOODS.length * TAB_INTERVAL; // ~560ms
    MOODS.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setRevealedTabs(prev => [...prev, i]);
        }, i * TAB_INTERVAL)
      );
    });
    timers.push(
      setTimeout(() => setIntroRunning(false), TABS_DONE + 200)
    );
    timers.push(
      setTimeout(() => setGlowVisible(false), TABS_DONE + 600)
    );
    // Start rubber-band shortly after intro completes
    timers.push(
      setTimeout(() => setRubberBandActive(true), TABS_DONE + 300)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Rubber-band pull & snap — circle gets tugged toward a mood, then springs back
  const runRubberBand = useCallback(() => {
    // Clear any previous timers
    rubberBandTimers.current.forEach(clearTimeout);
    rubberBandTimers.current = [];

    let t = 0;
    const schedule = (fn: () => void, delay: number) => {
      t += delay;
      rubberBandTimers.current.push(setTimeout(fn, t));
    };

    const runCycle = (startTime: number) => {
      for (let i = 0; i < pullTargets.length; i++) {
        const target = pullTargets[i];
        const offset = startTime + i * 2800; // 2.8s per pull-snap cycle
        // Pull out (tween will handle the ease)
        rubberBandTimers.current.push(setTimeout(() => {
          setTutorialPull(target);
          setSelectedMoodIndex(target.moodIndex);
        }, offset));
        // Snap back (spring will handle the bounce)
        rubberBandTimers.current.push(setTimeout(() => {
          setTutorialPull(null);
          setSelectedMoodIndex(3); // back to neutral indie face
        }, offset + 900));
      }
      return pullTargets.length * 2800;
    };

    // Run cycles — repeat infinitely
    const totalCycle = runCycle(0);
    const repeatInterval = setInterval(() => {
      // Re-run the cycle
      rubberBandTimers.current.forEach(clearTimeout);
      rubberBandTimers.current = [];
      runCycle(0);
    }, totalCycle);

    rubberBandTimers.current.push(repeatInterval as unknown as ReturnType<typeof setTimeout>);
  }, [pullTargets]);

  useEffect(() => {
    if (!rubberBandActive || hasPicked || isDragging) {
      // Clean up timers when stopped
      rubberBandTimers.current.forEach(clearTimeout);
      rubberBandTimers.current = [];
      setTutorialPull(null);
      return;
    }
    runRubberBand();
    return () => {
      rubberBandTimers.current.forEach(clearTimeout);
      rubberBandTimers.current = [];
    };
  }, [rubberBandActive, hasPicked, isDragging, runRubberBand]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    isDraggingRef.current = true;
    didDragRef.current = false;
    setIsDragging(true);
    setRubberBandActive(false); // stop rubber-band permanently

    if (dialRef.current) {
      const rect = dialRef.current.getBoundingClientRect();
      centerRef.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const dx = e.clientX - centerRef.current.x;
    const dy = e.clientY - centerRef.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 5) {
      didDragRef.current = true;
      const maxOffset = dial.dragMaxOffset;
      const norm = Math.min(distance, 100) / 100;

      setDragOffset({
        x: (dx / distance) * maxOffset * norm,
        y: (dy / distance) * maxOffset * norm,
      });

      const angle = (Math.atan2(dy, dx) * (180 / Math.PI) + 180 + 360) % 360;
      const index = Math.round(angle / 45) % 8;

      setSelectedMoodIndex(index);
      setHasPicked(true);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    isDraggingRef.current = false;
    setIsDragging(false);
    setDragOffset({ x: 0, y: 0 });

    if (didDragRef.current && hasPicked) {
      onMoodConfirmed?.(MOODS[selectedMoodIndex].name);
    }
  };

  const normalizeIndex = (index: number) => {
    const len = MOODS.length;
    return ((index % len) + len) % len;
  };

  const handlePillPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    pillDragActiveRef.current = true;
    pillDragStartXRef.current = e.clientX;
    setRubberBandActive(false);
  };

  const handlePillPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pillDragActiveRef.current || pillDragStartXRef.current === null) return;

    const dx = e.clientX - pillDragStartXRef.current;
    if (Math.abs(dx) < 14) return;

    const step = Math.trunc(dx / 32);
    if (step === 0) return;

    const nextIndex = normalizeIndex(pillDragIndexRef.current + step);
    pillDragIndexRef.current = nextIndex;
    pillDragStartXRef.current += step * 32;

    setSelectedMoodIndex(nextIndex);
    setHasPicked(true);
  };

  const handlePillPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    pillDragActiveRef.current = false;
    pillDragStartXRef.current = null;

    if (hasPicked) {
      onMoodConfirmed?.(MOODS[selectedMoodIndex].name);
    }
  };

  // Compute face x/y and transition based on state
  const faceX = isPulling ? tutorialPull.x : dragOffset.x;
  const faceY = isPulling ? tutorialPull.y : dragOffset.y;

  // Static outer shadow — doesn't change with drag direction
  const dragMagnitude = Math.sqrt(faceX * faceX + faceY * faceY);
  const staticShadow = "0px 10px 30px rgba(0,0,0,0.15)";
  const dialShadow = isDragging || isPulling
    ? `${staticShadow}, ${faceX * 0.65}px ${faceY * 0.65}px 26px rgba(255,255,255,0.35)`
    : staticShadow;

  // Directional inner glow — the side being dragged glows brighter
  // When dragged left (negative faceX), left side glows (positive inset X)
  // When dragged right (positive faceX), right side glows (negative inset X)
  const glowStrength = dial.shadowDirectionalStrength;
  const glowBlur = dial.shadowBlurIntensity;
  const innerShadow = isDragging || isPulling
    ? `inset ${-faceX * glowStrength}px ${-faceY * glowStrength}px ${glowBlur}px rgba(255,255,255,0.4), inset ${faceX * glowStrength * 0.5}px ${faceY * glowStrength * 0.5}px ${glowBlur * 0.8}px rgba(0,0,0,0.08)`
    : "inset 0 8px 16px rgba(0,0,0,0.06)";

  // Pull uses a slow, smooth tween. Snap-back uses a bouncy spring.
  const pullSpring = { type: "spring" as const, stiffness: dial._pullStiffness, damping: dial._pullDamping, mass: dial._pullMass };
  const snapSpring = { type: "spring" as const, stiffness: dial._snapStiffness, damping: dial._snapDamping, mass: dial._snapMass };

  // Determine which easing to use based on state
  const activeEase = isDragging ? dial.dragEase : dial.hoverEase;

  const faceTransition = isPulling
    ? {
      x: {
        type: "tween" as const,
        duration: dial.pullTweenDuration,
        ease: [dial.pullEase.x1, dial.pullEase.y1, dial.pullEase.x2, dial.pullEase.y2] as [number, number, number, number],
      },
      y: {
        type: "tween" as const,
        duration: dial.pullTweenDuration,
        ease: [dial.pullEase.x1, dial.pullEase.y1, dial.pullEase.x2, dial.pullEase.y2] as [number, number, number, number],
      },
      scale: pullSpring,
      boxShadow: { ...pullSpring, duration: dial.shadowTransitionDuration },
    }
    : isDragging
      ? {
        x: {
          type: "tween" as const,
          duration: 0.12,
          ease: [dial.dragEase.x1, dial.dragEase.y1, dial.dragEase.x2, dial.dragEase.y2] as [number, number, number, number],
        },
        y: {
          type: "tween" as const,
          duration: 0.12,
          ease: [dial.dragEase.x1, dial.dragEase.y1, dial.dragEase.x2, dial.dragEase.y2] as [number, number, number, number],
        },
        scale: snapSpring,
        boxShadow: snapSpring,
      }
      : {
        x: snapSpring,
        y: snapSpring,
        scale: { ...pullSpring, duration: dial.scaleTransitionDuration },
        boxShadow: { ...pullSpring, duration: dial.shadowTransitionDuration },
      };

  const sizeVars = {
    "--dial-size": "clamp(200px, min(64vw, 36svh), 280px)",
    "--face-size": "clamp(136px, min(44vw, 24svh), 190px)",
    "--glow-size": "clamp(160px, min(52vw, 28svh), 220px)",
  } as React.CSSProperties;

  return (
    <div className="flex flex-col items-center relative w-full mt-2" style={{ ...sizeVars, gap: "clamp(8px, 1.6svh, 24px)" }}>
      <motion.p
        className="font-['Spectral',serif] text-center text-white w-72 leading-[1.2]"
        style={{ fontSize: "clamp(20px, 3.4svh, 26px)" }}
        {...entranceProps(entranceDelay)}
      >
        What would you want to listen twin?
      </motion.p>

      {/* Dial & Face Container */}
      <motion.div
        ref={dialRef}
        className="relative flex items-center justify-center mt-0 touch-none cursor-pointer"
        style={{ width: "var(--dial-size)", height: "var(--dial-size)", WebkitTapHighlightColor: "transparent" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerEnter={() => setIsHovering(true)}
        onPointerLeave={() => setIsHovering(false)}
        {...entranceProps(entranceDelay + 0.1)}
      >

        {/* SVG glow filter definition */}
        <svg className="absolute" width="0" height="0">
          <defs>
            <filter id="tab-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="tab-glow-active" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Outer Ring Tabs */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 280 280"
          animate={{ opacity: showTabs ? 1 : 0 }}
          transition={{ duration: dial.tabStrokeDuration, ease: "easeInOut" }}
        >
          {MOODS.map((mood, i) => {
            const visualAngle = i * 45 - 90;
            const pathData = getArcPath(140, 140, 130, visualAngle - 20, visualAngle + 20);
            const isActive = hasPicked && i === selectedMoodIndex;
            const isRevealed = revealedTabs.includes(i);
            // Highlight the tab the rubber-band is pulling toward
            const isRubberBandTarget = isPulling && i === tutorialPull.moodIndex;

            return (
              <motion.path
                key={mood.name}
                d={pathData}
                fill="none"
                strokeLinecap="round"
                pathLength={1}
                initial={{ opacity: 0, strokeWidth: dial.tabPathStrokeWidth, stroke: "rgba(255,255,255,0.3)" }}
                animate={{
                  opacity: isRevealed ? 1 : 0,
                  stroke: isActive ? "rgba(255,255,255,1)"
                    : isRubberBandTarget ? "rgba(255,255,255,0.9)"
                      : "rgba(255,255,255,0.3)",
                  strokeWidth: isActive ? dial.tabPathStrokeWidthActive
                    : isRubberBandTarget ? dial.tabPathStrokeWidthRubberBand
                      : dial.tabPathStrokeWidth,
                }}
                transition={{
                  opacity: { duration: 0.35, ease: "easeOut" },
                  stroke: { duration: dial.tabStrokeDuration, ease: "easeInOut" },
                  strokeWidth: { duration: dial.tabStrokeDuration, ease: "easeInOut" },
                }}
                style={{
                  filter: isActive
                    ? "url(#tab-glow-active)"
                    : isRubberBandTarget
                      ? "url(#tab-glow)"
                      : isRevealed && !introRunning ? "none" : "url(#tab-glow)",
                }}
              />
            );
          })}
        </motion.svg>

        {/* Glow behind the face circle — bright on load, fades out */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "var(--glow-size)",
            height: "var(--glow-size)",
            background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(200,180,255,0.4) 40%, transparent 70%)",
          }}
          initial={{ opacity: 0, scale: dial.glowInitialScale }}
          animate={{
            opacity: glowVisible ? [0, 1, 0.8] : 0,
            scale: glowVisible ? [dial.glowInitialScale, dial.glowPeakScale, dial.glowFinalScale] : 1.3,
            filter: glowVisible ? "blur(0px)" : "blur(20px)",
          }}
          transition={{
            duration: glowVisible ? dial.glowDuration : dial.glowFadeDuration,
            ease: "easeOut",
          }}
        />

        {/* Inner Face */}
        <motion.div
          animate={{
            x: faceX,
            y: faceY,
            scale: isDragging ? dial.dragScale
              : isPulling ? dial.pullScale
                : nudge ? dial.nudgeScale
                  : isHovering ? dial.hoverScale : 1,
            boxShadow: nudge
              ? "0px 0px 24px 4px rgba(255,255,255,0.3), 0px 10px 30px rgba(0,0,0,0.15)"
              : dialShadow,
          }}
          transition={{
            ...faceTransition,
            scale: {
              ...faceTransition.scale,
              duration: dial.scaleTransitionDuration,
            },
          }}
          className="relative rounded-full flex items-center justify-center border-[5px] border-white overflow-hidden pointer-events-none"
          style={{
            width: "var(--face-size)",
            height: "var(--face-size)",
            backgroundColor: "#EBE9FF",
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            animate={{ boxShadow: innerShadow }}
            transition={{ type: "spring" as const, stiffness: dial._innerShadowStiffness, damping: dial._innerShadowDamping }}
          />

          <svg className="w-full h-full" viewBox="0 0 200 200">
            <motion.path
              d={activeFace.lEye}
              stroke="#2A2A2A"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
              initial={false}
              animate={{ d: activeFace.lEye }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
            <motion.path
              d={activeFace.rEye}
              stroke="#2A2A2A"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
              initial={false}
              animate={{ d: activeFace.rEye }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
            <motion.path
              d={activeFace.mouth}
              stroke="#2A2A2A"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
              initial={false}
              animate={{ d: activeFace.mouth }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Selected Mood Pill */}
      <motion.div {...entranceProps(entranceDelay + 0.2)}>
        <motion.div
          className="border border-white/50 backdrop-blur-sm py-[4px] rounded-[130px] relative overflow-hidden flex items-center justify-center touch-none cursor-pointer"
          style={{ height: "clamp(32px, 5.2svh, 40px)", width: hasPicked ? 160 : "auto", paddingLeft: hasPicked ? 0 : 40, paddingRight: hasPicked ? 0 : 40 }}
          animate={{
            backgroundColor: `${accentColor}1A`,
            boxShadow: `inset 4px 4px 4px ${accentColor}59, 2px 2px 3px ${accentColor}CC`,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onPointerDown={handlePillPointerDown}
          onPointerMove={handlePillPointerMove}
          onPointerUp={handlePillPointerUp}
          onPointerCancel={handlePillPointerUp}
        >
        <AnimatePresence mode="wait">
          {hasPicked ? (
            <motion.span
              key={activeMood.name}
              className="font-['Spectral',serif] text-white tracking-[0.24px]"
              style={{ fontSize: "clamp(18px, 3.2svh, 24px)" }}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              {activeMood.name}
            </motion.span>
          ) : (
            <motion.span
              key="__initial__"
              className="font-['Spectral',serif] text-white/40 tracking-[0.24px]"
              style={{ fontSize: "clamp(18px, 3.2svh, 24px)" }}
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.12, ease: "easeOut" }}
            >
              Drag to pick a mood
            </motion.span>
          )}
        </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
