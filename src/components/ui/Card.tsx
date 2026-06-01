"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: boolean;
  interactive?: boolean;
}

/**
 * Premium glassmorphism Card with cursor tracking spotlight glow.
 */
export function Card({ children, className, glow = true, interactive = true, ...props }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    setCoords({
      x: event.clientX - left,
      y: event.clientY - top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={cn(
        "glass-panel rounded-3xl p-8 relative overflow-hidden transition-all duration-500",
        interactive && "glass-panel-hover cursor-default",
        className
      )}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Radial Background */}
      {glow && isFocused && (
        <div
          className="absolute pointer-events-none transition-all duration-300 opacity-30 blur-2xl"
          style={{
            width: "350px",
            height: "350px",
            borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(0,112,243,0.15) 0%, transparent 70%)",
            left: `${coords.x - 175}px`,
            top: `${coords.y - 175}px`,
          }}
        />
      )}
      
      {/* Light border reflection */}
      {glow && isFocused && (
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-300"
          style={{
            background: `radial-gradient(circle 120px at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.06), transparent 80%)`,
            border: "1px solid transparent",
          }}
        />
      )}

      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
