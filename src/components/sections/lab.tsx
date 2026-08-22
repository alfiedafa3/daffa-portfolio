"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { EASE, DUR, STAGGER, useReducedMotionSafe } from "@/lib/motion";

const EXPERIMENTS = [
  {
    label: "Lua / Roblox Systems",
    status: "hands-on",
    description:
      "Scripting, UI building, automation experiments, and game-system exploration through Roblox.",
    tags: ["Lua", "Roblox", "UI Scripting", "Automation"],
  },
  {
    label: "Web Foundations",
    status: "hands-on",
    description:
      "HTML structure, interface design, and browser-based experimentation.",
    tags: ["HTML", "Interface Design", "Browser APIs"],
  },
  {
    label: "AI / Systems",
    status: "exploring",
    description:
      "Using AI-assisted workflows to explore application behaviour, product ideas, and system design.",
    tags: ["AI Workflows", "Product Exploration", "Systems Thinking"],
  },
  {
    label: "Security Foundations",
    status: "learning",
    description:
      "Theoretical study of security concepts, threat modelling, and systems understanding.",
    tags: ["Theory", "Threat Modelling", "Systems Thinking"],
  },
] as const;

const STATUS_COPY: Record<string, string> = {
  "hands-on": "Hands-on",
  exploring: "Exploring",
  learning: "Learning",
};

export function Lab() {
  const { reduce: reduceMotion } = useReducedMotionSafe();

  return (
    <section
      id="lab"
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="lab-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-0 right-0 h-full w-1/3"
          style={{
            background: "linear-gradient(135deg, transparent 0%, var(--accent-subtle) 100%)",
            opacity: 0.3,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--accent-primary), transparent 70%)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : DUR.slow, ease: EASE.gentle }}
        />
        <div
          className="absolute top-[15%] right-[8%] h-px w-[30%]"
          style={{
            background: "linear-gradient(to left, var(--accent-primary), transparent)",
            opacity: 0.12,
          }}
        />
        <div
          className="absolute bottom-[25%] left-[3%] h-px w-[20%]"
          style={{
            background: "linear-gradient(to right, var(--accent-primary), transparent)",
            opacity: 0.08,
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="mb-12 md:mb-16"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : DUR.medium,
            ease: EASE.out,
          }}
        >
          <h2
            id="lab-heading"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent"
          >
            Lab
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-6">
          <motion.div
            className="md:col-span-7 md:row-span-2"
            initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : DUR.medium,
              ease: EASE.out,
            }}
          >
            <div className="group relative rounded-xl bg-surface/50 p-6 md:p-8 h-full border border-accent/20 transition-all duration-300 hover:border-accent/40 hover:bg-surface/70">
              <div className="flex flex-col gap-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-2xl font-bold tracking-tight text-accent md:text-3xl">
                    {EXPERIMENTS[0].label}
                  </span>
                  <span className="font-mono text-[10px] text-faint">
                    {STATUS_COPY[EXPERIMENTS[0].status]}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-secondary max-w-md">
                  {EXPERIMENTS[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {EXPERIMENTS[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-5"
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : DUR.medium,
              delay: reduceMotion ? 0 : STAGGER.normal,
              ease: EASE.out,
            }}
          >
            <div className="group relative rounded-xl bg-surface/40 p-5 md:p-6 h-full border border-transparent transition-all duration-300 hover:border-accent/20 hover:bg-surface/60">
              <div className="flex flex-col gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                    {EXPERIMENTS[1].label}
                  </span>
                  <span className="font-mono text-[10px] text-faint">
                    {STATUS_COPY[EXPERIMENTS[1].status]}
                  </span>
                </div>
                <p className="text-sm text-secondary">
                  {EXPERIMENTS[1].description}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {EXPERIMENTS[1].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface/80 px-2.5 py-0.5 text-[11px] text-faint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-5"
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : DUR.medium,
              delay: reduceMotion ? 0 : STAGGER.normal * 2,
              ease: EASE.out,
            }}
          >
            <div className="group relative rounded-xl bg-surface/40 p-5 md:p-6 h-full border border-transparent transition-all duration-300 hover:border-accent/20 hover:bg-surface/60">
              <div className="flex flex-col gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                    {EXPERIMENTS[2].label}
                  </span>
                  <span className="font-mono text-[10px] text-faint">
                    {STATUS_COPY[EXPERIMENTS[2].status]}
                  </span>
                </div>
                <p className="text-sm text-secondary">
                  {EXPERIMENTS[2].description}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {EXPERIMENTS[2].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface/80 px-2.5 py-0.5 text-[11px] text-faint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-12"
            initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : DUR.medium,
              delay: reduceMotion ? 0 : STAGGER.normal * 3,
              ease: EASE.out,
            }}
          >
            <div className="group relative rounded-xl bg-surface/30 p-5 md:p-6 border border-transparent transition-all duration-300 hover:border-accent/15 hover:bg-surface/50">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-8">
                <div className="flex flex-col gap-2 md:min-w-[200px]">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                      {EXPERIMENTS[3].label}
                    </span>
                    <span className="font-mono text-[10px] text-faint">
                      {STATUS_COPY[EXPERIMENTS[3].status]}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-secondary max-w-lg">
                  {EXPERIMENTS[3].description}
                </p>
                <div className="flex flex-wrap gap-2 md:ml-auto">
                  {EXPERIMENTS[3].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface/80 px-2.5 py-0.5 text-[11px] text-faint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px" aria-hidden="true">
        <motion.div
          className="h-full w-full"
          style={{
            background: "linear-gradient(to right, transparent, var(--accent-primary), transparent)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.12 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : DUR.medium, ease: EASE.out }}
        />
      </div>
    </section>
  );
}
