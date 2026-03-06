import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import imgAlbum from "@/assets/256b80c8e3feddbc7d9121f96f8a5007c5f523ae.png";

interface LoadingScreenProps {
  mood: string;
  popularity: string;
}

// Multiple rows of album art that auto-scroll in alternating directions
function ScrollingRow({ direction, delay }: { direction: "left" | "right"; delay: number }) {
  const items = Array.from({ length: 16 });

  return (
    <div className="relative w-full overflow-hidden h-[48px]">
      <motion.div
        className="flex gap-[16px] absolute"
        initial={{ x: direction === "left" ? 0 : -512 }}
        animate={{ x: direction === "left" ? -512 : 0 }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          delay,
        }}
      >
        {items.map((_, i) => (
          <div
            key={i}
            className="relative rounded-[32px] shadow-[0px_4px_12px_0px_rgba(19,15,41,0.5)] shrink-0 size-[48px]"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full"
              src={imgAlbum}
            />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_6px_4px_0px_rgba(0,0,0,0.4)]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function LoadingScreen({ mood, popularity }: LoadingScreenProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center flex-1 gap-10">
      {/* Title text */}
      <motion.p
        className="font-['Spectral',serif] text-[24px] text-center text-white leading-[28px] w-full max-w-[320px]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Recommending the perfect one from hand picked collection
      </motion.p>

      {/* Scrolling album art grid */}
      <motion.div
        className="flex flex-col gap-[32px] w-full overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <ScrollingRow direction="left" delay={0} />
        <ScrollingRow direction="right" delay={0.5} />
        <ScrollingRow direction="left" delay={1.0} />
        <ScrollingRow direction="right" delay={0.3} />
        <ScrollingRow direction="left" delay={0.7} />
        <ScrollingRow direction="right" delay={0.2} />
        <ScrollingRow direction="left" delay={0.9} />
        <ScrollingRow direction="right" delay={0.4} />
      </motion.div>
    </div>
  );
}
