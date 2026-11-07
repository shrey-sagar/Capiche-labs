import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";

import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

import Reveal from "@/components/effects/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero stays without Reveal */}
      <Hero />

      <Reveal>
        <Services />
      </Reveal>

      <Reveal>
        <Projects />
        </Reveal>
        
      

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <TechStack />
      </Reveal>

      <Reveal>
        <Process />
      </Reveal>

      <Reveal>
        <Stats />
      </Reveal>

      <Reveal>
        <LogoMarquee />
      </Reveal>

      <Reveal>
        <Testimonials />
      </Reveal>

      <Reveal>
        <FAQ />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>
<Reveal><CTA /></Reveal>
      

      {/* Footer stays normal */}
      <Footer />
    </>
  );
}