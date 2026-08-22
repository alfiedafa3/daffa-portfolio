import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Lab } from "@/components/sections/lab";
import { Journey } from "@/components/sections/journey";
import { Contact } from "@/components/sections/contact";

/**
 * Portfolio — Navigation + Hero + About + Work + Lab + Journey + Contact + Footer
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
      <Contact />
      <Footer />
    </>
  );
}
