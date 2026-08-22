import { Navigation } from "@/components/layout/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Lab } from "@/components/sections/lab";

/**
 * Portfolio — Navigation + Hero + About + Work + Lab
 */

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Lab />
    </>
  );
}
