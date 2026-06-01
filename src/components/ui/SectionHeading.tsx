"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { fadeInUp } from "../../lib/animations";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  preHeader?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

/**
 * Reusable Section Header with entrance animations
 */
export function SectionHeading({
  preHeader,
  title,
  description,
  centered = true,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className={cn(
        "flex flex-col mb-16 md:mb-24 w-full",
        centered ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-4xl",
        className
      )}
      {...props as any}
    >
      {preHeader && (
        <span className="font-mono text-xs tracking-[0.2em] text-accent-blue font-bold uppercase mb-4">
          {preHeader}
        </span>
      )}
      
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6">
        {title}
      </h2>
      
      {description && (
        <p className="text-base md:text-lg font-sans text-text-secondary leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
