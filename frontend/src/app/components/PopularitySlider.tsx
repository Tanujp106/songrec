import React, { useState, useRef } from "react";
import { motion } from "motion/react";

const PAD_PCT = 7;

interface PopularitySliderProps {
  accentColor?: string;
  onValueChange?: (value: number) => void;
}

export function PopularitySlider({ accentColor = "#4A30F0", onValueChange }: PopularitySliderProps) {
  const dial = {
    thumbSize: 20,
    thumbPressedSize: 26,
    springVisualDuration: 0.3,
    springBounce: 0.2,
    shadowIdleBlur: 12,
    shadowPressedBlur: 12,
    shadowPressedGlow: 4,
    shadowIdleOpacity: 0.25,
    shadowPressedOpacity: 0.3,
    trackHeight: 36,
    trackBorderRadius: 30,
    trackBackdropBlur: 2.2,
    dotSize: 4.1,
    colorTransitionDuration: 0.4,
    gradientStartOpacity: 0.66,
    gradientMidOpacity: 0.6,
    gradientEndOpacity: 0.44,
  };

  const [value, setValue] = useState(0); // 0 to 3
  const [isPressed, setIsPressed] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateValue = (newValue: number) => {
    setValue(newValue);
    onValueChange?.(newValue);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsPressed(true);
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
    setIsPressed(false);
  };

  // Map value into the padded percentage range
  const paddedLeft = (step: number) => PAD_PCT + (step / 3) * (100 - 2 * PAD_PCT);

  // Gradient opacity from dial
  const toHex = (num: number) => Math.round(num * 255).toString(16).padStart(2, '0');
  const gradientStart = accentColor + toHex(dial.gradientStartOpacity);
  const gradientMid = accentColor + toHex(dial.gradientMidOpacity);
  const gradientEnd = accentColor + toHex(dial.gradientEndOpacity);

  return (
    <div className="flex flex-col gap-1.5 sm:gap-2 w-full max-w-[360px] px-1 mb-1 sm:mb-2 mt-2 sm:mt-4">
      {/* Slider Container */}
      <div
        ref={trackRef}
        className="relative h-12 w-full flex items-center cursor-pointer select-none touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => setIsPressed(false)}
      >
        {/* Track Background with gradient border */}
        <motion.div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2"
          animate={{
            background: `linear-gradient(135deg, ${gradientStart}, ${gradientMid}, ${gradientEnd})`,
          }}
          transition={{
            duration: dial.colorTransitionDuration,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{
            height: `${dial.trackHeight}px`,
            borderRadius: `${dial.trackBorderRadius}px`,
            padding: 1,
          }}
        >
          <div
            className="w-full h-full bg-white/20"
            style={{
              borderRadius: `${dial.trackBorderRadius}px`,
              backdropFilter: `blur(${dial.trackBackdropBlur}px)`,
            }}
          />
        </motion.div>

        {/* Dots */}
        {[0, 1, 2, 3].map((step) => (
          <motion.div
            key={step}
            className="absolute top-1/2 rounded-full z-10"
            animate={{
              backgroundColor: accentColor,
              x: "-50%",
              y: "-50%",
            }}
            transition={{
              backgroundColor: {
                duration: dial.colorTransitionDuration,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            style={{
              width: `${dial.dotSize}px`,
              height: `${dial.dotSize}px`,
              left: `${paddedLeft(step)}%`,
            }}
          />
        ))}

        {/* Thumb Layer */}
        <motion.div
          className="absolute top-1/2 z-20 flex items-center justify-center rounded-full"
          initial={false}
          animate={{
            left: `${paddedLeft(value)}%`,
            x: "-50%",
            y: "-50%",
            backgroundColor: accentColor,
            width: isPressed ? dial.thumbPressedSize : dial.thumbSize,
            height: isPressed ? dial.thumbPressedSize : dial.thumbSize,
            boxShadow: isPressed
              ? `0 0 ${dial.shadowPressedBlur}px ${dial.shadowPressedGlow}px ${accentColor}${toHex(dial.shadowPressedOpacity)}, 0 2px 8px rgba(0,0,0,0.3)`
              : `0 2px ${dial.shadowIdleBlur}px rgba(0,0,0,${dial.shadowIdleOpacity})`,
          }}
          transition={{
            left: {
              type: "spring",
              visualDuration: dial.springVisualDuration,
              bounce: dial.springBounce,
            },
            x: {
              type: "spring",
              visualDuration: dial.springVisualDuration,
              bounce: dial.springBounce,
            },
            width: {
              type: "spring",
              visualDuration: dial.springVisualDuration,
              bounce: dial.springBounce,
            },
            height: {
              type: "spring",
              visualDuration: dial.springVisualDuration,
              bounce: dial.springBounce,
            },
            backgroundColor: {
              duration: dial.colorTransitionDuration,
              ease: [0.4, 0, 0.2, 1],
            },
            boxShadow: {
              duration: dial.colorTransitionDuration,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
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
