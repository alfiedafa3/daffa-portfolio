import { Navigation } from "@/components/layout/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Lab } from "@/components/sections/lab";
import { Journey } from "@/components/sections/journey";

/**
 * Portfolio — Navigation + Hero + About + Work + Lab + Journey
 */

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Lab />
      <Journey />
    </>
  );
}
