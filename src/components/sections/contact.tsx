"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { EASE, DUR, STAGGER, useReducedMotionSafe } from "@/lib/motion";
import { CONTACT } from "@/data/contact";

export function Contact() {
  const { reduce: reduceMotion } = useReducedMotionSafe();
  const primary = CONTACT.channels[0];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 opacity-[0.06]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--fg-primary), transparent)",
          }}
        />
        <div
          className="absolute right-[12%] top-[18%] hidden h-24 w-px opacity-[0.06] lg:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--accent-primary), transparent)",
            transform: "rotate(8deg)",
            transformOrigin: "top center",
          }}
        />
        <div
          className="absolute bottom-[22%] left-[8%] hidden h-24 w-px opacity-[0.04] lg:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--fg-primary), transparent)",
            transform: "rotate(-6deg)",
            transformOrigin: "bottom center",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-10 text-center">
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={
              reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }
            }
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : DUR.medium,
              ease: EASE.gentle,
            }}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-fg">
              Contact
            </span>
            <h2
              id="contact-heading"
              className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Let&apos;s talk.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-secondary md:text-lg">
              {CONTACT.statement}
            </p>
          </motion.div>

          {primary && (
            <motion.div
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
              <a
                href={primary.href}
                target={primary.external ? "_blank" : undefined}
                rel={primary.external ? "noopener noreferrer" : undefined}
                className="btn-primary group inline-flex items-center gap-3 rounded-full border border-border-default px-7 py-3.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
              >
                <span>{primary.label}</span>
                <span
                  aria-hidden="true"
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-border-subtle transition-[transform,border-color,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:border-accent group-hover:bg-accent/10"
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
              </a>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}
