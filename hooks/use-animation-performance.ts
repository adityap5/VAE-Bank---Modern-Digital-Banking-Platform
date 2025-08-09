import { useEffect, useState } from 'react'

export function useAnimationPerformance() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isLowPowerMode, setIsLowPowerMode] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    // Check for low power mode (battery API)
    if ('getBattery' in navigator) {
      navigator.getBattery().then((battery) => {
        setIsLowPowerMode(battery.level < 0.2)
        
        battery.addEventListener('levelchange', () => {
          setIsLowPowerMode(battery.level < 0.2)
        })
      })
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  // Get optimized animation duration based on performance settings
  const getOptimizedDuration = (baseDuration: number) => {
    if (prefersReducedMotion) return 0.1
    if (isLowPowerMode) return baseDuration * 0.7
    return baseDuration
  }

  // Get optimized animation variants
  const getOptimizedVariants = (variants: any, reducedVariants: any) => {
    if (prefersReducedMotion) return reducedVariants
    return variants
  }

  // Check if animations should be disabled
  const shouldDisableAnimations = prefersReducedMotion || isLowPowerMode

  return {
    prefersReducedMotion,
    isLowPowerMode,
    getOptimizedDuration,
    getOptimizedVariants,
    shouldDisableAnimations,
  }
}

// Hook for optimizing scroll-triggered animations
export function useScrollAnimationOptimization() {
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)
      
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
      
      const timeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
      
      setScrollTimeout(timeout)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [scrollTimeout])

  return {
    isScrolling,
    // Disable animations during scroll for better performance
    shouldAnimate: !isScrolling,
  }
}

// Hook for optimizing hover animations
export function useHoverOptimization() {
  const [hoverCount, setHoverCount] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const handleHoverStart = () => {
    setHoverCount(prev => prev + 1)
    setIsHovering(true)
  }

  const handleHoverEnd = () => {
    setIsHovering(false)
  }

  // Reduce animation complexity after multiple hovers
  const getHoverIntensity = () => {
    if (hoverCount > 10) return 'low'
    if (hoverCount > 5) return 'medium'
    return 'high'
  }

  return {
    isHovering,
    hoverCount,
    getHoverIntensity,
    handleHoverStart,
    handleHoverEnd,
  }
}
