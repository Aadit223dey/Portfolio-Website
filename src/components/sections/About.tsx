"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Users, Award } from "lucide-react";
import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { siteConfig } from "../../data/siteConfig";
import { fadeInUp, staggerContainer } from "../../lib/animations";

/**
 * About section presenting the dev bio and optional experience stats.
 * Stats only render when siteConfig.about.showStats is true.
 */
export function About() {
  const { title, subtitle, paragraphs, showStats, experienceYears, completedProjects, happyClients } = siteConfig.about;

  const cardItems = [
    {
      icon: <Award className="text-accent-blue" size={24} />,
      val: `${experienceYears}+`,
      label: "Years of Craft",
      desc: "Architecting web platforms"
    },
    {
      icon: <Code className="text-white" size={24} />,
      val: completedProjects,
      label: "Completed Projects",
      desc: "Delivering pristine builds"
    },
    {
      icon: <Users className="text-accent-blue" size={24} />,
      val: happyClients,
      label: "Happy Partners",
      desc: "Maintaining trusted bonds"
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 w-full bg-bg-darkest relative overflow-hidden z-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bio Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className={showStats ? "lg:col-span-6 flex flex-col items-start text-left" : "lg:col-span-12 flex flex-col items-center text-center max-w-3xl mx-auto"}
          >
            <span className="font-mono text-xs tracking-[0.2em] text-accent-blue font-bold uppercase mb-4">
              Behind the Code
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-8">
              {title}
            </h2>
            <h3 className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-6 border-l-2 border-accent-blue pl-4">
              {subtitle}
            </h3>
            
            {paragraphs.map((para, idx) => (
              <p key={idx} className="text-text-secondary font-sans text-base leading-relaxed mb-6 last:mb-0">
                {para}
              </p>
            ))}
          </motion.div>

          {/* Right Column: Stats Cards — ONLY shown when showStats is true */}
          {showStats && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {/* Brand card */}
              <Card className="col-span-1 sm:col-span-2 flex flex-col justify-between h-[240px] bg-bg-card/40">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[9px] tracking-wider text-text-muted uppercase">
                    Main Stack / Core Focus
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-pulse" />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-semibold text-white mb-2">
                    Engineering with Absolute Precision
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Combining custom visual shaders with secure Next.js architecture. Optimized to maintain
                    award-winning visual experiences and flawless responsive designs.
                  </p>
                </div>
              </Card>

              {/* Stat cards */}
              {cardItems.slice(0, 2).map((item, idx) => (
                <Card key={idx} className="bg-bg-card/30 flex flex-col justify-between p-6">
                  <div className="mb-6">{item.icon}</div>
                  <div>
                    <span className="block text-3xl font-mono font-bold text-white mb-1">
                      {item.val}
                    </span>
                    <span className="block font-mono text-[9px] tracking-wider uppercase text-text-secondary mb-1">
                      {item.label}
                    </span>
                    <span className="block text-[10px] text-text-muted">
                      {item.desc}
                    </span>
                  </div>
                </Card>
              ))}
            </motion.div>
          )}

        </div>
      </Container>
    </section>
  );
}
