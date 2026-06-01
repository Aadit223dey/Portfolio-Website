"use client";

import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { siteConfig } from "../../data/siteConfig";

/**
 * Clean, elegant portfolio Footer section
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-bg-darkest border-t border-border-premium py-12 relative overflow-hidden z-10">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Brand Signature */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-mono text-sm tracking-[0.25em] text-white font-bold">
            {siteConfig.personal.name}
          </Link>
          <p className="font-mono text-[10px] text-text-muted">
            &copy; {currentYear} {siteConfig.personal.name}. All rights reserved.
          </p>
        </div>

        {/* Center: Quick navigation routes */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-[10px] tracking-wider uppercase text-text-secondary hover:text-white transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Side: Social Media Icons / Links */}
        <div className="flex items-center gap-5">
          {Object.entries(siteConfig.social).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-widest uppercase text-text-secondary hover:text-white hover:underline transition-colors"
            >
              {platform}
            </a>
          ))}
        </div>
      </Container>
      
      {/* Visual elegant touch at the absolute bottom */}
      <div className="w-full text-center mt-8 pt-4 border-t border-white/5">
        <p className="font-mono text-[9px] text-neutral-800 uppercase tracking-widest">
          Engineered to perfection with Next.js & React Three Fiber
        </p>
      </div>
    </footer>
  );
}
