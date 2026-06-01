"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";

/**
 * Premium custom 404 Not Found section
 */
export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-bg-darkest text-white selection:bg-accent-blue/30 overflow-hidden font-sans">
      {/* Background static dot grid */}
      <div className="absolute inset-0 dot-grid opacity-[0.15]" />
      
      {/* Background visual lighting leak */}
      <div className="absolute w-[400px] h-[400px] bg-accent-blue/5 rounded-full filter blur-[100px] top-1/3 left-1/4" />

      <Container className="relative z-10 flex flex-col items-center justify-center text-center">
        <span className="font-mono text-xs tracking-[0.25em] text-accent-blue font-bold uppercase mb-6">
          System Coordinates Lost
        </span>

        <h1 className="text-7xl sm:text-9xl font-display font-extrabold tracking-tight text-white mb-6 leading-none text-gradient-blue">
          404
        </h1>

        <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-md mb-10">
          The coordinate grid you are attempting to query does not resolve to an active node in Aether space.
        </p>

        <Button href="/" variant="primary" glow={true} className="flex items-center gap-2">
          <ArrowLeft size={14} /> Back to Center
        </Button>
      </Container>
    </div>
  );
}
