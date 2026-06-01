"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import { siteConfig } from "../../data/siteConfig";

/**
 * Contact section with active validation and API POST routing.
 */
export function Contact() {
  const { headline, subheadline, email, availabilityText, formFields } = siteConfig.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "landing-page",
    budget: "$5,000 - $10,000",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          projectType: "landing-page",
          budget: "$5,000 - $10,000",
          message: ""
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 w-full bg-bg-darkest relative overflow-hidden z-10">
      
      {/* Background ambient light leaks */}
      <div className="absolute top-[20%] left-[20%] w-[550px] h-[550px] bg-accent-blue/5 rounded-full filter blur-[180px] pointer-events-none" />

      <Container>
        <SectionHeading
          preHeader="Get in Touch"
          title={headline}
          description={subheadline}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left Side: Contact Form in glass Card */}
          <Card glow={true} className="lg:col-span-7 bg-bg-card/25 border-neutral-900/60 p-8 sm:p-10 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-mono text-[9px] tracking-wider uppercase text-text-secondary">
                    {formFields.name} <span className="text-accent-blue">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-neutral-900 border border-border-premium focus:border-accent-blue rounded-xl px-4 py-3 font-sans text-xs text-white placeholder-neutral-600 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                {/* Email field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-[9px] tracking-wider uppercase text-text-secondary">
                    {formFields.email} <span className="text-accent-blue">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-neutral-900 border border-border-premium focus:border-accent-blue rounded-xl px-4 py-3 font-sans text-xs text-white placeholder-neutral-600 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Project Type selection */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="projectType" className="font-mono text-[9px] tracking-wider uppercase text-text-secondary">
                    {formFields.projectType}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-neutral-900 border border-border-premium focus:border-accent-blue rounded-xl px-4 py-3 font-sans text-xs text-white focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="landing-page">Premium Landing Page</option>
                    <option value="web-application">Interactive Web Application</option>
                    <option value="3d-experience">Immersive 3D Experience</option>
                    <option value="consulting">Performance / SEO Audit</option>
                  </select>
                </div>
                
                {/* Budget selection */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="font-mono text-[9px] tracking-wider uppercase text-text-secondary">
                    {formFields.budget}
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-neutral-900 border border-border-premium focus:border-accent-blue rounded-xl px-4 py-3 font-sans text-xs text-white focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                    <option value="$20,000+">$20,000+</option>
                  </select>
                </div>
              </div>

              {/* Message text area */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-[9px] tracking-wider uppercase text-text-secondary">
                  {formFields.message} <span className="text-accent-blue">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full bg-neutral-900 border border-border-premium focus:border-accent-blue rounded-xl px-4 py-3 font-sans text-xs text-white placeholder-neutral-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your product requirements..."
                />
              </div>

              {/* Form trigger state responses */}
              {status === "success" && (
                <div className="flex items-center gap-2.5 text-green-400 bg-green-500/10 border border-green-500/20 p-4 rounded-xl text-xs">
                  <CheckCircle size={16} />
                  <span>{formFields.success}</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2.5 text-red-400 bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-xs">
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Button Trigger */}
              <Button
                type="submit"
                variant="primary"
                disabled={status === "loading"}
                className="w-full sm:w-auto self-start mt-2 flex items-center gap-2"
              >
                {status === "loading" ? "Submitting..." : formFields.submit}
                <Send size={14} />
              </Button>

            </form>
          </Card>

          {/* Right Side: Informational panel in glass Card */}
          <Card glow={false} className="lg:col-span-5 bg-bg-card/10 border-neutral-900/60 p-8 sm:p-10 flex flex-col justify-between">
            <div className="flex flex-col gap-8">
              <div>
                <span className="font-mono text-[9px] tracking-widest text-text-muted uppercase mb-4 block">
                  Aether Coordinates
                </span>
                <h3 className="text-xl font-display font-semibold text-white mb-6">
                  Collaboration Desk
                </h3>
              </div>

              {/* Info details */}
              <div className="flex flex-col gap-6">
                
                {/* Email coordinate */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-border-premium text-accent-blue flex items-center justify-center">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] text-text-muted uppercase tracking-wider">Email</span>
                    <a href={`mailto:${email}`} className="text-xs text-white hover:text-accent-blue transition-colors">
                      {email}
                    </a>
                  </div>
                </div>

                {/* Location coordinate */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-border-premium text-accent-blue flex items-center justify-center">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] text-text-muted uppercase tracking-wider">Location</span>
                    <span className="text-xs text-white">
                      {siteConfig.personal.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Availability details */}
            <div className="mt-8 border-t border-border-premium/50 pt-8 flex flex-col gap-2">
              <span className="font-mono text-[9px] text-text-muted uppercase tracking-wider">Availability Status</span>
              <p className="text-xs text-white font-sans flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {availabilityText}
              </p>
            </div>

          </Card>

        </div>
      </Container>
    </section>
  );
}
