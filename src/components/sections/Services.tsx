"use client";

import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { siteConfig } from "../../data/siteConfig";
import { fadeInUp, staggerContainer } from "../../lib/animations";

/**
 * Renders an dynamic Lucide Icon based on string name
 */
function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.HelpCircle className={className} size={24} />;
  return <IconComponent className={className} size={24} />;
}

/**
 * Services section representing digital developer offerings in interactive cards
 */
export function Services() {
  const services = siteConfig.services;

  return (
    <section id="services" className="py-24 md:py-32 w-full bg-bg-darkest relative overflow-hidden z-10">
      
      {/* Background ambient lighting */}
      <div className="absolute right-[5%] top-[20%] w-[450px] h-[450px] bg-accent-blue/5 rounded-full filter blur-[150px] pointer-events-none" />

      <Container>
        <SectionHeading
          preHeader="Expertise"
          title="Digital Capabilities"
          description="Combining sophisticated interface design with high-end Next.js engineering to solve complex business problems."
        />

        {/* 2x2 responsive services grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <Card className="h-full flex flex-col items-start bg-bg-card/25 border-neutral-900">
                {/* Visual Icon Frame */}
                <div className="p-4 rounded-2xl bg-neutral-900/60 border border-border-premium mb-6 flex items-center justify-center">
                  <ServiceIcon
                    name={service.icon}
                    className={service.accent === "blue" ? "text-accent-blue" : "text-white"}
                  />
                </div>

                <h3 className="text-xl font-display font-semibold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-xs text-text-secondary leading-relaxed font-sans">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
