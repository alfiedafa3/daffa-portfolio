"use client";

import { motion, useReducedMotion } from "motion/react";
import { PROJECTS } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { EASE, DUR, STAGGER } from "@/lib/motion";

export function Work() {
  const reduceMotion = useReducedMotion();
  const featured = PROJECTS[0];

  return (
    <section
      id="work"
      className="relative py-20 md:py-32 overflow-hidden"
      aria-labelledby="work-heading"
    >
      {/* Background — subtle shift from About */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--fg-primary) 1px, transparent 1px),
                             linear-gradient(90deg, var(--fg-primary) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to bottom, transparent 10%, black 30%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 10%, black 30%, black 70%, transparent 100%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Section header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={
            reduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 16 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : DUR.medium,
            ease: EASE.out,
          }}
        >
          <h2
            id="work-heading"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-fg"
          >
            Selected Work
          </h2>
        </motion.div>

        {/* Featured project — asymmetric composition */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* Left: Project visual area */}
          <motion.div
            className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface/50"
            initial={
              reduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 24 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : DUR.medium,
              ease: EASE.out,
            }}
          >
            {/* Typographic project identity — acts as visual until real screenshot exists */}
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-8">
              {/* Grid overlay for technical feel */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `linear-gradient(var(--fg-primary) 1px, transparent 1px),
                                   linear-gradient(90deg, var(--fg-primary) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Large project name as visual anchor */}
              <span className="relative font-display text-4xl font-bold tracking-tight text-foreground/10 sm:text-5xl md:text-6xl lg:text-7xl select-none">
                {featured.name}
              </span>
              {/* Accent corner */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <div className="h-2 w-2 rounded-full bg-accent" />
              </div>
            </div>
          </motion.div>

          {/* Right: Project information */}
          <div className="flex flex-col gap-6 lg:py-4">
            {/* Project name and tagline */}
            <motion.div
              className="flex flex-col gap-2"
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
            >
              <h3 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {featured.name}
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                {featured.tagline}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base leading-relaxed text-secondary md:text-lg max-w-lg"
              initial={
                reduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 12 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: reduceMotion ? 0 : DUR.medium,
                delay: reduceMotion ? 0 : STAGGER.normal * 2,
                ease: EASE.out,
              }}
            >
              {featured.description}
            </motion.p>

            {/* Role */}
            <motion.div
              className="flex flex-col gap-1"
              initial={
                reduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 12 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: reduceMotion ? 0 : DUR.base,
                delay: reduceMotion ? 0 : STAGGER.normal * 3,
                ease: EASE.out,
              }}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
                Role
              </span>
              <span className="text-sm text-muted-fg">
                {featured.role}
              </span>
            </motion.div>

            {/* Technology */}
            <motion.div
              className="flex flex-col gap-3"
              initial={
                reduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 12 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: reduceMotion ? 0 : DUR.base,
                delay: reduceMotion ? 0 : STAGGER.normal * 4,
                ease: EASE.out,
              }}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
                Technology
              </span>
              <div className="flex flex-wrap gap-2">
                {featured.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-surface px-3 py-1 text-xs font-medium text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {featured.architecture.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {featured.architecture.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-surface/50 px-3 py-1 text-xs text-faint"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            {/* CTA or private status */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mt-2"
              initial={
                reduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 12 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: reduceMotion ? 0 : DUR.base,
                delay: reduceMotion ? 0 : STAGGER.normal * 5,
                ease: EASE.out,
              }}
            >
              {featured.liveUrl ? (
                <motion.a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover active:scale-[0.98]"
                  whileHover={
                    reduceMotion ? undefined : { scale: 1.02 }
                  }
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  transition={{ duration: DUR.fast, ease: EASE.snap }}
                >
                  Visit Live Site
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </motion.a>
              ) : (
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
                  Private Build
                </span>
              )}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
