/**
 * Motion tokens — centralized timing, easing, and duration values.
 *
 * Philosophy: sharp entering, controlled settling.
 * No bounce. No elastic overshoot. No spring physics by default.
 *
 * TasteSkill alignment:
 * - MOTION_INTENSITY: 5 (controlled, not cinematic)
 * - One primary easing family
 * - Consistent stagger structure
 */

import { useState, useEffect } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Hydration-safe reduced-motion hook.
 *
 * useReducedMotion() returns null on the server and a boolean on the
 * client. Reading it directly during render makes SSR markup differ from
 * the first client render, which triggers React hydration mismatches.
 *
 * This hook returns a deterministic value (defaultReduce) during SSR and
 * the first client render, then updates to the real preference after
 * hydration. Components must use the post-mount value for animation
 * decisions that affect markup/styles.
 */
export function useReducedMotionSafe(
  defaultReduce = false
): { reduce: boolean; mounted: boolean } {
  const preference = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  const reduce = preference ?? defaultReduce;

  useEffect(() => {
    // Mark hydration complete so the real reduced-motion preference
    // can be applied. SSR and the first client render use the
    // deterministic default to avoid a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // During SSR and first client render, return deterministic values.
  if (!mounted) {
    return { reduce: defaultReduce, mounted: false };
  }

  return { reduce, mounted: true };
}

/** Easing — sharp entry, smooth settle */
export const EASE = {
  /** Primary: fast start, decelerate to rest */
  out: [0.22, 1, 0.36, 1] as [number, number, number, number],
  /** Gentle deceleration for larger reveals */
  gentle: [0.16, 1, 0.3, 1] as [number, number, number, number],
  /** Quick snap for micro-interactions */
  snap: [0.2, 0, 0, 1] as [number, number, number, number],
  /** Smooth draw for lines and reveals */
  draw: [0.65, 0, 0.35, 1] as [number, number, number, number],
} as const;

/** Duration tokens in seconds */
export const DUR = {
  /** Fast — 0.15s — micro-interactions, hover states */
  fast: 0.15,
  /** Base — 0.3s — standard reveals, transitions */
  base: 0.3,
  /** Medium — 0.5s — content reveals, section entrances */
  medium: 0.5,
  /** Slow — 0.7s — headline reveals, major visual moments */
  slow: 0.7,
  /** Cinematic — 0.8s — hero headline masked reveal */
  cinematic: 0.8,
  /** Draw — 0.6s — line/clip-path reveals */
  draw: 0.6,
  /** Entrance — 0.35s — staggered element entrance */
  entrance: 0.35,
} as const;

/** Stagger delays for sequential reveals */
export const STAGGER = {
  /** Tight — elements in a row */
  tight: 0.06,
  /** Normal — related elements */
  normal: 0.1,
  /** Loose — distinct visual groups */
  loose: 0.15,
  /** Section — between major sections */
  section: 0.2,
} as const;

/** Hero entrance sequence timing (total ~1.5s) */
export const HERO_TIMING = {
  /** Brand mark appears */
  brand: 0,
  /** Geometry begins assembly */
  geometry: 0.1,
  /** DAFFA masked reveal starts */
  headline1: 0.3,
  /** ALFIE masked reveal starts */
  headline2: 0.5,
  /** Teal accent line draws */
  accent: 0.7,
  /** Supporting copy + CTAs */
  copy: 0.9,
  /** Discipline index stagger */
  index: 1.1,
  /** Brand connection text */
  connection: 1.3,
} as const;

/** Pointer depth movement ranges (pixels) */
export const POINTER_DEPTH = {
  /** Background grid — most distant layer */
  grid: 6,
  /** Structural geometry — middle layer */
  geometry: 10,
  /** Radial illumination — closest ambient */
  radial: 12,
} as const;

/** Parallax movement ranges (pixels across scroll range) */
export const PARALLAX = {
  /** Headline — subtle vertical shift */
  headline: 30,
  /** Background geometry — opposite direction */
  geometry: -15,
  /** Radial depth — barely perceptible */
  radial: 8,
} as const;
