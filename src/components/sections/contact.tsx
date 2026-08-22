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
        <motion.div
          className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2"
          style={{
            background: "linear-gradient(90deg, transparent, var(--accent-primary), transparent)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : DUR.medium, ease: EASE.out }}
        />
        <div
          className="absolute right-[15%] top-[20%] hidden h-20 w-px lg:block"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--accent-primary), transparent)",
            opacity: 0.1,
          }}
        />
        <div
          className="absolute bottom-[25%] left-[10%] hidden h-20 w-px lg:block"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--accent-primary), transparent)",
            opacity: 0.08,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, var(--accent-primary), transparent 70%)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : DUR.slow, ease: EASE.gentle }}
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-10 text-center">
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : DUR.medium,
              ease: EASE.gentle,
            }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
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
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
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
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border-2 border-accent px-8 py-4 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                <span className="relative z-10">{primary.label}</span>
                <span
                  aria-hidden="true"
                  className="relative z-10 inline-flex h-6 w-6 items-center justify-center rounded-full border border-accent/60 transition-all duration-300 group-hover:translate-x-1 group-hover:border-accent-foreground/40 group-hover:bg-accent-foreground/10"
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
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
