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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  const gridX = useTransform(smoothX, (v) => v * POINTER_DEPTH.grid);
  const gridY = useTransform(smoothY, (v) => v * POINTER_DEPTH.grid);
  const geoX = useTransform(smoothX, (v) => v * POINTER_DEPTH.geometry);
  const geoYRaw = useTransform(smoothY, (v) => v * POINTER_DEPTH.geometry);
  const radialX = useTransform(smoothX, (v) => v * POINTER_DEPTH.radial);
  const radialYRaw = useTransform(smoothY, (v) => v * POINTER_DEPTH.radial);

  const headlineTrackX = useTransform(smoothX, (v) => v * 2);
  const headlineTrackY = useTransform(smoothY, (v) => v * 1.5);

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

  const headlineX = useMotionTemplate`${headlineTrackX}px`;
  const headlineY = useMotionTemplate`calc(${headlineTrackY}px + ${headlineParallax}px)`;
  const geoY = useMotionTemplate`calc(${geoYRaw}px + ${geometryParallax}px)`;
  const radialY = useMotionTemplate`calc(${radialYRaw}px + ${radialParallax}px)`;

  const handlePointerMove = (e: React.PointerEvent) => {
    if (reduceMotion) return;
    if (e.pointerType === "touch") return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    mouseX.set(nx);
    mouseY.set(ny);
  };

  const name = "DAFFA ALFIE";
  const words = name.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  const headlineWordVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1 },
  };

  const rmVariants = {
    hidden: {},
    visible: {},
  };
  const rmItem = { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } };
  const rmWord = { hidden: { y: 0, opacity: 1 }, visible: { y: 0, opacity: 1 } };
  const rmLine = { hidden: { scaleX: 1, opacity: 1 }, visible: { scaleX: 1, opacity: 1 } };

  const v = reduceMotion
    ? { container: rmVariants, item: rmItem, word: rmWord, line: rmLine }
    : { container: containerVariants, item: itemVariants, word: headlineWordVariants, line: lineVariants };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[50dvh] flex-col justify-center overflow-hidden py-20 md:py-28 lg:py-32"
      aria-labelledby="hero-heading"
      onPointerMove={handlePointerMove}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(var(--fg-primary) 1px, transparent 1px),
                             linear-gradient(90deg, var(--fg-primary) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",
            x: reduceMotion ? 0 : gridX,
            y: reduceMotion ? 0 : gridY,
          }}
        />

        <motion.div
          className="absolute inset-0"
          style={{
            x: motionMounted && !reduceMotion ? geoX : 0,
            y: motionMounted && !reduceMotion ? geoY : 0,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{
            duration: reduceMotion ? 0 : DUR.medium,
            ease: EASE.gentle,
          }}
        >
          <motion.div
            className="absolute h-full w-px"
            style={{
              left: "55%",
              transform: "rotate(15deg)",
              transformOrigin: "top center",
              background:
                "linear-gradient(to bottom, transparent 0%, var(--accent-primary) 30%, var(--accent-primary) 70%, transparent 100%)",
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 0.15, scaleY: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: reduceMotion ? 0 : DUR.slow,
              delay: 0.2,
              ease: EASE.gentle,
            }}
          />
          <motion.div
            className="absolute h-full w-px"
            style={{
              left: "62%",
              transform: "rotate(-10deg)",
              transformOrigin: "top center",
              background:
                "linear-gradient(to bottom, transparent 5%, var(--fg-primary) 35%, var(--fg-primary) 65%, transparent 95%)",
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 0.06, scaleY: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: reduceMotion ? 0 : DUR.slow,
              delay: 0.35,
              ease: EASE.gentle,
            }}
          />
          <motion.div
            className="absolute left-[5%] right-[5%] h-px"
            style={{
              top: "72%",
              background:
                "linear-gradient(to right, transparent, var(--fg-primary), transparent)",
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 0.04, scaleX: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: reduceMotion ? 0 : DUR.medium,
              delay: 0.5,
              ease: EASE.out,
            }}
          />
        </motion.div>

        <motion.div
          className="absolute h-[600px] w-[600px] rounded-full"
          style={{
            top: "15%",
            left: "25%",
            background:
              "radial-gradient(circle, var(--accent-primary), transparent 70%)",
            x: reduceMotion ? 0 : radialX,
            y: reduceMotion ? 0 : radialY,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.04 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{
            duration: reduceMotion ? 0 : DUR.slow,
            delay: 0.1,
            ease: EASE.gentle,
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="flex flex-col gap-10 lg:gap-14"
          variants={v.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <motion.div variants={v.item}>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-fg">
              Technology Builder
            </span>
          </motion.div>

          <motion.div
            ref={headlineRef}
            className="flex flex-col gap-3"
            style={{
              x: motionMounted && !reduceMotion ? headlineX : 0,
              y: motionMounted && !reduceMotion ? headlineY : 0,
            }}
          >
            <h1
              id="hero-heading"
              className="text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            >
              {words.map((word, i) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    variants={v.word}
                    transition={{
                      duration: reduceMotion ? 0 : DUR.cinematic,
                      delay: reduceMotion ? 0 : 0.15 + i * 0.1,
                      ease: EASE.gentle,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              className="mt-5 h-[2px] w-24 bg-accent"
              variants={v.line}
              transition={{
                duration: reduceMotion ? 0 : DUR.draw,
                delay: reduceMotion ? 0 : 0.45,
                ease: EASE.draw,
              }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <motion.div
              className="flex flex-col gap-5 max-w-lg"
              variants={v.item}
            >
              <p className="text-base leading-relaxed text-secondary md:text-lg">
                Building systems to understand how they work.
                Cybersecurity, software engineering, AI.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  href="#work"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground"
                  whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  transition={{ duration: DUR.fast, ease: EASE.snap }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Work
                    <motion.span
                      className="inline-block"
                      whileHover={reduceMotion ? undefined : { x: 4 }}
                      transition={{ duration: DUR.fast, ease: EASE.snap }}
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.span>
                  </span>
                </motion.a>
                <motion.a
                  href={`https://github.com/${SITE.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link inline-flex items-center justify-center rounded-lg border border-border-default px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
                  whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  transition={{ duration: DUR.fast, ease: EASE.snap }}
                >
                  GitHub
                </motion.a>
              </div>
            </motion.div>

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
                    delay: reduceMotion ? 0 : 0.6 + i * STAGGER.tight,
                  }}
                >
                  <span className="font-mono text-[11px] tabular-nums text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium tracking-wide text-muted-fg">
                    {label}
                  </span>
                </motion.div>
              ))}
              <motion.span
                className="mt-2 font-mono text-[11px] tracking-wide text-faint"
                variants={v.item}
                transition={{ delay: reduceMotion ? 0 : 0.8 }}
              >
                Builder behind Xevryn
              </motion.span>
            </motion.aside>
          </div>
        </motion.div>
      </Container>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, var(--accent-primary), transparent)",
        }}
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 0.2, scaleX: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          duration: reduceMotion ? 0 : DUR.slow,
          delay: 0.3,
          ease: EASE.out,
        }}
        aria-hidden="true"
      />
    </section>
  );
}
