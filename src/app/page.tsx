import { Container } from "@/components/ui/container";
import { Heading, Body, Eyebrow, Mono } from "@/components/ui/typography";

/**
 * TEMPORARY VALIDATION PAGE
 *
 * This page exists solely to verify the design system foundation:
 * - Typography hierarchy
 * - Color tokens
 * - Spacing rhythm
 * - Dark mode rendering
 * - Focus states
 *
 * This is NOT portfolio content. All sections will be replaced in Phase 02.
 */

export default function Home() {
  return (
    <div className="flex flex-col gap-32 py-20 md:py-32">
      {/* Typography validation */}
      <Container>
        <section className="flex flex-col gap-8">
          <Eyebrow>Typography System</Eyebrow>
          <Heading as="h1">
            Daffa Alfie
          </Heading>
          <Heading as="h2">
            Technology Builder
          </Heading>
          <Heading as="h3">
            Cybersecurity, Software Engineering, AI
          </Heading>
          <Heading as="h4">
            Systems thinking over surface-level tooling
          </Heading>
          <Body>
            Early-career builder focused on understanding systems deeply,
            experimenting with real technology, and shipping projects that
            solve actual problems. Currently exploring the intersection of
            cybersecurity and software engineering.
          </Body>
          <Body muted>
            This is a muted body variant for secondary information, captions,
            and supporting context.
          </Body>
          <Mono>alfiedafa3 · GitHub</Mono>
        </section>
      </Container>

      {/* Color token validation */}
      <Container>
        <section className="flex flex-col gap-8">
          <Eyebrow>Color Tokens</Eyebrow>
          <div className="flex flex-wrap gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-background text-[10px] text-foreground border border-border-subtle">
              bg-base
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-surface text-[10px] text-foreground border border-border-subtle">
              surface
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-elevated text-[10px] text-foreground border border-border-subtle">
              elevated
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-accent text-[10px] text-accent-foreground">
              accent
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-accent-hover text-[10px] text-accent-foreground">
              accent-hover
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-accent-subtle text-[10px] text-accent border border-accent/20">
              subtle
            </div>
          </div>
        </section>
      </Container>

      {/* Spacing and shape validation */}
      <Container>
        <section className="flex flex-col gap-8">
          <Eyebrow>Spacing and Shape</Eyebrow>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "radius-sm", radius: "rounded" },
              { label: "radius-md", radius: "rounded-lg" },
              { label: "radius-lg", radius: "rounded-xl" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex h-24 items-center justify-center bg-surface border border-border-subtle ${item.radius}`}
              >
                <Mono>{item.label}</Mono>
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* Interactive state validation */}
      <Container>
        <section className="flex flex-col gap-8">
          <Eyebrow>Interactive States</Eyebrow>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover active:scale-[0.98]">
              Primary CTA
            </button>
            <button className="rounded-lg border border-border-default px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface active:scale-[0.98]">
              Secondary CTA
            </button>
            <a
              href="#"
              className="rounded-lg px-6 py-3 text-sm font-medium text-accent transition-colors hover:text-accent-hover active:scale-[0.98]"
            >
              Text Link
            </a>
          </div>
        </section>
      </Container>
    </div>
  );
}
