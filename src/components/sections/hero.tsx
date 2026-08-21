"use client";

import { motion, useReducedMotion } from "motion/react";
import { SITE } from "@/lib/constants";
import { Container } from "@/components/ui/container";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const DISCIPLINES = [
  { index: "01", label: "Cybersecurity" },
  { index: "02", label: "Software Engineering" },
  { index: "03", label: "AI / Systems" },
] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const name = "DAFFA ALFIE";
  const words = name.split(" ");

  return (
    <section
      className="relative flex min-h-[85dvh] flex-col justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--fg-primary) 1px, transparent 1px),
                           linear-gradient(90deg, var(--fg-primary) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Eyebrow */}
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.2 }}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-fg">
              Technology Builder
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="flex flex-col gap-2">
            <h1
              id="hero-heading"
              className="text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            >
              {words.map((word, i) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={reduceMotion ? { opacity: 1, y: 0 } : { y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.7,
                      delay: reduceMotion ? 0 : 0.4 + i * 0.15,
                      ease: EASE,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Accent line */}
            <motion.div
              className="mt-4 h-px bg-accent"
              initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.8, ease: EASE }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Supporting copy + CTAs + Discipline Index */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <motion.div
              className="flex flex-col gap-6 max-w-lg"
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 1.0 }}
            >
              <p className="text-base leading-relaxed text-secondary md:text-lg">
                Building systems to understand how they work.
                Cybersecurity, software engineering, AI.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                {/*
                  Primary CTA: Work section not yet implemented.
                  Using <button> to keep the CTA visually present and accessible
                  without a broken anchor. Will convert to <a href="#work"> when
                  the Work section exists.
                */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover active:scale-[0.98]"
                  aria-label="Explore Work (coming soon)"
                >
                  Explore Work
                </button>
                <a
                  href={`https://github.com/${SITE.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-border-default px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface active:scale-[0.98]"
                >
                  GitHub
                </a>
              </div>
            </motion.div>

            {/* Discipline Index — structural counterweight to the headline */}
            <motion.aside
              className="hidden flex-col gap-4 lg:flex lg:min-w-[200px]"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 1.2 }}
              aria-label="Core disciplines"
            >
              {DISCIPLINES.map((d, i) => (
                <motion.div
                  key={d.index}
                  className="flex items-baseline gap-3"
                  initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                    delay: reduceMotion ? 0 : 1.3 + i * 0.1,
                  }}
                >
                  <span className="font-mono text-[11px] tabular-nums text-faint">
                    {d.index}
                  </span>
                  <span className="text-sm font-medium tracking-wide text-muted-fg">
                    {d.label}
                  </span>
                </motion.div>
              ))}
              {/* Subtle brand connection */}
              <motion.span
                className="mt-2 font-mono text-[11px] tracking-wide text-faint"
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 1.6 }}
              >
                Builder behind Xevryn
              </motion.span>
            </motion.aside>
          </div>
        </div>
      </Container>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-border-subtle"
        initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: reduceMotion ? 0 : 1, delay: reduceMotion ? 0 : 1.4, ease: EASE }}
        style={{ transformOrigin: "left" }}
        aria-hidden="true"
      />
    </section>
  );
}
