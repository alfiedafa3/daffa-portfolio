import { Navigation } from "@/components/layout/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";

/**
 * Phase 03A: Navigation + Hero + About
 *
 * The homepage now contains Navigation, Hero, and About sections.
 * Additional sections will be added in future phases.
 */

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
    </>
  );
}
