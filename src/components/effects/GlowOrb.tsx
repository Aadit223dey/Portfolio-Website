"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface GlowOrbProps {
  className?: string;
  size?: number;
  color?: "blue" | "indigo" | "grey";
  delay?: number;
  duration?: number;
}

/**
 * Animated glowing background orb drifting slowly.
 */
export function GlowOrb({
  className,
  size = 400,
  color = "blue",
  delay = 0,
  duration = 8
}: GlowOrbProps) {
  
  const gradients = {
    blue: "from-accent-blue/15 to-accent-blue-bright/0",
    indigo: "from-indigo-500/10 to-transparent",
    grey: "from-neutral-700/10 to-transparent"
  };

  return (
    <motion.div
      initial={{ x: 0, y: 0, scale: 0.95 }}
      animate={{
        x: [0, 40, -20, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.05, 0.95, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay
      }}
      className={cn(
        "absolute rounded-full filter blur-[100px] pointer-events-none mix-blend-screen opacity-40 bg-gradient-to-br -z-10",
        gradients[color],
        className
      )}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}
