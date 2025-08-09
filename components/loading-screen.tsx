"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const VAELogo = () => (
  <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4L16 20L24 4H32L20 28H12L0 4H8Z" fill="currentColor" />
    <path d="M40 4L56 28H48L44 20L36 28H28L44 4H40Z" fill="currentColor" />
    <path d="M64 4H96V12H72V14H88V20H72V22H96V28H64V4Z" fill="currentColor" />
    <circle cx="108" cy="16" r="4" fill="currentColor" />
  </svg>
)

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="text-center">
        <motion.div
          className="mb-8"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <VAELogo />
        </motion.div>

        <motion.div
          className="w-64 h-2 bg-muted rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-blue-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.p
          className="mt-4 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          Loading VAE Bank...
        </motion.p>
      </div>
    </motion.div>
  )
}
