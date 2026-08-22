import { Navigation } from "@/components/layout/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";

/**
 * Portfolio — Navigation + Hero + About + Work
 */

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Work />
    </>
  );
}
