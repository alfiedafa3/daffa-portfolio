"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { EASE, DUR, STAGGER, useReducedMotionSafe } from "@/lib/motion";

interface Milestone {
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  details?: string[];
  highlight?: boolean;
  achievement?: string;
  context?: string;
}

const MILESTONES: Milestone[] = [
  {
    category: "Part-time Work",
    title: "Coffee Street",
    description:
      "Cashier, barista, customer service, stock and operational work. Closing duties, long shifts, direct responsibility.",
    details: ["Cashier", "Barista", "Customer Service", "Operations"],
  },
  {
    category: "Creative Leadership",
    title: "Media 3",
    subtitle: "Vice Lead, Video Division",
    description:
      "Photography, videography, editing, and short-film production. Coordinated video division work and contributed to creative output.",
    details: ["Photography", "Videography", "Editing", "Film Production"],
  },
  {
    category: "Film",
    title: "Short-Film Projects",
    description:
      "Contributed to school short-film projects and a short-film project associated with IPB. Focused on editing and media production.",
    details: ["Editing", "Media Production"],
  },
  {
    category: "Competition",
    title: "Free Fire",
    highlight: true,
    achievement: "1st Place",
    context: "Regency-Level Inter-School Competition",
    description:
      "Competitive school player. Won first place at a regency-level inter-school Free Fire competition.",
  },
  {
    category: "Education",
    title: "Cyber University",
    description:
      "Current institution. Building toward technology exploration and systems understanding.",
    details: ["Current"],
  },
  {
    category: "Current Direction",
    title: "Technology Builder",
    description:
      "Building systems, learning security foundations, developing software skills. The path continues.",
    details: ["Software", "Security", "AI / Systems"],
  },
];

export function Journey() {
  const { reduce: reduceMotion } = useReducedMotionSafe();

  return (
    <section
      id="journey"
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="journey-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            background:
              "linear-gradient(170deg, transparent 55%, var(--accent-subtle) 55.5%, transparent 56%)",
            opacity: 0.4,
          }}
        />
        <div
          className="absolute top-[20%] right-[5%] h-px w-[25%]"
          style={{
            background: "linear-gradient(to left, var(--accent-primary), transparent)",
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
            id="journey-heading"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-fg"
          >
            Journey
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10 md:gap-12">
          {MILESTONES.map((milestone, i) => (
            <motion.article
              key={milestone.title}
              className="relative"
              initial={
                reduceMotion
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: i % 2 === 0 ? -24 : 24 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0 : DUR.medium,
                delay: reduceMotion ? 0 : i * STAGGER.tight,
                ease: EASE.out,
              }}
            >
              {milestone.highlight ? (
                <div className="relative rounded-xl bg-accent/8 border border-accent/30 p-6 md:p-8">
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                      {milestone.category}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-3xl font-bold tracking-tight text-accent md:text-4xl">
                        {milestone.achievement}
                      </span>
                      <span className="text-sm font-medium text-muted-fg">
                        {milestone.context}
                      </span>
                    </div>
                    <p className="text-sm text-secondary max-w-lg mt-1">
                      {milestone.description}
                    </p>
                  </div>
                  <div
                    className="absolute top-0 right-0 h-24 w-24"
                    style={{
                      background: "radial-gradient(circle at top right, var(--accent-primary), transparent 70%)",
                      opacity: 0.1,
                    }}
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[180px_1fr] md:gap-10">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                      {milestone.category}
                    </span>
                    {milestone.details && (
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {milestone.details.map((d) => (
                          <span
                            key={d}
                            className="font-mono text-[10px] text-faint"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {milestone.title}
                    </h3>
                    {milestone.subtitle && (
                      <span className="text-sm text-accent font-medium">
                        {milestone.subtitle}
                      </span>
                    )}
                    <p className="text-sm leading-relaxed text-secondary max-w-lg">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px" aria-hidden="true">
        <motion.div
          className="h-full w-full"
          style={{
            background: "linear-gradient(to right, transparent, var(--accent-primary), transparent)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : DUR.medium, ease: EASE.out }}
        />
      </div>
    </section>
  );
}
