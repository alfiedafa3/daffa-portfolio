"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ABOUT, CAPABILITIES, STATUS_LABELS } from "@/data/about";
import { Container } from "@/components/ui/container";
import { EASE, DUR, STAGGER } from "@/lib/motion";

type CapabilityGroupLabel = "Building" | "Exploring" | "Learning";

export function About() {
  const reduceMotion = useReducedMotion();
  const [hoveredGroup, setHoveredGroup] = useState<CapabilityGroupLabel | null>(null);

  const getGroupOpacity = (label: CapabilityGroupLabel) => {
    if (hoveredGroup === null) return 1;
    if (hoveredGroup === label) return 1;
    return 0.5;
  };

  const getGroupScale = (label: CapabilityGroupLabel) => {
    if (hoveredGroup === null) return 1;
    if (hoveredGroup === label) return 1.01;
    return 0.99;
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background — XEVRYN intersection geometry */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Primary diagonal cut */}
        <div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, var(--bg-surface) 40%, var(--bg-surface) 40.5%, transparent 40.5%)",
            opacity: 0.3,
          }}
        />
        {/* Secondary diagonal — creates intersection */}
        <div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            background:
              "linear-gradient(-135deg, transparent 65%, var(--accent-subtle) 65%, var(--accent-subtle) 65.3%, transparent 65.3%)",
            opacity: 0.4,
          }}
        />
        {/* Radial depth */}
        <div
          className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, var(--accent-primary), transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Editorial statement — masked reveal */}
        <div className="mb-16 md:mb-24">
          <h2
            id="about-heading"
            className="font-display text-5xl font-bold leading-[0.9] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={
                  reduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: reduceMotion ? 0 : DUR.cinematic,
                  ease: EASE.out,
                }}
              >
                {ABOUT.statement.line1}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-accent"
                initial={
                  reduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: reduceMotion ? 0 : DUR.cinematic,
                  delay: reduceMotion ? 0 : STAGGER.loose,
                  ease: EASE.out,
                }}
              >
                {ABOUT.statement.line2}
              </motion.span>
            </span>
          </h2>
        </div>

        {/* Narrative + identity — staggered reveal */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px] lg:gap-16 mb-16 md:mb-24">
          {/* Narrative */}
          <motion.div
            className="flex flex-col gap-6 max-w-xl"
            initial={
              reduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 16 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : DUR.medium,
              delay: reduceMotion ? 0 : DUR.base,
              ease: EASE.out,
            }}
          >
            {ABOUT.narrative.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-secondary md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Identity facts */}
          <motion.aside
            className="flex flex-col gap-6"
            initial={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 0 }
            }
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : DUR.medium,
              delay: reduceMotion ? 0 : DUR.base + STAGGER.section,
              ease: EASE.out,
            }}
          >
            {ABOUT.identity.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-muted-fg">
                  {item.value}
                </span>
              </div>
            ))}

            {/* Education */}
            <div className="mt-2 flex flex-col gap-1">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
                Education
              </span>
              <span className="text-sm font-medium text-muted-fg">
                {ABOUT.education.institution}
              </span>
              <span className="font-mono text-[11px] text-faint">
                {ABOUT.education.status}
              </span>
            </div>
          </motion.aside>
        </div>

        {/* Capabilities — asymmetric spatial composition with interaction */}
        <div className="relative">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-6">
            {/* BUILDING — primary anchor, largest visual weight */}
            <motion.div
              className="md:col-span-7"
              initial={
                reduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: reduceMotion ? 0 : DUR.medium,
                ease: EASE.out,
              }}
              style={{
                opacity: getGroupOpacity("Building"),
                scale: getGroupScale("Building"),
              }}
              onHoverStart={
                reduceMotion ? undefined : () => setHoveredGroup("Building")
              }
              onHoverEnd={
                reduceMotion ? undefined : () => setHoveredGroup(null)
              }
              onFocus={
                reduceMotion ? undefined : () => setHoveredGroup("Building")
              }
              onBlur={
                reduceMotion ? undefined : () => setHoveredGroup(null)
              }
            >
              <div className="group relative rounded-lg bg-surface/50 p-6 md:p-8 transition-colors duration-300 hover:bg-surface/70">
                <div className="flex flex-col gap-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                      Building
                    </span>
                    <span className="font-mono text-[11px] text-faint">
                      {STATUS_LABELS["hands-on"]}
                    </span>
                  </div>
                  <p className="font-mono text-[11px] text-faint">
                    Technologies used in actual projects and experiments
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {CAPABILITIES[0].items.map((item) => (
                      <span
                        key={item.name}
                        className="text-sm font-medium text-secondary"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* EXPLORING + LEARNING — supporting clusters */}
            <div className="md:col-span-5 flex flex-col gap-6">
              {/* EXPLORING */}
              <motion.div
                initial={
                  reduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: reduceMotion ? 0 : DUR.medium,
                  delay: reduceMotion ? 0 : STAGGER.normal,
                  ease: EASE.out,
                }}
                style={{
                  opacity: getGroupOpacity("Exploring"),
                  scale: getGroupScale("Exploring"),
                }}
                onHoverStart={
                  reduceMotion ? undefined : () => setHoveredGroup("Exploring")
                }
                onHoverEnd={
                  reduceMotion ? undefined : () => setHoveredGroup(null)
                }
                onFocus={
                  reduceMotion ? undefined : () => setHoveredGroup("Exploring")
                }
                onBlur={
                  reduceMotion ? undefined : () => setHoveredGroup(null)
                }
              >
                <div className="group relative rounded-lg bg-surface/30 p-5 md:p-6 transition-colors duration-300 hover:bg-surface/50">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                        Exploring
                      </span>
                      <span className="font-mono text-[10px] text-faint">
                        {STATUS_LABELS["exploring"]}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {CAPABILITIES[1].items.map((item) => (
                        <span
                          key={item.name}
                          className="text-sm text-secondary"
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* LEARNING */}
              <motion.div
                initial={
                  reduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: reduceMotion ? 0 : DUR.medium,
                  delay: reduceMotion ? 0 : STAGGER.normal * 2,
                  ease: EASE.out,
                }}
                style={{
                  opacity: getGroupOpacity("Learning"),
                  scale: getGroupScale("Learning"),
                }}
                onHoverStart={
                  reduceMotion ? undefined : () => setHoveredGroup("Learning")
                }
                onHoverEnd={
                  reduceMotion ? undefined : () => setHoveredGroup(null)
                }
                onFocus={
                  reduceMotion ? undefined : () => setHoveredGroup("Learning")
                }
                onBlur={
                  reduceMotion ? undefined : () => setHoveredGroup(null)
                }
              >
                <div className="group relative rounded-lg bg-surface/20 p-5 md:p-6 transition-colors duration-300 hover:bg-surface/40">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                        Learning
                      </span>
                      <span className="font-mono text-[10px] text-faint">
                        {STATUS_LABELS["learning"]}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {CAPABILITIES[2].items.map((item) => (
                        <span
                          key={item.name}
                          className="text-sm text-secondary"
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
