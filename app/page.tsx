"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  ArrowRight,
  Shield,
  Smartphone,
  CreditCard,
  TrendingUp,
  Users,
  Globe,
  Play,
  Star,
  Lock,
  Zap,
  Award,
  Eye,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useRef, Suspense } from "react"
import Link from "next/link"

const VAELogo = () => (
  <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4L16 20L24 4H32L20 28H12L0 4H8Z" fill="currentColor" />
    <path d="M40 4L56 28H48L44 20L36 28H28L44 4H40Z" fill="currentColor" />
    <path d="M64 4H96V12H72V14H88V20H72V22H96V28H64V4Z" fill="currentColor" />
    <circle cx="108" cy="16" r="4" fill="currentColor" />
  </svg>
)

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
}

const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 300, damping: 20 },
}

const ImageWithFallback = ({ src, alt, ...props }: any) => (
  <Suspense fallback={<div className="bg-muted animate-pulse rounded-3xl" {...props} />}>
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      loading="lazy"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      {...props}
    />
  </Suspense>
)

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const servicesRef = useRef(null)
  const testimonialsRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-20 px-4 min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: y1, opacity }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Top-Tier Blockchain Trading Infrastructure"
            fill
            className="object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </motion.div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate={heroInView ? "animate" : "initial"}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="space-y-6">
                <motion.div
                  className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4, delay: 0.1, type: "spring" as const, stiffness: 200, damping: 15 }}
                >
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-primary">Trusted by 13,000 Investors</span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className="text-5xl lg:text-6xl font-bold leading-tight">
                  Invest Smarter,
                  <motion.span
                    className="block bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    Profit Bigger.
                  </motion.span>
                </motion.h1>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                VAE DeFi is your gateway to next-level crypto wealth. We design cutting-edge AI trading bots that execute with precision, launch high-potential memecoins engineered for explosive growth, and actively manage investor pools to maximize returns. With our elite trading signals, both free and VIP, you get insider-grade strategies that let you profit smarter, faster, and bigger than ever before. Join us, and turn the future of blockchain into your personal financial empire.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <motion.div {...scaleOnHover}>
                  
                  <Button
                    size="lg"
                    onClick={() => window.location.href = "https://calendly.com/vaedefi/30min"}
                    className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground shadow-lg"
                  >
             
                    Get in Touch
                    <motion.div
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.div>
                  </Button>
                </motion.div>

                <motion.div {...scaleOnHover}>
                  <Button 
                    size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent"
                    onClick={() => window.location.href = "https://calendly.com/metriccdefi/30min"}
                    >
                    
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center space-x-8 pt-8">
                {[
                  { value: "2.6M+", label: "Active Users" },
                  { value: "$1,902,000", label: "Assets Under Management" },
                  { value: "180+", label: "Assets Supported" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.08, ease: "easeOut" }}
                    className="text-center"
                  >
                    <motion.div
                      className="text-2xl lg:text-3xl font-bold text-foreground"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="VAE Investments | DeFI Without Limits"
                  width={600}
                  height={700}
                  className="mx-auto rounded-3xl shadow-2xl"
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl rounded-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-full blur-xl"
        ></motion.div>

        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
        ></motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6"
              initial={{ scale: 0 }}
                          animate={featuresInView ? { scale: 1 } : { scale: 0.95 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            >
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary">Next-Level Features</span>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              DeFi Without
              <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Limits
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Supercharge your crypto journey with VaeDeFi. From AI-driven trading bots and powerful tools to investment pools and memecoin launches — we fuel the next generation of digital wealth.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={featuresInView ? "animate" : "initial"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Shield,
                title: "Top-Tier Trading Bots",
                description:
                  "Trade smarter with AI-powered bots that execute strategies 24/7, ensuring you never miss profitable market opportunities.",
                color: "from-green-400 to-emerald-600",
                delay: 0,
              },
              {
                icon: Zap,
                title: "Advanced Trading Tools",
                description:
                  "Access real-time analytics, precision entry/exit indicators, and charting tools designed for traders who want an edge.",
                color: "from-orange-400 to-red-600",
                delay: 0.1,
              },
              {
                icon: Smartphone,
                title: "Investment Pools",
                description:
                  "Grow your portfolio by joining curated investment pools that diversify risk while maximizing long-term returns.",
                color: "from-blue-400 to-cyan-600",
                delay: 0.2,
              },
              {
                icon: TrendingUp,
                title: "Trading Signals",
                description:
                  "Stay ahead of the market with instant, data-backed signals for Bitcoin, altcoins, and trending memecoins.",
                color: "from-purple-400 to-pink-600",
                delay: 0.3,
              },
              {
                icon: Globe,
                title: "Memecoin Development",
                description:
                  "From concept to launch, VaeDeFi builds community-driven memecoins designed to capture hype and scale fast.",
                color: "from-indigo-400 to-blue-600",
                delay: 0.4,
              },
              {
                icon: Eye,
                title: "DeFi Truly Without Limits",
                description:
                  "Experience borderless finance with seamless tools, automated strategies, and opportunities across the decentralized ecosystem.",
                color: "from-yellow-400 to-orange-600",
                delay: 0.5,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, delay: feature.delay, ease: "easeOut" },
                  },
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.15, ease: "easeOut" },
                }}
                className="group"
              >
                <Card
  className="h-full rounded-2xl 
             bg-white/10 border border-white/20 
             backdrop-blur-lg shadow-lg 
             hover:border-primary/30 dark:hover:border-primary/40 
             transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
>
  <CardContent className="p-8">
    <motion.div
      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl 
                  flex items-center justify-center mb-6 
                  group-hover:scale-110 transition-transform duration-300`}
      whileHover={{ rotate: 3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <feature.icon className="w-8 h-8 text-white" />
    </motion.div>
    <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
      {feature.title}
    </h3>
    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
      {feature.description}
    </p>
  </CardContent>
</Card>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                animate={{
                  rotateY: [0, 3, 0],
                  scale: [1, 1.005, 1],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Banking Dashboard India"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl"
                />
              </motion.div>

              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-2xl"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [0.98, 1.02, 0.98],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              ></motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate={servicesInView ? "animate" : "initial"}
              className="space-y-12"
            >
              <motion.div variants={fadeInRight}>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Unleash the Future of
                  <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    DeFi.
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  VaeDeFi gives you everything you need to dominate the decentralized markets — from automated bots and investment pools to viral memecoin launches. Trade smarter, earn faster, and build bigger with the next generation of digital finance.
                </p>
              </motion.div>

              <motion.div variants={staggerContainer} className="space-y-6">
                {[
                  {
                    icon: CreditCard,
                    title: "Alpha Access, Always",
                    description:
                      "We track memecoin launches, market surges, and liquidity shifts in real time so you get signals before the crowd.",
                    color: "from-yellow-400 to-orange-600",
                  },
                  {
                    icon: DollarSign,
                    title: "Built by Traders, For Traders",
                    description:
                      "Every bot, tool, and pool we launch is battle-tested by real traders who know the grind, not just developers chasing hype.",
                    color: "from-green-400 to-emerald-600",
                  },
                  {
                    icon: Users,
                    title: "Full-Stack Token Development",
                    description:
                      "We don’t just talk about memecoins — we build them, brand them, and launch them with the community power to go viral.",
                    color: "from-blue-400 to-indigo-600",
                  },
                  {
                    icon: Lock,
                    title: "A Global DeFi Network",
                    description:
                      "No borders, no banks, no limits. VaeDeFi connects you with opportunities worldwide, 24/7, without gatekeepers.",
                    color: "from-purple-400 to-pink-600",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      initial: { opacity: 0, x: 40 },
                      animate: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, delay: index * 0.1 },
                      },
                    }}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-6 group cursor-pointer "
                  >
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 `}
                      whileHover={{ rotate: 10 }}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Trusted by millions of
              <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Investors
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={testimonialsInView ? "animate" : "initial"}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Priya Sharma",
                role: "Financial Advisor",
                image:
                  "https://images.unsplash.com/photo-1439402702863-6434b61e6392?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                content:
                  "ObitraBot caught trades I never would’ve spotted on my own. It feels like having a 24/7 trader grinding for me — and my portfolio has never looked stronger.",
              },
              {
                name: "Matt Keenan",
                role: "Entrepreneur",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
                content:
                  "This thing catches pumps before the herd piles in. ObitraBot made me more in a week trading memes than months of grinding charts.",
              },
              {
                name: "Anita Patel",
                role: "Investment Advisor",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
                content:
                  "I invested $100,000 with VaeDeFi’s hedge fund, and within weeks, their strategies and trading expertise were already outperforming anything I could manage on my own. Smart, automated, and hands-off — this is the future of investing.",
              },
            ].map((testimonial, index) => (
              <motion.div
  key={index}
  variants={fadeInUp}
  whileHover={{ y: -5, scale: 1.02 }}
  transition={{ duration: 0.2 }}
  className="rounded-2xl p-8 border border-white/20 backdrop-blur-lg shadow-lg 
             hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-300"
>
  <div className="flex items-center space-x-4 mb-6">
    <ImageWithFallback
      src={testimonial.image || "/placeholder.svg"}
      alt={testimonial.name}
      width={60}
      height={60}
      className="rounded-full"
    />
    <div>
      <h4 className="text-foreground font-semibold">{testimonial.name}</h4>
      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
    </div>
  </div>
  <p className="text-foreground/90 leading-relaxed">{testimonial.content}</p>
  <div className="flex space-x-1 mt-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ))}
  </div>
</motion.div>

            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
                          animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
                  ],
                }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        ></motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              className="text-4xl lg:text-6xl font-bold text-foreground mb-8"
              animate={{
                textShadow: [
                  "0 0 20px hsl(var(--primary) / 0.3)",
                  "0 0 40px hsl(var(--primary) / 0.5)",
                  "0 0 20px hsl(var(--primary) / 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Want to invest with VaeDefi?
            </motion.h2>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Invest with VaeDeFi and unlock a world of high-performance trading, automated bots, and investment pools designed to grow your wealth. Join today and see what modern DeFi can really do.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} {...scaleOnHover}>
                <Button
                  onClick={() => window.location.href = "https://calendly.com/vaedefi/30min"}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 shadow-2xl hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                >
                  Let's Get Started
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} {...scaleOnHover}>
                <Button
                  onClick={() => window.location.href = "https://vaedefi.vercel.app/wealth"}
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-muted text-lg px-8 py-4 bg-transparent hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center space-x-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">2.6M</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">$1,902,000</div>
                <div className="text-muted-foreground">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
