/**
 * Project constants for Daffa Alfie's portfolio.
 * Centralised source of truth for design tokens, z-index scale, and site metadata.
 */

/* ─── Design Dials (Taste Skill v2) ──────────────────────── */

export const DESIGN_VARIANCE = 8;
export const MOTION_INTENSITY = 6;
export const VISUAL_DENSITY = 6;

/* ─── Z-Index Scale ──────────────────────────────────────── */

export const Z = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  nav: 30,
  overlay: 40,
  modal: 50,
  toast: 60,
} as const;

/* ─── Breakpoints (Tailwind defaults) ────────────────────── */

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

/* ─── Site Metadata ──────────────────────────────────────── */

export const SITE = {
  name: "Daffa Alfie",
  title: "Daffa Alfie - Technology Builder",
  description:
    "Personal portfolio of Daffa Alfie, an early-career technology builder focused on cybersecurity, software engineering, AI experimentation, and systems understanding.",
  url: "", // Set to production URL after deployment/domain confirmation
  github: "alfiedafa3",
  email: "", // Add when ready
} as const;

/* ─── Accent Color Family ────────────────────────────────── */

export const ACCENT = {
  /** Primary accent - teal/cyan: cybersecurity-tech DNA */
  primary: "var(--accent-primary)",
  /** Accent foreground - always high contrast on accent bg */
  foreground: "var(--accent-foreground)",
  /** Subtle accent surface - very low opacity accent tint */
  subtle: "var(--accent-subtle)",
  /** Muted accent - for borders and hover states */
  muted: "var(--accent-muted)",
} as const;
