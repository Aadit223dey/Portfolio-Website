"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { siteConfig } from "../../data/siteConfig";

/**
 * Premium glassmorphism Navigation bar with scroll-adaptive layouts.
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Detect scroll offset to activate solid-glass background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section in viewport
      const sections = siteConfig.navigation.map(item => item.href.substring(1));
      let currentSection = "";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = `#${section}`;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
          isScrolled 
            ? "py-4 bg-bg-darkest/75 backdrop-blur-md border-b border-border-premium" 
            : "py-6 bg-transparent"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Developer logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-mono text-sm tracking-[0.25em] text-white font-bold transition-colors group-hover:text-accent-blue">
              {siteConfig.personal.name}
            </span>
            
            {/* Real-time availability signal indicator */}
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full font-mono text-[9px] font-semibold text-green-400">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              {siteConfig.personal.availability.split(" ").slice(-2).join(" ")}
            </span>
          </Link>

          {/* Desktop Navigation Link items */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "font-mono text-xs tracking-wider uppercase transition-colors relative py-1 text-text-secondary hover:text-white cursor-pointer",
                  activeSection === item.href && "text-white font-semibold"
                )}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent-blue"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Nav CTA Actions */}
          <div className="hidden md:flex items-center">
            <Button 
              href="#contact" 
              variant="secondary" 
              size="sm" 
              magnetic={true}
              className="py-2.5 px-5"
            >
              Consultation
            </Button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </Container>
      </motion.header>

      {/* Mobile drawer slide-in navigation overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-45 bg-bg-darkest/98 backdrop-blur-xl flex flex-col pt-24 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-6 mb-12">
              {siteConfig.navigation.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-mono text-xl tracking-widest uppercase text-text-secondary hover:text-white"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-auto pb-12 flex flex-col gap-4"
            >
              <Button
                href="#contact"
                variant="primary"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full"
              >
                Let's Build
              </Button>
              <div className="text-center font-mono text-[10px] text-text-muted">
                {siteConfig.personal.availability}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
