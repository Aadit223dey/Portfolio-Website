import { Variants } from "framer-motion";

/**
 * Premium easing curves mimicking high-end transitions (e.g., Apple and Linear)
 */
export const EASE_PRESETS = {
  apple: [0.25, 1, 0.5, 1] as any,
  linear: [0.22, 1, 0.36, 1] as any,
  snappy: [0.16, 1, 0.3, 1] as any,
  elastic: [0.76, 0, 0.24, 1] as any
};

/**
 * Standard fade-in-up scroll reveal animations
 */
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7, 
      ease: EASE_PRESETS.linear
    } 
  }
};

/**
 * Standard fade-in reveal animation
 */
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut"
    } 
  }
};

/**
 * Scale-in transitions for cards & 3D objects
 */
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: EASE_PRESETS.apple
    } 
  }
};

/**
 * Orchestrating staggered grid entries
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

/**
 * Staggered text word reveal (splitting headings)
 */
export const letterReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: "100%" 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: EASE_PRESETS.apple 
    }
  }
};
