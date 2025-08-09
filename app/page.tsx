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
            alt="Modern Banking India"
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
                  <span className="text-primary">Trusted by 40L+ Indians</span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className="text-5xl lg:text-6xl font-bold leading-tight">
                  Banking for
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
                    New India
                  </motion.span>
                </motion.h1>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Experience the future of banking with VAE Bank India. Seamlessly manage your money with cutting-edge
                security, instant UPI payments, and innovative features designed for digital India.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground shadow-lg"
                  >
                    Open Account
                    <motion.div
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.div>
                  </Button>
                </motion.div>

                <motion.div {...scaleOnHover}>
                  <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
                    <Play className="mr-2 w-5 h-5" />
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center space-x-8 pt-8">
                {[
                  { value: "4M+", label: "Active Users" },
                  { value: "₹50,000Cr+", label: "Assets Under Management" },
                  { value: "180+", label: "Countries Supported" },
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
                  alt="VAE Bank Mobile App India"
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
              <span className="text-primary">Award-winning features</span>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Banking without
              <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                boundaries
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience seamless digital banking with features designed for modern India. From instant UPI transfers to
              advanced security, we've got you covered.
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
                title: "Bank-Grade Security",
                description:
                  "Your funds are protected by advanced encryption and multi-factor authentication used by leading Indian banks.",
                color: "from-green-400 to-emerald-600",
                delay: 0,
              },
              {
                icon: Zap,
                title: "Instant UPI Payments",
                description:
                  "Send money instantly using UPI, IMPS, or NEFT. No charges on UPI transactions up to ₹1 lakh per day.",
                color: "from-orange-400 to-red-600",
                delay: 0.1,
              },
              {
                icon: Smartphone,
                title: "Mobile-First Banking",
                description:
                  "Manage your entire financial life from your phone with our award-winning mobile application in Hindi and English.",
                color: "from-blue-400 to-cyan-600",
                delay: 0.2,
              },
              {
                icon: TrendingUp,
                title: "Smart Investment Tools",
                description:
                  "Grow your wealth with SIP investments, mutual funds, and fixed deposits with competitive interest rates.",
                color: "from-purple-400 to-pink-600",
                delay: 0.3,
              },
              {
                icon: Globe,
                title: "Multi-Language Support",
                description:
                  "Bank in your preferred language with support for Hindi, English, and 10+ regional languages.",
                color: "from-indigo-400 to-blue-600",
                delay: 0.4,
              },
              {
                icon: Eye,
                title: "Real-Time Insights",
                description:
                  "Get detailed analytics about your spending patterns with categorized expenses and budgeting tools.",
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
                  Everything you need for
                  <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    financial freedom
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  From personal banking to investments, VAE Bank India provides comprehensive financial services
                  tailored for the Indian market.
                </p>
              </motion.div>

              <motion.div variants={staggerContainer} className="space-y-6">
                {[
                  {
                    icon: CreditCard,
                    title: "Premium Cards",
                    description:
                      "Credit and debit cards with exclusive benefits, cashback rewards, and India-wide acceptance.",
                    color: "from-yellow-400 to-orange-600",
                  },
                  {
                    icon: DollarSign,
                    title: "Investment Options",
                    description:
                      "SIP investments, mutual funds, fixed deposits, and gold investments with competitive returns.",
                    color: "from-green-400 to-emerald-600",
                  },
                  {
                    icon: Users,
                    title: "Family Banking",
                    description:
                      "Joint accounts, family savings goals, and financial planning tools for Indian families.",
                    color: "from-blue-400 to-indigo-600",
                  },
                  {
                    icon: Lock,
                    title: "Digital Locker",
                    description:
                      "Secure storage for your Aadhaar, PAN, and other important documents with government-grade security.",
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
                Indians
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
                role: "Digital Nomad",
                image:
                  "https://images.unsplash.com/photo-1439402702863-6434b61e6392?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                content:
                  "VAE Bank has revolutionized how I manage my finances while traveling. Instant transfers and no foreign transaction fees are game-changers.",
              },
              {
                name: "Rajesh Kumar",
                role: "Entrepreneur",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
                content:
                  "The business banking features are incredible. I can manage multiple currencies and make international payments seamlessly.",
              },
              {
                name: "Anita Patel",
                role: "Investment Advisor",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
                content:
                  "The wealth management tools and insights have helped me optimize my investment strategy. Truly next-generation banking.",
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
              Ready to join Digital India?
            </motion.h2>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Experience banking without boundaries. Open your VAE Bank account today and discover what modern Indian
              banking should be.
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
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 shadow-2xl hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                >
                  Open Account Now
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} {...scaleOnHover}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-muted text-lg px-8 py-4 bg-transparent hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                >
                  Download App
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
                <div className="text-3xl font-bold text-foreground">5 min</div>
                <div className="text-muted-foreground">Account Setup</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">₹0</div>
                <div className="text-muted-foreground">Monthly Fees</div>
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
