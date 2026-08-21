import { Navigation } from "@/components/layout/navigation";
import { Hero } from "@/components/sections/hero";

/**
 * Phase 02: Navigation + Hero
 *
 * The homepage now contains the primary navigation and hero section.
 * Additional sections will be added in future phases.
 */

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
    </>
  );
}
