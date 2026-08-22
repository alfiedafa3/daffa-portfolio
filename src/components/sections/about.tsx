"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ABOUT, CAPABILITIES, STATUS_LABELS } from "@/data/about";
import { Container } from "@/components/ui/container";
import { EASE, DUR, STAGGER, useReducedMotionSafe } from "@/lib/motion";

type CapabilityGroupLabel = "Building" | "Exploring" | "Learning";

export function About() {
  const { reduce: reduceMotion } = useReducedMotionSafe();
  const [hoveredGroup, setHoveredGroup] = useState<CapabilityGroupLabel | null>(null);

  const getGroupOpacity = (label: CapabilityGroupLabel) => {
    if (hoveredGroup === null) return 1;
    if (hoveredGroup === label) return 1;
    return 0.4;
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute top-0 right-0 h-full w-1/2"
          style={{
            background:
              "linear-gradient(135deg, transparent 0%, var(--accent-subtle) 50%, transparent 100%)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : DUR.slow, ease: EASE.gentle }}
        />
        <div
          className="absolute top-[20%] left-[10%] h-px w-[30%]"
          style={{
            background: "linear-gradient(to right, var(--accent-primary), transparent)",
            opacity: 0.1,
          }}
        />
        <div
          className="absolute bottom-[30%] right-[5%] h-px w-[25%]"
          style={{
            background: "linear-gradient(to left, var(--accent-primary), transparent)",
            opacity: 0.08,
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="mb-16 md:mb-20">
          <h2
            id="about-heading"
            className="font-display text-5xl font-bold leading-[0.9] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: reduceMotion ? 0 : DUR.cinematic,
                  ease: EASE.gentle,
                }}
              >
                {ABOUT.statement.line1}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-accent"
                initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: reduceMotion ? 0 : DUR.cinematic,
                  delay: reduceMotion ? 0 : 0.15,
                  ease: EASE.gentle,
                }}
              >
                {ABOUT.statement.line2}
              </motion.span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_260px] lg:gap-20 mb-16 md:mb-20">
          <motion.div
            className="flex flex-col gap-5 max-w-xl"
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : DUR.medium,
              delay: reduceMotion ? 0 : 0.2,
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

          <motion.aside
            className="flex flex-col gap-6"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : DUR.medium,
              delay: reduceMotion ? 0 : 0.3,
              ease: EASE.out,
            }}
          >
            {ABOUT.identity.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-muted-fg">
                  {item.value}
                </span>
              </div>
            ))}

            <div className="mt-2 flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                Education
              </span>
              <span className="text-sm font-medium text-muted-fg">
                {ABOUT.education.institution}
              </span>
              <span className="font-mono text-[10px] text-accent">
                {ABOUT.education.status}
              </span>
            </div>
          </motion.aside>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-6">
            <motion.div
              className="md:col-span-7"
              initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: reduceMotion ? 0 : DUR.medium,
                delay: reduceMotion ? 0 : 0.2,
                ease: EASE.out,
              }}
              style={{ opacity: getGroupOpacity("Building") }}
              onHoverStart={reduceMotion ? undefined : () => setHoveredGroup("Building")}
              onHoverEnd={reduceMotion ? undefined : () => setHoveredGroup(null)}
              onFocus={reduceMotion ? undefined : () => setHoveredGroup("Building")}
              onBlur={reduceMotion ? undefined : () => setHoveredGroup(null)}
            >
              <div className="group relative rounded-xl bg-surface/50 p-6 md:p-8 border border-border-subtle transition-all duration-300 hover:border-accent/30 hover:bg-surface/70">
                <div className="flex flex-col gap-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-3xl font-bold tracking-tight text-accent md:text-4xl">
                      Building
                    </span>
                    <span className="font-mono text-[10px] text-faint">
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

            <div className="md:col-span-5 flex flex-col gap-6">
              <motion.div
                initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: reduceMotion ? 0 : DUR.medium,
                  delay: reduceMotion ? 0 : 0.3,
                  ease: EASE.out,
                }}
                style={{ opacity: getGroupOpacity("Exploring") }}
                onHoverStart={reduceMotion ? undefined : () => setHoveredGroup("Exploring")}
                onHoverEnd={reduceMotion ? undefined : () => setHoveredGroup(null)}
                onFocus={reduceMotion ? undefined : () => setHoveredGroup("Exploring")}
                onBlur={reduceMotion ? undefined : () => setHoveredGroup(null)}
              >
                <div className="group relative rounded-xl bg-surface/30 p-5 md:p-6 border border-transparent transition-all duration-300 hover:border-accent/20 hover:bg-surface/50">
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

              <motion.div
                initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: reduceMotion ? 0 : DUR.medium,
                  delay: reduceMotion ? 0 : 0.4,
                  ease: EASE.out,
                }}
                style={{ opacity: getGroupOpacity("Learning") }}
                onHoverStart={reduceMotion ? undefined : () => setHoveredGroup("Learning")}
                onHoverEnd={reduceMotion ? undefined : () => setHoveredGroup(null)}
                onFocus={reduceMotion ? undefined : () => setHoveredGroup("Learning")}
                onBlur={reduceMotion ? undefined : () => setHoveredGroup(null)}
              >
                <div className="group relative rounded-xl bg-surface/20 p-5 md:p-6 border border-transparent transition-all duration-300 hover:border-accent/15 hover:bg-surface/40">
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

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px" aria-hidden="true">
        <motion.div
          className="h-full w-full"
          style={{
            background: "linear-gradient(to right, transparent, var(--accent-primary), transparent)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : DUR.medium, ease: EASE.out }}
        />
      </div>
    </section>
  );
}
