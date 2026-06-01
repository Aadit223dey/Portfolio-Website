"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { MagneticWrapper } from "../ui/MagneticWrapper";
import { siteConfig } from "../../data/siteConfig";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import { SprinkleBackground } from "../effects/SprinkleBackground";

// Lazy-load the React Three Fiber 3D Scene with SSR disabled
const HeroScene = dynamic(
  () => import("../three/Scene").then((mod) => mod.Scene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-bg-darkest flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] rounded-full bg-accent-blue/5 filter blur-3xl animate-pulse" />
      </div>
    ),
  }
);

/**
 * Typewriter hook — reveals text character by character
 */
function useTypewriter(text: string, speed: number = 55, startDelay: number = 800) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setIsComplete(false);

    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay]);

  return { displayText, isComplete };
}

/**
 * World-class cinematic Hero section with typewriter effect and personal branding.
 */
export function Hero() {
  const { headlinePre, headlineMain, headlineSub, ctaPrimary, ctaSecondary, showStats, stats } = siteConfig.hero;
  const { name, title, role } = siteConfig.personal;
  const { displayText, isComplete } = useTypewriter(headlineMain, 55, 800);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 overflow-hidden bg-bg-darkest z-10"
    >
      {/* Cinematic Ambient 3D canvas positioned in background */}
      <div className="absolute inset-0 w-full h-full -z-10 bg-bg-darkest">
        <HeroScene />
      </div>

      {/* Container-relative floating sprinkles behind the text */}
      <SprinkleBackground />

      <Container className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl flex flex-col items-center"
        >
          {/* Developer Name + Title */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center mb-8">
            <h2 className="text-lg md:text-xl font-display font-semibold text-white tracking-tight">
              {name}
            </h2>
            <p className="font-mono text-[10px] tracking-[0.15em] text-text-secondary uppercase mt-1">
              {title}
            </p>
          </motion.div>

          {/* Tagline Pre-Header */}
          <motion.span
            variants={fadeInUp}
            className="font-mono text-xs tracking-[0.25em] text-accent-blue font-bold uppercase mb-6 inline-flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
            {headlinePre}
          </motion.span>

          {/* Typewriter animated headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white mb-6 leading-[1.05] min-h-[1.2em]"
          >
            <span className="text-gradient">{displayText}</span>
            {/* Blinking cursor character */}
            <span
              className={`inline-block w-[3px] h-[0.85em] bg-accent-blue ml-1 align-middle ${
                isComplete ? "animate-pulse" : "cursor-blink"
              }`}
            />
          </motion.h1>

          {/* Role description */}
          <motion.p
            variants={fadeInUp}
            className="font-mono text-[10px] tracking-widest text-accent-blue/70 uppercase mb-3"
          >
            {role}
          </motion.p>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-text-secondary font-sans leading-relaxed max-w-2xl mb-10"
          >
            {headlineSub}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-5 mb-16 sm:mb-24"
          >
            <MagneticWrapper>
              <Button href="#projects" variant="primary" glow={true} className="flex items-center gap-2">
                {ctaPrimary}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticWrapper>

            <MagneticWrapper>
              <Button href="#contact" variant="secondary">
                {ctaSecondary}
              </Button>
            </MagneticWrapper>
          </motion.div>

          {/* Stats Bar — only shown if showStats is true */}
          {showStats && stats && (
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-6 md:gap-12 w-full max-w-2xl border-t border-border-premium/50 pt-8"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[9px] tracking-wider uppercase text-text-muted mt-2 text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </Container>

      {/* Scroll prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-40">
        <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-text-muted">
          Scroll Down
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent" />
      </div>


    </section>
  );
}
