"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  useSpring,
  useMotionTemplate,
} from "motion/react";
import { SITE } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import {
  EASE,
  DUR,
  STAGGER,
  useReducedMotionSafe,
  POINTER_DEPTH,
  PARALLAX,
} from "@/lib/motion";

const DISCIPLINES = [
  "Cybersecurity",
  "Software Engineering",
  "AI / Systems",
] as const;

export function Hero() {
  const { reduce: reduceMotion, mounted: motionMounted } = useReducedMotionSafe();
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  // Pointer tracking (desktop only, via motion values — no React state)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth pointer values for depth layers
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  // Transform pointer to depth layers (raw pointer values)
  const gridX = useTransform(smoothX, (v) => v * POINTER_DEPTH.grid);
  const gridY = useTransform(smoothY, (v) => v * POINTER_DEPTH.grid);
  const geoX = useTransform(smoothX, (v) => v * POINTER_DEPTH.geometry);
  const geoYRaw = useTransform(smoothY, (v) => v * POINTER_DEPTH.geometry);
  const radialX = useTransform(smoothX, (v) => v * POINTER_DEPTH.radial);
  const radialYRaw = useTransform(smoothY, (v) => v * POINTER_DEPTH.radial);

  // Headline pointer tracking (subtle displacement)
  const headlineTrackX = useTransform(smoothX, (v) => v * 2);
  const headlineTrackY = useTransform(smoothY, (v) => v * 1.5);

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const headlineParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -PARALLAX.headline]
  );
  const geometryParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [0, PARALLAX.geometry]
  );
  const radialParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -PARALLAX.radial]
  );

  // Combine pointer + parallax via template strings
  const headlineX = useMotionTemplate`${headlineTrackX}px`;
  const headlineY = useMotionTemplate`calc(${headlineTrackY}px + ${headlineParallax}px)`;
  const geoY = useMotionTemplate`calc(${geoYRaw}px + ${geometryParallax}px)`;
  const radialY = useMotionTemplate`calc(${radialYRaw}px + ${radialParallax}px)`;

  // Pointer handler (desktop only)
  const handlePointerMove = (e: React.PointerEvent) => {
    if (reduceMotion) return;
    // Only respond to mouse-like devices (not touch)
    if (e.pointerType === "touch") return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    // Normalize to -1..1 centered on viewport center
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    mouseX.set(nx);
    mouseY.set(ny);
  };

  const name = "DAFFA ALFIE";
  const words = name.split(" ");

  // Single parent viewport trigger drives the entire choreography.
  // Children stagger from this shared state — no independent per-word observers.
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
  };

  const headlineWordVariants = {
    hidden: { y: "110%" },
    visible: { y: 0 },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1 },
  };

  // For reduced motion, hidden === visible (no animation, immediately shown)
  const rmVariants = {
    hidden: {},
    visible: {},
  };
  const rmItem = { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } };
  const rmWord = { hidden: { y: 0 }, visible: { y: 0 } };
  const rmLine = { hidden: { scaleX: 1 }, visible: { scaleX: 1 } };

  const v = reduceMotion
    ? { container: rmVariants, item: rmItem, word: rmWord, line: rmLine }
    : { container: containerVariants, item: itemVariants, word: headlineWordVariants, line: lineVariants };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[40dvh] flex-col justify-center overflow-hidden py-24 md:py-32"
      aria-labelledby="hero-heading"
      onPointerMove={handlePointerMove}
    >
      {/* Background depth — grid + XEVRYN geometry + radial illumination */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Grid — fades toward bottom, responds to pointer */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--fg-primary) 1px, transparent 1px),
                             linear-gradient(90deg, var(--fg-primary) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
            x: reduceMotion ? 0 : gridX,
            y: reduceMotion ? 0 : gridY,
          }}
        />

        {/* XEVRYN structural intersection — the dominant geometry */}
        <motion.div
          className="absolute inset-0"
          style={{
            x: motionMounted && !reduceMotion ? geoX : 0,
            y: motionMounted && !reduceMotion ? geoY : 0,
          }}
          variants={v.line}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{
            duration: reduceMotion ? 0 : DUR.medium,
            ease: EASE.gentle,
          }}
        >
          {/* Primary diagonal — top-left to bottom-right */}
          <div
            className="absolute h-full w-px opacity-[0.08]"
            style={{
              left: "60%",
              transform: "rotate(12deg)",
              transformOrigin: "top center",
              background:
                "linear-gradient(to bottom, transparent 5%, var(--accent-primary) 40%, var(--accent-primary) 60%, transparent 95%)",
            }}
          />
          {/* Secondary diagonal — crossing line */}
          <div
            className="absolute h-full w-px opacity-[0.05]"
            style={{
              left: "65%",
              transform: "rotate(-8deg)",
              transformOrigin: "top center",
              background:
                "linear-gradient(to bottom, transparent 10%, var(--fg-primary) 35%, var(--fg-primary) 55%, transparent 90%)",
            }}
          />
          {/* Horizontal structural guide */}
          <div
            className="absolute left-[10%] right-[10%] h-px opacity-[0.04]"
            style={{
              top: "70%",
              background:
                "linear-gradient(to right, transparent, var(--fg-primary), transparent)",
            }}
          />
        </motion.div>

        {/* Radial illumination — responds to pointer */}
        <motion.div
          className="absolute h-[500px] w-[500px] rounded-full opacity-[0.03]"
          style={{
            top: "20%",
            left: "30%",
            background:
              "radial-gradient(circle, var(--accent-primary), transparent 70%)",
            x: reduceMotion ? 0 : radialX,
            y: reduceMotion ? 0 : radialY,
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="flex flex-col gap-12 lg:gap-16"
          variants={v.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          {/* Eyebrow — appears quickly and quietly */}
          <motion.div variants={v.item}>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-fg">
              Technology Builder
            </span>
          </motion.div>

          {/* Main Headline — clip-path masked reveal */}
          <motion.div
            ref={headlineRef}
            className="flex flex-col gap-2"
            style={{
              x: motionMounted && !reduceMotion ? headlineX : 0,
              y: motionMounted && !reduceMotion ? headlineY : 0,
            }}
          >
            <h1
              id="hero-heading"
              className="text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            >
              {words.map((word, i) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    variants={v.word}
                    transition={{
                      duration: reduceMotion ? 0 : DUR.cinematic,
                      delay: reduceMotion ? 0 : i * 0.08,
                      ease: EASE.gentle,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Accent line — draws from left to right */}
            <motion.div
              className="mt-4 h-px bg-accent"
              variants={v.line}
              transition={{
                duration: reduceMotion ? 0 : DUR.draw,
                ease: EASE.draw,
              }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>

          {/* Supporting copy + CTAs + Discipline Index */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <motion.div
              className="flex flex-col gap-6 max-w-lg"
              variants={v.item}
            >
              <p className="text-base leading-relaxed text-secondary md:text-lg">
                Building systems to understand how they work.
                Cybersecurity, software engineering, AI.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  href="#work"
                  className="btn-primary group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground active:scale-[0.98]"
                  whileHover={
                    reduceMotion ? undefined : { scale: 1.02 }
                  }
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  transition={{ duration: DUR.fast, ease: EASE.snap }}
                >
                  Explore Work
                  <motion.span
                    className="inline-block"
                    whileHover={reduceMotion ? undefined : { x: 3 }}
                    transition={{ duration: DUR.fast, ease: EASE.snap }}
                  >
                    →
                  </motion.span>
                </motion.a>
                <motion.a
                  href={`https://github.com/${SITE.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link inline-flex items-center justify-center rounded-lg border border-border-default px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface active:scale-[0.98]"
                  whileHover={
                    reduceMotion ? undefined : { scale: 1.02 }
                  }
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  transition={{ duration: DUR.fast, ease: EASE.snap }}
                >
                  GitHub
                </motion.a>
              </div>
            </motion.div>

            {/* Discipline Index — structural counterweight */}
            <motion.aside
              className="hidden flex-col gap-3 lg:flex lg:min-w-[200px]"
              variants={v.item}
              aria-label="Core disciplines"
            >
              {DISCIPLINES.map((label, i) => (
                <motion.div
                  key={label}
                  className="flex items-baseline gap-3"
                  variants={v.item}
                  transition={{
                    delay: reduceMotion ? 0 : i * STAGGER.tight,
                  }}
                >
                  <span className="font-mono text-[11px] tabular-nums text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium tracking-wide text-muted-fg">
                    {label}
                  </span>
                </motion.div>
              ))}
              {/* Brand connection */}
              <motion.span
                className="mt-2 font-mono text-[11px] tracking-wide text-faint"
                variants={v.item}
              >
                Builder behind Xevryn
              </motion.span>
            </motion.aside>
          </div>
        </motion.div>
      </Container>

      {/* Bottom accent line — draws from left to right */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-border-subtle"
        variants={v.line}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          duration: reduceMotion ? 0 : DUR.slow,
          ease: EASE.out,
        }}
        style={{ transformOrigin: "left" }}
        aria-hidden="true"
      />
    </section>
  );
}
