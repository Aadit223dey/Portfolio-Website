"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { siteConfig } from "../../data/siteConfig";

/**
 * Testimonials carousel section displaying client reviews with sliding transitions
 */
export function Testimonials() {
  const testimonials = siteConfig.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 md:py-32 w-full bg-bg-darkest relative overflow-hidden z-10">
      
      {/* Background ambient lighting */}
      <div className="absolute right-[10%] bottom-[30%] w-[500px] h-[500px] bg-accent-blue/5 rounded-full filter blur-[150px] pointer-events-none" />

      <Container>
        <SectionHeading
          preHeader="Testimonials"
          title="What Partners Say"
          description="Direct feedback from digital agencies, tech startups, and design teams who collaborated on complex custom web builds."
        />

        <div className="max-w-3xl mx-auto relative px-4">
          <Card className="bg-bg-card/25 border-neutral-900/60 p-8 sm:p-12 min-h-[350px] flex flex-col justify-between overflow-hidden">
            {/* Visual Quotes icon background */}
            <div className="absolute left-6 top-6 text-neutral-800/20 select-none pointer-events-none">
              <Quote size={80} />
            </div>

            {/* Sliding Quote Panel using Framer Motion */}
            <div className="relative z-10 flex-grow flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="w-full flex flex-col gap-6"
                >
                  <p className="text-base sm:text-lg md:text-xl font-sans text-white leading-relaxed font-light italic">
                    "{current.quote}"
                  </p>
                  
                  {/* Client Profile info */}
                  <div className="flex items-center gap-4 mt-4">
                    <img
                      src={current.avatar}
                      alt={current.author}
                      className="w-10 h-10 rounded-full object-cover border border-white/10"
                    />
                    <div>
                      <span className="block text-sm font-semibold text-white">
                        {current.author}
                      </span>
                      <span className="block font-mono text-[9px] text-text-secondary uppercase tracking-wider">
                        {current.role}, {current.company}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sliding Carousel Controls */}
            <div className="flex items-center justify-between border-t border-border-premium/50 pt-6 mt-8 relative z-10">
              {/* Dot Index indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "bg-accent-blue w-6" : "bg-neutral-800"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-neutral-900 border border-border-premium text-text-secondary hover:text-white transition-colors hover:bg-neutral-800"
                  aria-label="Previous quote"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-neutral-900 border border-border-premium text-text-secondary hover:text-white transition-colors hover:bg-neutral-800"
                  aria-label="Next quote"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </Card>
        </div>
      </Container>
    </section>
  );
}
