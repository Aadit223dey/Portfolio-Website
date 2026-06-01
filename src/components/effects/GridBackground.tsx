"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

/**
 * High-end interactive dotted grid overlay with dynamic subtle spotlight trailing cursor.
 */
export function GridBackground() {
  const mouseX = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });
  const mouseY = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(circle 380px at ${mouseX}px ${mouseY}px, rgba(0,112,243,0.06), transparent 80%)`;

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-bg-darkest">
      {/* Absolute Static Dot Grid */}
      <div className="absolute inset-0 dot-grid opacity-[0.25]" />

      {/* Dynamic Cursor Spotlight mask (Desktop only) */}
      <motion.div
        className="absolute inset-0"
        style={{ background }}
      />
    </div>
  );
}
