"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Calculator, Home, Car, GraduationCap, Building2, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useRef, Suspense } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
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

export default function LoansPage() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <div className="min-h-screen bg-background text-foreground page-transition">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-4 min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Loans India"
            fill
            className="object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </motion.div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-8">
              <motion.div variants={fadeInUp}>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Automate Your Trading,
                  <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    Maximize Gains
                  </span>
                </h1>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Grow your portfolio effortlessly with SmartBot, our AI-powered trading bot. Start trading with as little as $50 and watch your investments work 24/7, capturing opportunities across memecoins and top tokens.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button
  size="lg"
  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
  onClick={() => window.location.href = "https://calendly.com/vaedefi/30min"}
>
  Get in Touch
  <ArrowRight className="ml-2 w-5 h-5" />
</Button>

<Button
  size="lg"
  variant="outline"
  className="border-border hover:bg-muted bg-transparent"
  onClick={() => window.location.href = "https://vaedefi.vercel.app"}
>
  Learn More
</Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center space-x-8 pt-8">
                {[
                  { value: "93.5%", label: "Accuracy" },
                  { value: "24hrs", label: "Customer Support" },
                  { value: "300x", label: "ROI" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Loan Application"
                width={600}
                height={700}
                className="mx-auto rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">SmartBot Suite</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Maximize your crypto trading potential with our SmartBot suite — designed for every type of trader, from beginners to power users. Automate trades, capture pumps, and optimize gains across memecoins and major tokens.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      icon: Home,
      title: "SmartBot Starter",
      description: "Get started with automated trades for trending memecoins. Perfect for new traders who want hands-off guidance and consistent small wins.",
      price: "$150",
      maxReturn: "82.5%",
      color: "from-blue-400 to-cyan-600",
      link: "https://link.depay.com/CmXdAmw5NDkLonmVyrkpw",
    },
    {
      icon: Car,
      title: "SmartBot Pro",
      description: "Step up your strategy with advanced multi-target trades, risk management, and faster execution. Ideal for traders seeking higher consistency and smarter automation.",
      price: "$250",
      maxReturn: "89.3%",
      color: "from-green-400 to-emerald-600",
      link: "https://link.depay.com/1YXhcjWimEaEc7iLEYbdRs",
    },
    {
      icon: CreditCard,
      title: "SmartBot Elite",
      description: " Unlock full-market automation with premium features: whale tracking, early-entry algorithms, and VIP support. Designed for professional traders who want maximum edge.",
      price: "$500",
      maxReturn: "93.9%",
      color: "from-purple-400 to-pink-600",
      link: "https://link.depay.com/A6UUzvdNzmf2HTit7UQgk",
    },
  ].map((loan, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="h-full bg-card border-border hover:border-primary/20 transition-all duration-300">
        <CardContent className="p-8">
          <div
            className={`w-16 h-16 bg-gradient-to-r ${loan.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
          >
            <loan.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">{loan.title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">{loan.description}</p>
          <div className="space-y-2 mb-6">
            {loan.price && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Price:</span>
                <span className="text-green-600 dark:text-green-400 font-semibold">{loan.price}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-muted-foreground">Accuracy:</span>
              <span className="text-primary font-semibold">{loan.maxReturn}</span>
            </div>
          </div>
          <Button
            className="w-full bg-muted hover:bg-muted/80 text-foreground"
            onClick={() => window.location.href = loan.link}
          >
            Purchase Now
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Why Choose Our Smart Signals?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay ahead in the crypto market with real-time, expert-backed signals designed to maximize your gains while minimizing risk.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Instant Execution",
                description: "Bots execute trades in real-time so you never miss a market opportunity.",
                icon: "⚡",
              },
              {
                title: "Proven Trading Algorithms",
                description: "Our bots use tested strategies, including multi-target take-profits, stop-losses, and trend detection to optimize gains.",
                icon: "💰",
              },
              {
                title: "Market Insights",
                description: "Analyze historical performance and real-time analytics for every trade to make informed decisions.",
                icon: "📅",
              },
              {
                title: "Seamless Automation",
                description: "Integrate directly with your exchange or Telegram for hands-free trading and full control over your portfolio.",
                icon: "📱",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Ready to Invest?</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Join VAEDefi’s high-performing investment pools in minutes. Our team of crypto and memecoin experts are here to help you maximize returns while managing risk.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4"
                onClick={() => window.location.href = "https://calendly.com/vaedefi/30min"}
              >
                Let's Get Started
                <ArrowRight className="ml-2 w-6 h-6" />
                
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted text-lg px-8 py-4 bg-transparent"
                onClick={() => window.location.href = "https://vaedefi.vercel.app"}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
