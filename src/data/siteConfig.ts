/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║                    PORTFOLIO CONFIGURATION                      ║
 * ║                                                                  ║
 * ║  Fill in YOUR personal details below. Every field marked with   ║
 * ║  "[FILL_IN]" needs your real information. When you change a     ║
 * ║  value here, it automatically updates across the entire site.   ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

export const siteConfig = {

  // ─────────────────────────────────────────────────────────────────
  // SECTION 1: YOUR IDENTITY
  // Replace every value below with your actual information.
  // ─────────────────────────────────────────────────────────────────
  personal: {
    /** Your full name (displayed in the hero, navbar, and footer) */
    name: "Aadit Dey",

    /** Your professional title (e.g. "Frontend Developer", "Creative Engineer") */
    title: "Passionate full-stack developer specializing in modern web applications",

    /** A one-line role description shown below your title */
    role: "Specializing in Modern Landing Pages & Business Websites",

    /** A short tagline for the hero section subtitle */
    tagline: "Designing and Building Websites That Make an Impact",

    /** Your primary contact email */
    email: "dey223aadit@gmail.com",

    /** Your location (e.g. "New York, USA / Remote") */
    location: "India",

    /**
     * Your profile photo URL.
     * Option 1: Place your photo in the /public/images/ folder and use "/images/your-photo.jpg"
     * Option 2: Use an external URL like "https://example.com/your-photo.jpg"
     */
    avatar: "/images/avatar-placeholder.jpg",

    /** Link to your resume/CV PDF (place it in /public/ folder and use "/resume.pdf") */
    resumeUrl: "",

    /** Your current availability status */
    availability: "Available for new projects — June 2026",
  },

  // ─────────────────────────────────────────────────────────────────
  // SECTION 2: YOUR SOCIAL LINKS
  // Replace with your actual profile URLs. Remove any you don't use.
  // ─────────────────────────────────────────────────────────────────
  social: {
    github: "[FILL_IN: https://github.com/yourusername]",
    linkedin: "[FILL_IN: https://linkedin.com/in/yourusername]",
    twitter: "[FILL_IN: https://twitter.com/yourusername]",
    dribbble: "[FILL_IN: https://dribbble.com/yourusername]",
  },

  // ─────────────────────────────────────────────────────────────────
  // SECTION 3: NAVIGATION
  // You can add, remove, or rename menu items here.
  // Each "href" must match a section id on the page (e.g. #about).
  // ─────────────────────────────────────────────────────────────────
  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],

  // ─────────────────────────────────────────────────────────────────
  // SECTION 4: HERO SECTION
  // The large headline and intro text visitors see first.
  // The typewriter effect will animate the headlineMain text.
  // ─────────────────────────────────────────────────────────────────
  hero: {
    /** Small label text above the main headline */
    headlinePre: "WELCOME TO MY PORTFOLIO",

    /** The big animated typewriter headline */
    headlineMain: "I Build Premium Digital Experiences",

    /** Supporting paragraph below the headline */
    headlineSub: "I specialize in designing and developing modern, high-performance websites that help brands stand out online.",

    ctaPrimary: "View My Work",
    ctaSecondary: "Get in Touch",

    /**
     * STATS BAR (optional)
     * These are hidden by default since you don't have client data yet.
     * Set showStats to true and fill in the values when you're ready.
     */
    showStats: false,
    stats: [
      { value: "[FILL_IN]", label: "Projects Delivered" },
      { value: "[FILL_IN]", label: "Client Satisfaction" },
      { value: "[FILL_IN]", label: "Years of Experience" },
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // SECTION 5: ABOUT SECTION
  // Your bio paragraphs and experience numbers.
  // ─────────────────────────────────────────────────────────────────
  about: {
    title: "Modern Web Development",
    subtitle: "Clean design. Pixel-perfect execution.",
    paragraphs: [
      "I am a passionate web developer with a focus on creating modern, high-performance websites that help brands stand out online.",
      "My approach combines technical expertise with a keen eye for design, ensuring that every project I deliver not only functions flawlessly but also provides an exceptional user experience."
    ],

    /**
     * These numbers are shown on stat cards in the About section.
     * Set showStats to true when you have real data to display.
     */
    showStats: false,
    experienceYears: 3,
    completedProjects: 24,
    happyClients: 18,
  },

  // ─────────────────────────────────────────────────────────────────
  // SECTION 6: SERVICES YOU OFFER
  // Edit the title, description, and icon for each service.
  // Icon names come from https://lucide.dev/icons
  // ─────────────────────────────────────────────────────────────────
  services: [
    {
      id: "landing-pages",
      icon: "Sparkles",
      title: "High-Converting Landing Pages",
      description: "Designing and coding custom, pixel-perfect landing pages engineered to captivate visitors, highlight your brand value, and maximize conversion rates.",
      accent: "blue" as const
    },
    {
      id: "web-apps",
      icon: "Code2",
      title: "Premium Web Applications",
      description: "Developing responsive, lighting-fast SaaS frontends and dashboard platforms built with Next.js, secure APIs, and responsive database integrations.",
      accent: "grey" as const
    },
    {
      id: "design",
      icon: "Palette",
      title: "Interactive 3D & Creative UI",
      description: "Integrating immersive WebGL scenes, custom shader effects, and dynamic micro-animations that breathe life into your web experiences.",
      accent: "blue" as const
    },
    {
      id: "seo-performance",
      icon: "Zap",
      title: "SEO & Performance Tuning",
      description: "Tuning your load speeds to a perfect Lighthouse score, implementing clean HTML5 semantics, and setting proper metadata for search engines.",
      accent: "grey" as const
    }
  ],

  // ─────────────────────────────────────────────────────────────────
  // SECTION 7: YOUR SKILLS / TECHNOLOGIES
  // Organize your skills into categories. Add or remove as needed.
  // ─────────────────────────────────────────────────────────────────
  skills: {
    categories: [
      {
        name: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js / WebGL"]
      },
      {
        name: "Backend",
        items: ["Node.js", "Express.js", "PostgreSQL", "REST & GraphQL APIs", "Serverless Functions"]
      },
      {
        name: "Design & Tools",
        items: ["Figma", "Git/GitHub", "Vercel", "Cursor / VS Code", "Responsive UI Design"]
      },
      {
        name: "Other",
        items: ["SEO Architecture", "Core Web Vitals tuning", "Stripe Payment integrations", "Animation Physics"]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // SECTION 8: YOUR DEVELOPMENT PROCESS
  // Describe your workflow in 3-5 steps.
  // ─────────────────────────────────────────────────────────────────
  process: [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We clarify your brand objectives, analyze your competitors, define the exact user journey, and align on a technical specification plan."
    },
    {
      step: "02",
      title: "Premium Interface Design",
      description: "I craft high-fidelity Figma mockups showing every responsive detail, curated color palette, typography system, and planned animation flow."
    },
    {
      step: "03",
      title: "High-Performance Engineering",
      description: "The design is cleanly hand-coded into production-grade Next.js, integrating WebGL shaders, responsive breakpoints, and SEO optimization."
    },
    {
      step: "04",
      title: "QA, Launch & Handover",
      description: "We conduct cross-device testing, tune Core Web Vitals to hit 100% scores, launch to production, and handover a pristine code system."
    }
  ],

  // ─────────────────────────────────────────────────────────────────
  // SECTION 9: CLIENT TESTIMONIALS
  // Add real client quotes here when you have them.
  // Set showTestimonials to true when ready to display.
  // ─────────────────────────────────────────────────────────────────
  showTestimonials: false,
  testimonials: [
    {
      quote: "Working with you was a game-changer for our launch. The page performance is blazing fast, the WebGL background is beautiful, and our conversion rate increased by 40%.",
      author: "Sarah Jenkins",
      role: "Founder & CEO",
      company: "Luminary SaaS",
      avatar: "/images/testimonial-1.jpg"
    },
    {
      quote: "Outstanding attention to detail and clean Next.js engineering. Delivered a custom web solution that our design team fell in love with instantly.",
      author: "David Chen",
      role: "Creative Director",
      company: "Apex Digital Agency",
      avatar: "/images/testimonial-2.jpg"
    }
  ],

  // ─────────────────────────────────────────────────────────────────
  // SECTION 10: CONTACT SECTION
  // ─────────────────────────────────────────────────────────────────
  contact: {
    headline: "Let's Work Together",
    subheadline: "Have a project in mind or want to explore ideas? Drop me a message and let's craft something remarkable.",
    email: "hello@yourportfolio.com",
    availabilityText: "Currently accepting new client projects.",
    formFields: {
      name: "Name",
      email: "Email Address",
      projectType: "Project Type",
      budget: "Estimated Budget",
      message: "Tell me about your project",
      submit: "Send Message",
      success: "Message sent! I'll get back to you within 24 hours."
    }
  },

  // ─────────────────────────────────────────────────────────────────
  // SECTION 11: SEO & METADATA
  // This data powers search engine results and social media previews.
  // ─────────────────────────────────────────────────────────────────
  metadata: {
    /** The page title shown in browser tabs and Google results */
    title: "Elite Freelance Web Developer & Next.js Engineer",

    /** The description shown in Google search results (max ~160 chars) */
    description: "Portfolio of a high-performance web developer specializing in custom landing pages, immersive 3D WebGL animations, and pixel-perfect design-to-code.",

    /** Your website URL (used for canonical links and OG tags) — MUST be a valid URL */
    url: "https://example.com",

    /** Path to your Open Graph image (place in /public/) */
    ogImage: "/og-image.png",

    /** Your Twitter/X handle */
    twitterHandle: "@nextjs_developer"
  }
};
