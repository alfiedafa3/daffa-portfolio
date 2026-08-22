"use client";

import { Container } from "@/components/ui/container";
import { SITE, BRAND } from "@/lib/constants";

const YEAR = 2026;

export function Footer() {

  return (
    <footer className="relative border-t border-border-subtle" role="contentinfo">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row md:py-12">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-fg">
              {BRAND.name}
            </span>
            <span className="text-sm text-secondary">{SITE.name}</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`https://github.com/${SITE.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted-fg transition-colors hover:text-foreground"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <span className="font-mono text-[11px] tabular-nums text-faint">
              {YEAR}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
