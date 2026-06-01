"use client";

import React, { useEffect, useRef } from "react";

/**
 * A single sprinkle particle that floats persistently on-screen
 * and gets repelled/pushed by the mouse cursor.
 */
interface Sprinkle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  driftSpeed: number;
  driftAngle: number;
}

// Antigravity-style opposite color palette: white and elegant light silver/greys for a dark background
const COLORS = [
  "#FFFFFF",  // Pure White
  "#F8FAFC",  // Off-white / Slate 50
  "#F1F5F9",  // Slate 100
  "#E2E8F0",  // Slate 200
  "#CBD5E1",  // Slate 300
  "#94A3B8",  // Slate 400 (soft silver grey)
];

const SPRINKLE_COUNT = 120; // Elegant density of tiny dots
const MOUSE_RADIUS = 120;   // Precise cursor influence range
const MOUSE_FORCE = 6;      // Smooth repulsion force
const RETURN_SPEED = 0.02;  // High responsiveness
const FRICTION = 0.95;

/**
 * Antigravity.google-style opposite sprinkle background.
 * Tiny white and silver circular dots float persistently on screen,
 * gently drift, and scatter when the cursor approaches, completely behind the text.
 */
export function SprinkleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sprinklesRef = useRef<Sprinkle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Size the canvas to its container (absolute overlay)
    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize sprinkles spread across the canvas area
    const initSprinkles = () => {
      const particles: Sprinkle[] = [];
      const w = canvas.width;
      const h = canvas.height;
      for (let i = 0; i < SPRINKLE_COUNT; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: 0,
          vy: 0,
          size: Math.random() * 2 + 1, // Tiny dots: 1px to 3px radius (2px to 6px diameter)
          opacity: Math.random() * 0.4 + 0.45, // Soft but highly visible (45% to 85% opacity)
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          driftSpeed: Math.random() * 0.25 + 0.05,
          driftAngle: Math.random() * Math.PI * 2,
        });
      }
      sprinklesRef.current = particles;
    };
    initSprinkles();

    // Track mouse position relative to the canvas bounding rectangle
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    // Draw functions for the small circular dots
    const drawShape = (s: Sprinkle) => {
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.globalAlpha = s.opacity;
      ctx.fillStyle = s.color;

      ctx.beginPath();
      ctx.arc(0, 0, s.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const s of sprinklesRef.current) {
        // Calculate distance from mouse to particle
        const dx = s.x - mx;
        const dy = s.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Mouse repulsion — push particles away from cursor
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
          const angle = Math.atan2(dy, dx);
          s.vx += Math.cos(angle) * force;
          s.vy += Math.sin(angle) * force;
        }

        // Gentle ambient drift (makes them feel alive even without mouse)
        s.driftAngle += 0.003;
        s.x += Math.cos(s.driftAngle) * s.driftSpeed * 0.3;
        s.y += Math.sin(s.driftAngle * 0.7) * s.driftSpeed * 0.2;

        // Spring force back to base position
        s.vx += (s.baseX - s.x) * RETURN_SPEED;
        s.vy += (s.baseY - s.y) * RETURN_SPEED;

        // Apply velocity with friction
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= FRICTION;
        s.vy *= FRICTION;

        // Draw
        drawShape(s);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animFrameRef.current = requestAnimationFrame(animate);

    // Re-distribute particles when container size changes
    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      resizeObserver.disconnect();
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ mixBlendMode: "normal" }}
    />
  );
}
