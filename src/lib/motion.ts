"use client";

import { useState, useEffect } from "react";
import { useReducedMotion } from "motion/react";

export function useReducedMotionSafe(
  defaultReduce = false
): { reduce: boolean; mounted: boolean } {
  const preference = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  const reduce = preference ?? defaultReduce;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return { reduce: defaultReduce, mounted: false };
  }

  return { reduce, mounted: true };
}

export const EASE = {
  out: [0.22, 1, 0.36, 1] as [number, number, number, number],
  gentle: [0.16, 1, 0.3, 1] as [number, number, number, number],
  snap: [0.2, 0, 0, 1] as [number, number, number, number],
  draw: [0.65, 0, 0.35, 1] as [number, number, number, number],
  smooth: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
} as const;

export const DUR = {
  fast: 0.15,
  base: 0.3,
  medium: 0.5,
  slow: 0.7,
  cinematic: 0.8,
  draw: 0.6,
  entrance: 0.35,
  reveal: 0.9,
} as const;

export const STAGGER = {
  tight: 0.06,
  normal: 0.1,
  loose: 0.15,
  section: 0.2,
} as const;

export const HERO_TIMING = {
  brand: 0,
  geometry: 0.1,
  headline1: 0.3,
  headline2: 0.5,
  accent: 0.7,
  copy: 0.9,
  index: 1.1,
  connection: 1.3,
} as const;

export const POINTER_DEPTH = {
  grid: 6,
  geometry: 10,
  radial: 12,
} as const;

export const PARALLAX = {
  headline: 30,
  geometry: -15,
  radial: 8,
} as const;

export const TRANSITION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  clipReveal: {
    hidden: { clipPath: "inset(100% 0 0 0)" },
    visible: { clipPath: "inset(0% 0 0 0)" },
  },
  lineDraw: {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1 },
  },
  maskReveal: {
    hidden: { y: "110%" },
    visible: { y: 0 },
  },
} as const;

export const CONTAINER_VARIANTS = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
} as const;

export const STATIC_VARIANTS = {
  hidden: {},
  visible: {},
} as const;

export const STATIC_ITEM = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
} as const;
