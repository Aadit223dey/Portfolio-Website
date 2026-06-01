"use client";

import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Projects } from "../components/sections/Projects";
import { Services } from "../components/sections/Services";
import { Skills } from "../components/sections/Skills";
import { Process } from "../components/sections/Process";
import { Testimonials } from "../components/sections/Testimonials";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/layout/Footer";
import { GridBackground } from "../components/effects/GridBackground";
import { GlowOrb } from "../components/effects/GlowOrb";
import { siteConfig } from "../data/siteConfig";

/**
 * Main Home Page orchestrating page sections, background effects, and sprinkle particles.
 */
export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg-darkest text-white selection:bg-accent-blue/30 selection:text-white font-sans antialiased overflow-hidden">
      
      {/* Dynamic interactive dotted grid overlay and cursor light trailing */}
      <GridBackground />

      {/* Floating ambient colored glass glow bubbles for luxury background style */}
      <GlowOrb size={500} color="blue" className="top-[10%] left-[-10%]" delay={0} duration={12} />
      <GlowOrb size={600} color="indigo" className="top-[35%] right-[-15%]" delay={3} duration={15} />
      <GlowOrb size={450} color="grey" className="top-[60%] left-[-5%]" delay={6} duration={10} />
      <GlowOrb size={550} color="blue" className="top-[80%] right-[10%]" delay={1.5} duration={14} />

      {/* Film grain noise texture overlay */}
      <div className="noise-overlay" />

      {/* Header Sticky Navigation */}
      <Navbar />

      {/* Layout Content Sections */}
      <main className="relative w-full z-10">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Process />
        {siteConfig.showTestimonials && <Testimonials />}
        <Contact />
      </main>

      {/* Footer Content */}
      <Footer />
    </div>
  );
}
