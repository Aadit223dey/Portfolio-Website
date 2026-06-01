/**
 * Types & Interfaces for Aiden Sterling Portfolio System
 */

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  techStack: string[];
  thumbnail: string;
  images: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
  year: string;
  client?: string;
  testimonial?: Testimonial;
}
