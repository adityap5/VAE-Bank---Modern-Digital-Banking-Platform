"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePageTransition } from "@/hooks/use-page-transition"

export default function RouteProgress() {
  const { isLoading } = usePageTransition()

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-primary z-50"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0, transformOrigin: "right" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  )
}
