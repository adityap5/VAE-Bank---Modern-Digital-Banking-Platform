"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Twitter, Facebook, Instagram, Linkedin, Mail } from "lucide-react"

const VAELogo = () => (
  <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4L16 20L24 4H32L20 28H12L0 4H8Z" fill="currentColor" />
    <path d="M40 4L56 28H48L44 20L36 28H28L44 4H40Z" fill="currentColor" />
    <path d="M64 4H96V12H72V14H88V20H72V22H96V28H64V4Z" fill="currentColor" />
    <circle cx="108" cy="16" r="4" fill="currentColor" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <motion.div className="flex items-center space-x-2 mb-8" whileHover={{ scale: 1.05 }}>
          <VAELogo />
        </motion.div>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
              From hedge fund strategies to trading bots and investment pools, VaeDeFi delivers the infrastructure and expertise to maximize your crypto potential.
            </p>
            <div className="flex space-x-6">
              {[<Twitter />, <Linkedin />, <Instagram />, <Facebook />].map((social,idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary transition-all duration-300"
                >
                  {social}
                </motion.a>
              ))}
            </div>
        </div>

          {[
            {
              title: "Products",
              links: ["Trading Bots", "Trading Signals", "Trading Pools"],
            },
            {
              title: "Company",
              links: ["About Us"],
            },
            {
              title: "Support",
              links: ["Help Center", "Contact Us", "Security", "Privacy Policy", "Terms of Service"],
            },
          ].map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div
          className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} VAE DeFi, Cayman Islands. All rights reserved. | IFSC: VAE0000001
          </p>
          <div className="flex space-x-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              RBI Guidelines
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
