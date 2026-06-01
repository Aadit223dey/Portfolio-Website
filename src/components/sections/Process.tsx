"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { siteConfig } from "../../data/siteConfig";
import { fadeInUp, staggerContainer } from "../../lib/animations";

/**
 * Process section presenting step-by-step development workflow
 */
export function Process() {
  const steps = siteConfig.process;

  return (
    <section id="process" className="py-24 md:py-32 w-full bg-bg-darkest relative overflow-hidden z-10">
      
      {/* Background ambient lighting */}
      <div className="absolute left-[20%] top-[40%] w-[600px] h-[600px] bg-accent-blue/5 rounded-full filter blur-[180px] pointer-events-none" />

      <Container>
        <SectionHeading
          preHeader="Workflow"
          title="The Development Process"
          description="A structured, collaborative approach engineered to guide projects smoothly from concept to production-grade launch."
        />

        {/* Vertical stacked grid layout of steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {steps.map((stepItem, idx) => (
            <motion.div key={stepItem.step} variants={fadeInUp}>
              <Card className="h-full bg-bg-card/20 border-neutral-900 flex flex-col justify-between p-8 relative overflow-hidden">
                {/* Visual Step number in background */}
                <div className="absolute right-4 top-2 font-mono text-[70px] font-extrabold text-neutral-800/10 pointer-events-none select-none">
                  {stepItem.step}
                </div>

                <div>
                  <span className="font-mono text-xs text-accent-blue font-bold uppercase mb-4 block">
                    Step {stepItem.step}
                  </span>
                  
                  <h3 className="text-lg font-display font-semibold text-white mb-4">
                    {stepItem.title}
                  </h3>
                  
                  <p className="text-xs text-text-secondary leading-relaxed font-sans">
                    {stepItem.description}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="w-12 h-[2px] bg-neutral-800 mt-8 group-hover:bg-accent-blue transition-colors duration-300" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
