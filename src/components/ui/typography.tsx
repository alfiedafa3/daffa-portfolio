/**
 * Typography primitives.
 * Semantic heading and body components built on the Geist family.
 * These are Server Components by default. Wrap in "use client" only if interactive.
 */

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ─── Display / Heading ──────────────────────────────────── */

interface HeadingProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

export function Heading({ children, as: Tag = "h2", className }: HeadingProps) {
  const base = "font-semibold tracking-tight text-foreground";

  const sizeMap: Record<string, string> = {
    h1: "text-4xl md:text-5xl lg:text-6xl leading-[1.05]",
    h2: "text-3xl md:text-4xl lg:text-5xl leading-[1.1]",
    h3: "text-2xl md:text-3xl leading-[1.15]",
    h4: "text-xl md:text-2xl leading-[1.2]",
  };

  return (
    <Tag className={cn(base, sizeMap[Tag], className)}>{children}</Tag>
  );
}

/* ─── Body Text ──────────────────────────────────────────── */

interface BodyProps {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  maxW?: boolean;
}

export function Body({ children, className, muted, maxW = true }: BodyProps) {
  return (
    <p
      className={cn(
        "text-base md:text-lg leading-relaxed text-muted-fg",
        muted && "text-zinc-500",
        maxW && "max-w-prose",
        className
      )}
    >
      {children}
    </p>
  );
}

/* ─── Eyebrow / Section Label ────────────────────────────── */

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-fg",
        className
      )}
    >
      {children}
    </span>
  );
}

/* ─── Technical Mono Text ────────────────────────────────── */

interface MonoProps {
  children: ReactNode;
  className?: string;
}

export function Mono({ children, className }: MonoProps) {
  return (
    <span
      className={cn(
        "font-mono text-sm text-muted-fg tabular-nums",
        className
      )}
    >
      {children}
    </span>
  );
}
