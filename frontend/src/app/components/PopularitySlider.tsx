import React, { useState, useRef } from "react";
import { motion } from "motion/react";

const PAD_PCT = 7; // percentage padding on each side so dots don't touch edges

interface PopularitySliderProps {
  accentColor?: string;
  onValueChange?: (value: number) => void;
}

export function PopularitySlider({ accentColor = "#4A30F0", onValueChange }: PopularitySliderProps) {
  const [value, setValue] = useState(0); // 0 to 3
  const trackRef = useRef<HTMLDivElement>(null);

  const updateValue = (newValue: number) => {
    setValue(newValue);
    onValueChange?.(newValue);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromPointer(e);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    updateFromPointer(e);
  };

  const updateFromPointer = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const clickRatio = x / rect.width;
    // Map the click ratio back from padded range to 0-1
    const padFrac = PAD_PCT / 100;
    const unpadded = (clickRatio - padFrac) / (1 - 2 * padFrac);
    const clamped = Math.max(0, Math.min(1, unpadded));
    const nearestValue = Math.round(clamped * 3);
    updateValue(nearestValue);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  // Map value into the padded percentage range
  const paddedLeft = (step: number) => PAD_PCT + (step / 3) * (100 - 2 * PAD_PCT);

  return (
    <div className="flex flex-col gap-2 w-full max-w-[360px] px-1 mb-2 mt-4">
      {/* Slider Container */}
      <div 
        ref={trackRef}
        className="relative h-12 w-full flex items-center cursor-pointer select-none touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Track Background */}
        <div className="absolute inset-x-0 h-[36px] bg-white/30 rounded-[18px] border border-white" />

        {/* Dots */}
        {[0, 1, 2, 3].map((step) => (
          <motion.div
            key={step}
            className="absolute top-1/2 -translate-y-1/2 w-[4px] h-[4px] rounded-full z-10"
            animate={{ backgroundColor: accentColor }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ left: `${paddedLeft(step)}%`, transform: "translate(-50%, -50%)" }}
          />
        ))}

        {/* Thumb Layer */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-[22px] h-[22px] rounded-full z-20 shadow-[0_2px_8px_rgba(0,0,0,0.25)] flex items-center justify-center"
          initial={false}
          animate={{ left: `${paddedLeft(value)}%`, backgroundColor: accentColor }}
          style={{ transform: "translate(-50%, -50%)" }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      </div>

      {/* Labels - moved below slider */}
      <div className="flex justify-between items-center text-white text-[14px] font-medium px-4 tracking-[0.14px]">
        <span>Underrated</span>
        <span>Popular</span>
      </div>
    </div>
  );
}
