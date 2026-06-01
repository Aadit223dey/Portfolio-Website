"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { SectionHeading } from "../ui/SectionHeading";
import { siteConfig } from "../../data/siteConfig";
import { fadeInUp, staggerContainer } from "../../lib/animations";

/**
 * Skills section displaying categorized technologies and engineering frameworks
 */
export function Skills() {
  const { categories } = siteConfig.skills;

  return (
    <section id="skills" className="py-24 md:py-32 w-full bg-bg-darkest relative overflow-hidden z-10">
      
      {/* Visual lighting accents */}
      <div className="absolute top-[40%] left-[5%] w-[400px] h-[400px] bg-neutral-800/10 rounded-full filter blur-[120px] pointer-events-none" />

      <Container>
        <SectionHeading
          preHeader="Toolbox"
          title="Technical Infrastructure"
          description="A vetted array of high-performance frameworks, state management tools, and design-to-code workflow solutions."
        />

        {/* 2x2 grid representing skill categories */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        >
          {categories.map((category, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <Card className="bg-bg-card/20 border-neutral-900/60 p-8 h-full flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-text-muted uppercase mb-4 block">
                    Category {idx + 1}
                  </span>
                  <h3 className="text-xl font-display font-semibold text-white mb-6">
                    {category.name}
                  </h3>
                </div>
                
                {/* Tech tags cloud */}
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((skill) => (
                    <Badge key={skill} variant={idx % 2 === 0 ? "blue" : "grey"}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
