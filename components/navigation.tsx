"use client"

import { motion } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

const VAELogo = () => (
  <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4L16 20L24 4H32L20 28H12L0 4H8Z" fill="currentColor" />
    <path d="M40 4L56 28H48L44 20L36 28H28L44 4H40Z" fill="currentColor" />
    <path d="M64 4H96V12H72V14H88V20H72V22H96V28H64V4Z" fill="currentColor" />
    <circle cx="108" cy="16" r="4" fill="currentColor" />
  </svg>
)

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isNavigating, setIsNavigating] = useState(false)

  const navItems = [
    {
      name: "Products",
      href: "#",
      dropdown: [
        { name: "Trading Signals", href: "/signals" },
        { name: "Investment Pools", href: "/pools" },
        
      ],
    },
    { name: "Wealth", href: "/wealth" },
    { name: "Support", href: "/support" },
  ]

  const handleNavigation = (href: string) => {
    setIsNavigating(true)
    // Add a small delay for smooth transition
    setTimeout(() => {
      router.push(href)
      setIsNavigating(false)
    }, 100)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border z-50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Link href="/">
            <VAELogo />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={`text-muted-foreground hover:text-foreground transition-colors duration-300 relative group flex items-center ${
                  pathname === item.href ? "text-foreground" : ""
                }`}
                onClick={(e) => {
                  if (item.href === "#") {
                    e.preventDefault()
                  } else {
                    e.preventDefault()
                    handleNavigation(item.href)
                  }
                }}
              >
                {item.name}
                {item.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && activeDropdown === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-xl"
                >
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavigation(dropdownItem.href)
                      }}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-muted">
              Login
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Open Account</Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button className="text-foreground hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border"
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className={`block text-lg text-muted-foreground hover:text-foreground transition-colors ${
                  pathname === item.href ? "text-foreground" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                  handleNavigation(item.href)
                }}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        setIsOpen(false)
                        handleNavigation(dropdownItem.href)
                      }}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 space-y-3">
            <Button variant="ghost" className="w-full text-muted-foreground hover:text-foreground hover:bg-muted">
              Get in Touch
            </Button>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Start Trading</Button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}
