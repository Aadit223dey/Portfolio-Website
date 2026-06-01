import { Project } from "../../types";

export const project2: Project = {
  id: "aether-ecommerce",
  title: "Aether E-Commerce Platform",
  description: "A luxury lifestyle brand e-commerce storefront with immersive WebGL product previews and custom Checkout flow.",
  longDescription: "Aether E-Commerce redefines online retail for luxury brands. Incorporating interactive 3D WebGL product previews, the site allows consumers to rotate, open, and customize items in real-time. It features a completely headless design built using Next.js App Router connected directly to Shopify Plus APIs, resulting in sub-second page transition load speeds and a 42% increase in average cart value.",
  category: "Headless E-Commerce",
  tags: ["Luxury Storefront", "3D Product Viewer", "WebGL Configurator"],
  techStack: ["Next.js 15", "React Three Fiber", "Three.js", "Tailwind CSS", "Shopify API", "Framer Motion"],
  thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&h=500&fit=crop",
  images: [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&h=500&fit=crop"
  ],
  liveUrl: "https://aether-store.example.com",
  sourceUrl: "https://github.com/example/aether",
  featured: true,
  year: "2025",
  client: "Aether Ltd",
  testimonial: {
    quote: "His technical mastery of 3D animations and Next.js is unparalleled. The site loads instantly, and the floating geometric controls blew our developers away.",
    author: "Sarah Chen",
    role: "VP of Product",
    company: "Aether AI",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&fit=crop"
  }
};
