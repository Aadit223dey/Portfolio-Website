"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Calendar, User, Layers } from "lucide-react";
import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import { projects } from "../../content/projects";
import { Project } from "../../types";
import { EASE_PRESETS, fadeInUp, staggerContainer } from "../../lib/animations";

/**
 * Projects section containing interactive case study cards with detail overlays.
 */
export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 md:py-32 w-full bg-bg-darkest relative overflow-hidden z-10">
      
      {/* Background visual light leak */}
      <div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] bg-accent-blue/5 rounded-full filter blur-[150px] pointer-events-none" />

      <Container>
        <SectionHeading
          preHeader="Digital Masterpieces"
          title="Featured Client Projects"
          description="A selection of high-fidelity client builds custom engineered for outstanding speed, premium aesthetics, and flawless responsive performance."
        />

        {/* 3-Column dynamic card entry grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <Card className="group h-full flex flex-col p-0 overflow-hidden bg-bg-card/25 border-neutral-900">
                {/* Visual Thumbnail Frame */}
                <div className="relative aspect-[1.6] w-full overflow-hidden border-b border-border-premium/50 bg-neutral-900">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle dark layout overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-darkest/80 via-bg-darkest/20 to-transparent opacity-60" />
                  
                  {/* Display tags above image */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    <Badge variant="blue">{project.category}</Badge>
                  </div>
                </div>

                {/* Card description text details */}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="font-mono text-[9px] tracking-wider text-text-muted uppercase mb-2 block">
                      Case Study {project.year}
                    </span>
                    <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-accent-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tech stack badge tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="font-mono text-[9px] text-text-muted inline-flex items-center">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Expanded detailed Case Study Overlay modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-bg-darkest/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: EASE_PRESETS.apple }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto glass-panel bg-bg-dark/95 border-neutral-800 rounded-3xl z-10 shadow-2xl"
            >
              {/* Floating Close Switch Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 border border-border-premium text-white hover:text-accent-blue transition-colors z-20 focus:outline-none"
                aria-label="Close case study"
              >
                <X size={18} />
              </button>

              {/* Top Banner Hero Image */}
              <div className="relative aspect-[2] w-full bg-neutral-950">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="font-mono text-xs tracking-[0.2em] text-accent-blue uppercase mb-2 block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Case Study Details Grid */}
              <div className="p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12">
                
                {/* Left side column: description & testimonials */}
                <div className="md:col-span-8 flex flex-col gap-8">
                  <div>
                    <h4 className="font-mono text-[10px] tracking-widest text-text-muted uppercase mb-4">
                      Overview & Architecture
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed font-sans mb-6">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Client Testimonial panel (if available) */}
                  {selectedProject.testimonial && (
                    <div className="p-6 rounded-2xl bg-neutral-900/40 border border-border-premium">
                      <p className="text-xs italic text-text-secondary leading-relaxed mb-4">
                        "{selectedProject.testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={selectedProject.testimonial.avatar}
                          alt={selectedProject.testimonial.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <span className="block text-xs font-semibold text-white">
                            {selectedProject.testimonial.author}
                          </span>
                          <span className="block font-mono text-[9px] text-text-muted">
                            {selectedProject.testimonial.role}, {selectedProject.testimonial.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right side column: metadata attributes & links */}
                <div className="md:col-span-4 flex flex-col gap-6 border-t md:border-t-0 md:border-l border-border-premium/50 pt-8 md:pt-0 md:pl-8">
                  
                  {/* Actions & Links */}
                  <div className="flex flex-col gap-3">
                    {selectedProject.liveUrl && (
                      <Button href={selectedProject.liveUrl} variant="primary" size="sm" className="w-full flex items-center gap-2">
                        Live Preview <ExternalLink size={14} />
                      </Button>
                    )}
                    {selectedProject.sourceUrl && (
                      <Button href={selectedProject.sourceUrl} variant="secondary" size="sm" className="w-full flex items-center gap-2 border-border-premium">
                        Source Code <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                      </Button>
                    )}
                  </div>

                  {/* Case parameters */}
                  <div className="flex flex-col gap-4 mt-4">
                    {selectedProject.client && (
                      <div className="flex items-start gap-3">
                        <User size={16} className="text-accent-blue mt-0.5" />
                        <div>
                          <span className="block font-mono text-[9px] text-text-muted uppercase tracking-wider">Client</span>
                          <span className="text-xs text-white">{selectedProject.client}</span>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <Calendar size={16} className="text-accent-blue mt-0.5" />
                      <div>
                        <span className="block font-mono text-[9px] text-text-muted uppercase tracking-wider">Timeline</span>
                        <span className="text-xs text-white">{selectedProject.year}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Layers size={16} className="text-accent-blue mt-0.5" />
                      <div>
                        <span className="block font-mono text-[9px] text-text-muted uppercase tracking-wider">Tech Stack</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedProject.techStack.map((tech) => (
                            <span key={tech} className="text-[10px] text-text-secondary bg-neutral-900 px-2 py-0.5 rounded border border-white/5">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
