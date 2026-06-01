import React from "react";
import { cn } from "../../lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "blue" | "grey";
}

/**
 * Tech pill Badge with developer-focused styling
 */
export function Badge({ children, className, variant = "grey", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full font-mono text-[10px] tracking-wider uppercase font-semibold border transition-all duration-300",
        variant === "blue" 
          ? "bg-accent-blue-dim text-accent-blue border-accent-blue/20" 
          : "bg-neutral-900/60 text-text-secondary border-border-premium hover:border-neutral-700",
        className
      )}
      {...props}
    >
      {/* Dot accent */}
      <span className={cn(
        "w-1 h-1 rounded-full",
        variant === "blue" ? "bg-accent-blue" : "bg-neutral-600"
      )} />
      {children}
    </span>
  );
}
