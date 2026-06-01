import { Project } from "../../types";

export const project1: Project = {
  id: "lumina-fintech",
  title: "Lumina Fintech Dashboard",
  description: "A premium wealth management and real-time transaction analytic dashboard for a modern venture capital platform.",
  longDescription: "Lumina is a luxury fintech interface featuring interactive high-frequency canvas-based charting, advanced ledger analytics, and multi-currency tracking. Engineered using Next.js App Router for server-side layout caching and Tailwind for complex custom animations, the platform delivers real-time transactional updates in less than 40ms. Built specifically for venture teams managing assets above $10M.",
  category: "Fintech Platform",
  tags: ["Interactive Dashboard", "SaaS Product", "Data Visualization"],
  techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion", "Supabase"],
  thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=500&fit=crop",
  images: [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=500&fit=crop"
  ],
  liveUrl: "https://lumina-demo.example.com",
  sourceUrl: "https://github.com/example/lumina",
  featured: true,
  year: "2025",
  client: "Lumina Labs LLC",
  testimonial: {
    quote: "Aiden delivered an Apple-quality site that immediately elevated our brand and generated 35% higher conversions in our first month.",
    author: "Marcus Vance",
    role: "Founder",
    company: "Lumina Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop"
  }
};
