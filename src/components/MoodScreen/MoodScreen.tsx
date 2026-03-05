"use client";

import { useMemo, useState } from "react";
import styles from "./MoodScreen.module.css";

type MoodId =
  | "party"
  | "feel-good"
  | "soft"
  | "indie"
  | "nostalgic"
  | "sad"
  | "love"
  | "hiphop";

type MoodTheme = {
  id: MoodId;
  label: string;
  colors: {
    primary: string;
    primarySoft: string;
    glow: string;
    pillBg: string;
    pillBorder: string;
  };
};

const MOODS: MoodTheme[] = [
  {
    id: "party",
    label: "Party",
    colors: {
      primary: "#ff3aa8",
      primarySoft: "rgba(255, 58, 168, 0.3)",
      glow: "rgba(255, 58, 168, 0.45)",
      pillBg: "rgba(255, 255, 255, 0.08)",
      pillBorder: "rgba(255, 255, 255, 0.5)"
    }
  },
  {
    id: "feel-good",
    label: "Feel Good",
    colors: {
      primary: "#ffb347",
      primarySoft: "rgba(255, 179, 71, 0.3)",
      glow: "rgba(255, 179, 71, 0.45)",
      pillBg: "rgba(255, 255, 255, 0.08)",
      pillBorder: "rgba(255, 255, 255, 0.5)"
    }
  },
  {
    id: "soft",
    label: "Soft",
    colors: {
      primary: "#7b8bff",
      primarySoft: "rgba(123, 139, 255, 0.3)",
      glow: "rgba(123, 139, 255, 0.45)",
      pillBg: "rgba(255, 255, 255, 0.08)",
      pillBorder: "rgba(255, 255, 255, 0.5)"
    }
  },
  {
    id: "indie",
    label: "Indie",
    colors: {
      primary: "#2f7f78",
      primarySoft: "rgba(47, 127, 120, 0.3)",
      glow: "rgba(47, 127, 120, 0.45)",
      pillBg: "rgba(255, 255, 255, 0.08)",
      pillBorder: "rgba(255, 255, 255, 0.5)"
    }
  },
  {
    id: "nostalgic",
    label: "Nostalgic",
    colors: {
      primary: "#e48b6a",
      primarySoft: "rgba(228, 139, 106, 0.3)",
      glow: "rgba(228, 139, 106, 0.45)",
      pillBg: "rgba(255, 255, 255, 0.08)",
      pillBorder: "rgba(255, 255, 255, 0.5)"
    }
  },
  {
    id: "sad",
    label: "Sad",
    colors: {
      primary: "#4a30f0",
      primarySoft: "rgba(74, 48, 240, 0.3)",
      glow: "rgba(74, 48, 240, 0.45)",
      pillBg: "rgba(74, 48, 240, 0.1)",
      pillBorder: "rgba(255, 255, 255, 0.5)"
    }
  },
  {
    id: "love",
    label: "Love",
    colors: {
      primary: "#ff5a8a",
      primarySoft: "rgba(255, 90, 138, 0.3)",
      glow: "rgba(255, 90, 138, 0.45)",
      pillBg: "rgba(255, 255, 255, 0.08)",
      pillBorder: "rgba(255, 255, 255, 0.5)"
    }
  },
  {
    id: "hiphop",
    label: "HipHop",
    colors: {
      primary: "#5b4bff",
      primarySoft: "rgba(91, 75, 255, 0.3)",
      glow: "rgba(91, 75, 255, 0.45)",
      pillBg: "rgba(255, 255, 255, 0.08)",
      pillBorder: "rgba(255, 255, 255, 0.5)"
    }
  }
];

const imgCicularMoodTabs =
  "https://www.figma.com/api/mcp/asset/fa1c4056-b2dd-47f0-80e3-4082f28df6cd";
const imgVector =
  "https://www.figma.com/api/mcp/asset/66e0c767-94bf-4dfd-a1cf-0b5ac3c7a9cb";
const imgSongPopularitySlider =
  "https://www.figma.com/api/mcp/asset/d408bb10-7a75-4c47-97e7-742bf271b17e";

export default function MoodScreen() {
  const [selectedMoodId] = useState<MoodId>("sad");

  const mood = useMemo(
    () => MOODS.find((item) => item.id === selectedMoodId) ?? MOODS[5],
    [selectedMoodId]
  );

  return (
    <div
      className={styles.screen}
      style={{
        "--mood-primary": mood.colors.primary,
        "--mood-primary-soft": mood.colors.primarySoft,
        "--mood-glow": mood.colors.glow,
        "--mood-pill-bg": mood.colors.pillBg,
        "--mood-pill-border": mood.colors.pillBorder
      }}
    >
      <div className={styles.topBlock}>
        <div className={styles.titleRow}>
          <span className={styles.brand}>songrec</span>
          <span className={styles.curated}>curated by tanuj</span>
        </div>

        <div className={styles.moodBlock}>
          <p className={styles.prompt}>What would you want to listen twin?</p>

          <div className={styles.moodPicker}>
            <img
              className={styles.moodTabs}
              src={imgCicularMoodTabs}
              alt="Mood ring"
            />

            <div className={styles.mascotCard}>
              <img
                className={styles.mascotImage}
                src={imgVector}
                alt="Mood mascot"
              />
            </div>

            <div className={styles.moodLabel}>{mood.label}</div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBlock}>
        <div className={styles.sliderBlock}>
          <img
            className={styles.sliderImage}
            src={imgSongPopularitySlider}
            alt="Popularity slider"
          />
          <div className={styles.sliderLabels}>
            <span>Underrated</span>
            <span>Popular</span>
          </div>
        </div>

        <button className={styles.cta}>Recommend</button>
      </div>
    </div>
  );
}
