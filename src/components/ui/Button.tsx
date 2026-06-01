"use client";

import React, { ForwardedRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { useMagnetic } from "../../hooks/useMagnetic";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "glass" | "text";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
  glow?: boolean;
}

/**
 * Premium design-validated interactive button
 */
export const Button = React.forwardRef(function Button(
  { 
    children, 
    className, 
    href, 
    variant = "primary", 
    size = "md", 
    magnetic = true, 
    glow = false, 
    ...props 
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) {
  const magneticRef = useMagnetic(0.25);
  
  // Combine custom refs safely
  const activeRef = magnetic ? magneticRef : ref;

  const baseStyles = "inline-flex items-center justify-center font-mono text-sm tracking-wider font-semibold uppercase rounded-full transition-all duration-300 relative overflow-hidden focus:outline-none cursor-pointer";
  
  const sizeStyles = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4.5 text-base",
  };

  const variantStyles = {
    primary: "bg-white text-black hover:bg-neutral-200 border border-white",
    secondary: "bg-transparent text-white hover:text-accent-blue border border-border-premium hover:border-accent-blue",
    glass: "glass-panel text-white hover:bg-white/10 hover:border-white/20",
    text: "bg-transparent text-text-secondary hover:text-white border-0 py-0 px-0",
  };

  const buttonContent = (
    <>
      {glow && variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-blue-bright to-accent-blue opacity-50 blur-xl scale-125 -z-10 group-hover:opacity-75 transition-opacity duration-300" />
      )}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    const isInternal = href.startsWith("#") || href.startsWith("/");
    if (isInternal) {
      return (
        <Link
          href={href}
          ref={activeRef as any}
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], "group", className)}
        >
          {buttonContent}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        ref={activeRef as any}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], "group", className)}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      ref={activeRef as any}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], "group", className)}
      {...props}
    >
      {buttonContent}
    </button>
  );
});

Button.displayName = "Button";
