// Optimized animation configurations for smooth performance

export const smoothEasing = {
  easeOut: [0.25, 0.46, 0.45, 0.94],
  easeIn: [0.55, 0.055, 0.675, 0.19],
  easeInOut: [0.645, 0.045, 0.355, 1],
  spring: {
    type: "spring" as const,
    stiffness: 300,
    damping: 25,
    mass: 0.8,
  },
  bounce: {
    type: "spring" as const,
    stiffness: 400,
    damping: 15,
    mass: 0.9,
  },
}

export const animationDurations = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
}

export const staggerConfig = {
  fast: 0.05,
  normal: 0.08,
  slow: 0.12,
}

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: animationDurations.normal, 
    ease: smoothEasing.easeOut 
  },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: animationDurations.normal, 
    ease: smoothEasing.easeOut 
  },
}

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: animationDurations.normal, 
    ease: smoothEasing.easeOut 
  },
}

export const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: smoothEasing.spring,
}

export const liftOnHover = {
  whileHover: { y: -4 },
  transition: { 
    duration: animationDurations.fast, 
    ease: smoothEasing.easeOut 
  },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: staggerConfig.normal,
      delayChildren: 0.1,
    },
  },
}

// Performance optimized variants
export const optimizedVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: animationDurations.normal,
      ease: smoothEasing.easeOut,
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: animationDurations.fast,
      ease: smoothEasing.easeOut,
    }
  },
}

// Reduced motion support
export const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.1 }
  },
  hover: {},
}

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  return false
}

// Get appropriate variants based on user preference
export const getVariants = (variants: any, reducedMotionVariants: any) => {
  return prefersReducedMotion() ? reducedMotionVariants : variants
}
