"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
} from "motion/react";
import { PROJECTS } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { EASE, DUR, STAGGER } from "@/lib/motion";

function TwoOfUsVisual({ reduceMotion }: { reduceMotion: boolean }) {
  const maskRef = useRef<HTMLDivElement>(null);
  const maskInView = useInView(maskRef, { once: true, amount: 0.25 });

  return (
    <div ref={maskRef} className="relative h-full w-full">
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={reduceMotion ? { clipPath: "inset(0 0 0 0 round 0px)" } : { clipPath: "inset(8% 8% 8% 8% round 0px)" }}
        animate={
          reduceMotion
            ? { clipPath: "inset(0 0 0 0 round 0px)" }
            : maskInView
              ? { clipPath: "inset(0 0 0 0 round 0px)" }
              : undefined
        }
        transition={{ duration: reduceMotion ? 0 : DUR.slow, ease: EASE.gentle }}
      >
        <div className="absolute inset-0 bg-[#0c1322]">
          <div
            className="absolute inset-0 opacity-[0.06]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(251,113,133,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,113,133,1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
            }}
          />

          <div className="relative flex h-full flex-col">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(251,113,133,0.25), transparent)",
              }}
            />

            <header className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3 sm:px-7 sm:py-4">
              <div className="flex items-center gap-2">
                <span
                  className="text-sm font-bold tracking-tight"
                  style={{
                    background:
                      "linear-gradient(90deg, #ffe4e6, #fbcfe8, #fb7185)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  TwoOfUs
                </span>
                <span className="text-[10px] text-rose-300/70">❤️</span>
              </div>
              <nav className="hidden items-center gap-4 sm:flex">
                {["Dashboard", "Check-in", "Missions", "Reflection"].map(
                  (item) => (
                    <span
                      key={item}
                      className="text-[10px] uppercase tracking-[0.12em] text-slate-500"
                    >
                      {item}
                    </span>
                  )
                )}
              </nav>
              <span className="rounded-md border border-white/[0.06] px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-slate-500 sm:text-[10px]">
                Account
              </span>
            </header>

            <main className="flex flex-1 flex-col items-center justify-center px-5 sm:px-8">
              <div className="w-full max-w-md">
                <div className="flex flex-col items-center text-center">
                  <motion.h3
                    className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl"
                    style={{
                      background:
                        "linear-gradient(120deg, #ffe4e6 0%, #fbcfe8 45%, #fb7185 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    initial={
                      reduceMotion
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 18 }
                    }
                    animate={
                      reduceMotion
                        ? { opacity: 1, y: 0 }
                        : maskInView
                          ? { opacity: 1, y: 0 }
                          : undefined
                    }
                    transition={{
                      duration: reduceMotion ? 0 : DUR.medium,
                      delay: reduceMotion ? 0 : 0.25,
                      ease: EASE.out,
                    }}
                  >
                    TwoOfUs ❤️
                  </motion.h3>
                  <motion.p
                    className="mt-3 max-w-[280px] text-xs leading-relaxed text-slate-400 sm:max-w-xs sm:text-[13px]"
                    initial={
                      reduceMotion
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 14 }
                    }
                    animate={
                      reduceMotion
                        ? { opacity: 1, y: 0 }
                        : maskInView
                          ? { opacity: 1, y: 0 }
                          : undefined
                    }
                    transition={{
                      duration: reduceMotion ? 0 : DUR.medium,
                      delay: reduceMotion ? 0 : 0.35,
                      ease: EASE.out,
                    }}
                  >
                    A sanctuary designed for you and your partner.
                    Understand feelings, communicate needs safely,
                    reflect daily, and nurture a deeper bond together.
                  </motion.p>
                </div>

                <motion.div
                  className="mt-7 grid grid-cols-3 gap-2 sm:gap-3"
                  initial={
                    reduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0 }
                  }
                  animate={
                    reduceMotion
                      ? { opacity: 1 }
                      : maskInView
                        ? { opacity: 1 }
                        : undefined
                  }
                  transition={{
                    duration: reduceMotion ? 0 : DUR.medium,
                    delay: reduceMotion ? 0 : 0.4,
                    ease: EASE.out,
                  }}
                >
                  {[
                    {
                      name: "Privacy",
                      path: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                    },
                    {
                      name: "AI Guidance",
                      path: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                    },
                    {
                      name: "Memory",
                      path: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                    },
                  ].map((feature, i) => (
                    <motion.div
                      key={feature.name}
                      className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 sm:p-4"
                      initial={
                        reduceMotion
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 16 }
                      }
                      animate={
                        reduceMotion
                          ? { opacity: 1, y: 0 }
                          : maskInView
                            ? { opacity: 1, y: 0 }
                            : undefined
                      }
                      transition={{
                        duration: reduceMotion ? 0 : DUR.medium,
                        delay: reduceMotion ? 0 : 0.45 + i * 0.07,
                        ease: EASE.out,
                      }}
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-rose-500/10">
                        <svg
                          className="h-3.5 w-3.5 text-rose-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.8}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={feature.path}
                          />
                        </svg>
                      </div>
                      <span className="mt-2 block text-[11px] font-semibold leading-tight text-slate-200 sm:text-xs">
                        {feature.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="mt-5 flex items-center justify-center gap-2 sm:mt-6 sm:gap-3"
                  initial={
                    reduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 12 }
                  }
                  animate={
                    reduceMotion
                      ? { opacity: 1, y: 0 }
                      : maskInView
                        ? { opacity: 1, y: 0 }
                        : undefined
                  }
                  transition={{
                    duration: reduceMotion ? 0 : DUR.medium,
                    delay: reduceMotion ? 0 : 0.65,
                    ease: EASE.out,
                  }}
                >
                  <span className="rounded-md px-3 py-1.5 text-[11px] font-semibold text-rose-200 ring-1 ring-rose-500/30 sm:px-4 sm:text-xs">
                    Partner Check-in
                  </span>
                  <span className="rounded-md border border-white/[0.08] px-3 py-1.5 text-[11px] font-medium text-slate-400 sm:px-4 sm:text-xs">
                    View Dashboard
                  </span>
                </motion.div>
              </div>
            </main>

            <footer
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 flex justify-center"
            >
              <div
                className="h-px w-2/3"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(251,113,133,0.35), transparent)",
                }}
              />
            </footer>
          </div>
        </div>
      </motion.div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -top-3 h-12 w-12 border-r border-t border-accent/30 sm:-right-5 sm:-top-5"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-3 -left-3 h-12 w-12 border-b border-l border-accent/30 sm:-bottom-5 sm:-left-5"
      />
    </div>
  );
}

function LiveCta({ url, reduceMotion }: { url: string; reduceMotion: boolean }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center gap-2 py-1 text-sm font-medium text-accent"
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={reduceMotion ? undefined : { x: 2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{
        duration: reduceMotion ? 0 : DUR.base,
        delay: reduceMotion ? 0 : STAGGER.normal * 6,
        ease: EASE.out,
      }}
    >
      <span className="relative">
        Visit Live Site
        <span
          aria-hidden="true"
          className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-[width] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
        />
      </span>
      <span
        aria-hidden="true"
        className="relative inline-flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:bg-accent/10"
      >
        <svg
          className="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14M13 5l7 7-7 7"
          />
        </svg>
      </span>
    </motion.a>
  );
}

export function Work() {
  const reduceMotion = useReducedMotion() ?? false;
  const featured = PROJECTS[0];
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.6 });

  return (
    <section
      id="work"
      className="relative py-20 md:py-28 lg:py-32"
      aria-labelledby="work-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(var(--fg-primary) 1px, transparent 1px),
                             linear-gradient(90deg, var(--fg-primary) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to bottom, transparent 5%, black 25%, black 75%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 5%, black 25%, black 75%, transparent 95%)",
          }}
        />
        <div
          className="absolute right-[8%] top-0 h-full w-px opacity-[0.06]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--accent-primary) 30%, var(--accent-primary) 70%, transparent)",
            transform: "rotate(8deg)",
            transformOrigin: "top center",
          }}
        />
        <div
          className="absolute bottom-[18%] left-[5%] h-px w-[40%] opacity-[0.05]"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--fg-primary), transparent)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div ref={headerRef} className="mb-10 md:mb-12">
          <motion.div
            initial={
              reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
            }
            animate={
              reduceMotion
                ? { opacity: 1, y: 0 }
                : headerInView
                  ? { opacity: 1, y: 0 }
                  : undefined
            }
            transition={{
              duration: reduceMotion ? 0 : DUR.medium,
              ease: EASE.out,
            }}
          >
            <h2
              id="work-heading"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-fg"
            >
              Selected Work
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[8_4] lg:gap-12 xl:grid-cols-[7_5]">
          <div className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] xl:min-h-[600px]">
            <TwoOfUsVisual reduceMotion={reduceMotion} />
          </div>

          <div className="flex flex-col gap-6 lg:justify-center">
            <motion.div
              className="flex flex-col gap-3"
              initial={
                reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: reduceMotion ? 0 : DUR.medium,
                delay: reduceMotion ? 0 : STAGGER.normal,
                ease: EASE.out,
              }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                Featured Case Study
              </p>
              <h3 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {featured.name}
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-fg">
                {featured.tagline}
              </p>
            </motion.div>

            <motion.p
              className="text-base leading-relaxed text-secondary md:text-[17px] md:leading-[1.65]"
              initial={
                reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
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

            <motion.div
              className="flex flex-col gap-1.5"
              initial={
                reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduceMotion ? 0 : DUR.base,
                delay: reduceMotion ? 0 : STAGGER.normal * 3,
                ease: EASE.out,
              }}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                Role
              </span>
              <span className="text-sm leading-relaxed text-secondary">
                {featured.role}
              </span>
            </motion.div>

            <motion.div
              className="flex flex-col gap-3"
              initial={
                reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduceMotion ? 0 : DUR.base,
                delay: reduceMotion ? 0 : STAGGER.normal * 4,
                ease: EASE.out,
              }}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                Technology
              </span>
              <div className="flex flex-wrap gap-2">
                {featured.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border-subtle bg-surface/60 px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {featured.architecture.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {featured.architecture.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md px-3 py-1 text-xs text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              className="pt-2"
              initial={
                reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduceMotion ? 0 : DUR.base,
                delay: reduceMotion ? 0 : STAGGER.normal * 5,
                ease: EASE.out,
              }}
            >
              {featured.liveUrl ? (
                <LiveCta url={featured.liveUrl} reduceMotion={reduceMotion} />
              ) : (
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
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
