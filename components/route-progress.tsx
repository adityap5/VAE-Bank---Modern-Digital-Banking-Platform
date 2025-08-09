"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePageTransition } from "@/hooks/use-page-transition"

export default function RouteProgress() {
  const { isLoading } = usePageTransition()

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-blue-600 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      )}
    </AnimatePresence>
  )
}
