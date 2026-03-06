import React, { useState, useRef, useEffect } from "react";
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
  'party':     { from: '#E08A00', to: '#ffffff' },
  'feel-good': { from: '#D4A017', to: '#ffffff' },
  'soft':      { from: '#C06090', to: '#ffffff' },
  'indie':     { from: '#1A8A7A', to: '#ffffff' },
  'nostalgic': { from: '#9A6030', to: '#ffffff' },
  'sad':       { from: '#2A3580', to: '#ffffff' },
  'love':      { from: '#C02040', to: '#ffffff' },
  'hiphop':    { from: '#351850', to: '#ffffff' },
};

const MOODS = [
  { name: 'party',       paths: { lEye: 'M 60 75 Q 75 55 90 75',  rEye: 'M 110 75 Q 125 55 140 75', mouth: 'M 65 110 Q 100 160 135 110' } },
  { name: 'feel-good',   paths: { lEye: 'M 60 85 Q 75 70 90 85',  rEye: 'M 110 85 Q 125 70 140 85', mouth: 'M 70 115 Q 100 145 130 115' } },
  { name: 'soft',        paths: { lEye: 'M 60 85 Q 75 90 90 85',  rEye: 'M 110 85 Q 125 90 140 85', mouth: 'M 85 125 Q 100 130 115 125' } },
  { name: 'indie',       paths: { lEye: 'M 60 85 Q 75 85 90 85',  rEye: 'M 110 85 Q 125 85 140 85', mouth: 'M 80 125 Q 100 125 120 125' } },
  { name: 'nostalgic',   paths: { lEye: 'M 60 80 Q 75 75 90 85',  rEye: 'M 110 85 Q 125 75 140 80', mouth: 'M 75 130 Q 100 125 125 130' } },
  { name: 'sad',         paths: { lEye: 'M 60 90 Q 75 75 90 90',  rEye: 'M 110 90 Q 125 75 140 90', mouth: 'M 70 135 Q 100 115 130 135' } },
  { name: 'love',        paths: { lEye: 'M 60 80 Q 75 55 90 80',  rEye: 'M 110 80 Q 125 55 140 80', mouth: 'M 85 125 Q 100 140 115 125' } },
  { name: 'hiphop',      paths: { lEye: 'M 60 75 Q 75 85 90 90',  rEye: 'M 110 90 Q 125 85 140 75', mouth: 'M 70 130 Q 100 140 130 125' } },
];

interface MoodPickerProps {
  onMoodConfirmed?: (moodName: string | null) => void;
  accentColor?: string;
  selectedMood?: string | null;
}

export function MoodPicker({
  onMoodConfirmed,
  accentColor = "#4A30F0",
  selectedMood = null
}: MoodPickerProps) {
  const [selectedMoodIndex, setSelectedMoodIndex] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [hasPicked, setHasPicked] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [glowVisible, setGlowVisible] = useState(true);
  // Track which tabs have been revealed during intro
  const [revealedTabs, setRevealedTabs] = useState<number[]>([]);
  const [introRunning, setIntroRunning] = useState(true);
  const dialRef = useRef<HTMLDivElement>(null);

  const isDraggingRef = useRef(false);
  const centerRef = useRef({ x: 0, y: 0 });
  // Track whether a drag actually moved (to avoid color change on tap-only)
  const didDragRef = useRef(false);

  const activeMood = MOODS[selectedMoodIndex];
  const showTabs = isDragging || !hasPicked;

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

  // Auto-cycle doodle when no mood has been picked.
  useEffect(() => {
    if (hasPicked || isDragging) return;
    const interval = setInterval(() => {
      setSelectedMoodIndex((prev) => (prev + 1) % MOODS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [hasPicked, isDragging]);

  // Speedometer intro: reveal tabs one-by-one with staggered timers
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    MOODS.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setRevealedTabs(prev => [...prev, i]);
        }, i * 120) // 120ms stagger per tab
      );
    });
    // Mark intro complete after all tabs revealed + hold time
    timers.push(
      setTimeout(() => setIntroRunning(false), MOODS.length * 120 + 600)
    );
    // Fade glow after intro
    timers.push(
      setTimeout(() => setGlowVisible(false), 2200)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    isDraggingRef.current = true;
    didDragRef.current = false;
    setIsDragging(true);

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

    if (distance > 15) {
      didDragRef.current = true;
      const maxOffset = 15;
      const norm = Math.min(distance, 140) / 140;

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

    // Only confirm the mood color change on release, and only if they actually dragged
    if (didDragRef.current && hasPicked) {
      onMoodConfirmed?.(MOODS[selectedMoodIndex].name);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center relative w-full mt-2">
      <p className="font-['Spectral',serif] text-[26px] text-center text-white w-72 leading-[1.2]">
        What would you want to listen twin?
      </p>

      {/* Dial & Face Container */}
      <div 
        ref={dialRef}
        className="relative w-[280px] h-[280px] flex items-center justify-center mt-0 touch-none cursor-pointer"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
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

        {/* Outer Ring Tabs — with speedometer intro */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 280 280"
          animate={{ opacity: showTabs ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {MOODS.map((mood, i) => {
            const visualAngle = i * 45 - 90; 
            const pathData = getArcPath(140, 140, 130, visualAngle - 20, visualAngle + 20);
            const isActive = hasPicked && i === selectedMoodIndex;
            const isRevealed = revealedTabs.includes(i);
            // During intro: bright glow on newly revealed tabs
            const isIntroGlowing = introRunning && isRevealed;

            return (
              <motion.path
                key={mood.name}
                d={pathData}
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0, strokeWidth: 4, stroke: "rgba(255,255,255,0.3)" }}
                animate={{
                  pathLength: isRevealed ? 1 : 0,
                  opacity: isRevealed ? 1 : 0,
                  stroke: isActive ? "rgba(255,255,255,1)" : isIntroGlowing ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.3)",
                  strokeWidth: isActive ? 6 : isIntroGlowing ? 5 : 4,
                }}
                transition={{
                  pathLength: { duration: 0.4, ease: "easeOut" },
                  opacity: { duration: 0.2 },
                  stroke: { duration: 0.3 },
                  strokeWidth: { duration: 0.3 },
                }}
                style={{
                  filter: isActive
                    ? "url(#tab-glow-active)"
                    : isIntroGlowing
                    ? "url(#tab-glow)"
                    : "none",
                }}
              />
            );
          })}
        </motion.svg>

        {/* Glow behind the face circle — bright on load, fades out */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 220,
            height: 220,
            background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(200,180,255,0.4) 40%, transparent 70%)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: glowVisible ? [0, 1, 0.8] : 0, 
            scale: glowVisible ? [0.8, 1.15, 1.1] : 1.3,
            filter: glowVisible ? "blur(0px)" : "blur(20px)",
          }}
          transition={{ 
            duration: glowVisible ? 1.2 : 1.5, 
            ease: "easeOut",
          }}
        />

        {/* Inner Face */}
        <motion.div 
          animate={{ 
            x: dragOffset.x, 
            y: dragOffset.y,
            scale: isDragging ? 0.8 : 1,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 30,
            mass: 0.8
          }}
          className="relative w-[190px] h-[190px] bg-[#EBE9FF] rounded-full flex items-center justify-center shadow-[0px_10px_30px_rgba(0,0,0,0.15)] border-[5px] border-white overflow-hidden pointer-events-none"
        >
          <div className="absolute inset-0 rounded-full shadow-[inset_0_8px_16px_rgba(0,0,0,0.06)] pointer-events-none" />
          
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <motion.path
              d={activeMood.paths.lEye}
              stroke="#2A2A2A"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
              initial={false}
              animate={{ d: activeMood.paths.lEye }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
            <motion.path
              d={activeMood.paths.rEye}
              stroke="#2A2A2A"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
              initial={false}
              animate={{ d: activeMood.paths.rEye }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
            <motion.path
              d={activeMood.paths.mouth}
              stroke="#2A2A2A"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
              initial={false}
              animate={{ d: activeMood.paths.mouth }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Selected Mood Pill — stable container, only text animates */}
      <motion.div 
        className="border border-white/50 backdrop-blur-sm px-10 py-[4px] rounded-[130px] mt-2 relative overflow-hidden min-w-[160px] min-h-[40px] flex items-center justify-center"
        animate={{
          backgroundColor: `${accentColor}1A`,
          boxShadow: `inset 4px 4px 4px ${accentColor}59, 2px 2px 3px ${accentColor}CC`,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <AnimatePresence mode="popLayout">
          {hasPicked ? (
            <motion.span
              key={activeMood.name}
              className="font-['Spectral',serif] text-[24px] text-white tracking-[0.24px]"
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.12, ease: "easeOut" }}
            >
              {activeMood.name}
            </motion.span>
          ) : (
            <motion.span
              key="__initial__"
              className="font-['Spectral',serif] text-[24px] text-white/40 tracking-[0.24px]"
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.12, ease: "easeOut" }}
            >
              Drag & pick a mood
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
