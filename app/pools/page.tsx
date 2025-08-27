"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, TrendingUp, PieChart, Target, Shield, BarChart3, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useRef, Suspense } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
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

export default function InvestmentsPage() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div className="min-h-screen bg-background text-foreground page-transition">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-4 min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Investments India"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </motion.div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-8">
              <motion.div variants={fadeInUp}>
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  Smart
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Bots
                  </span>
                </h1>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Grow your portfolio effortlessly with SmartBot, our AI-powered trading bot. Start trading with as little as $50 and watch your investments work 24/7, capturing opportunities across memecoins and top tokens.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Start Investing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-foreground hover:bg-muted bg-transparent"
                >
                  SIP Calculator
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center space-x-12 pt-8">
                {[
                  { value: "₹500", label: "Min SIP Amount" },
                  { value: "15%", label: "Avg Returns (p.a.)" },
                  { value: "₹1.5L", label: "Tax Savings" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Investment Dashboard"
                width={600}
                height={700}
                className="mx-auto rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Products Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Investment Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our curated selection of investment products designed for Indian investors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Mutual Funds",
                description:
                  "Diversified mutual funds across equity, debt, and hybrid categories with expert management.",
                returns: "12-15% p.a.",
                minInvestment: "₹500",
                color: "from-blue-400 to-cyan-600",
              },
              {
                icon: PieChart,
                title: "ELSS Funds",
                description: "Tax-saving mutual funds with 3-year lock-in period and potential for high returns.",
                returns: "15-18% p.a.",
                minInvestment: "₹500",
                color: "from-green-400 to-emerald-600",
              },
              {
                icon: Target,
                title: "SIP Plans",
                description: "Systematic Investment Plans to build wealth through disciplined investing.",
                returns: "12-16% p.a.",
                minInvestment: "₹500",
                color: "from-purple-400 to-pink-600",
              },
              {
                icon: Shield,
                title: "Fixed Deposits",
                description: "Secure fixed deposits with guaranteed returns and flexible tenure options.",
                returns: "6.5-7.5% p.a.",
                minInvestment: "₹10,000",
                color: "from-yellow-400 to-orange-600",
              },
              {
                icon: BarChart3,
                title: "Direct Equity",
                description: "Invest directly in stocks of leading Indian companies with research support.",
                returns: "Variable",
                minInvestment: "₹1,000",
                color: "from-red-400 to-rose-600",
              },
              {
                icon: DollarSign,
                title: "Gold Investment",
                description: "Digital gold investment with the convenience of buying and selling anytime.",
                returns: "8-12% p.a.",
                minInvestment: "₹100",
                color: "from-indigo-400 to-blue-600",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-card border-border hover:border-primary/20 transition-all duration-500">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{product.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Expected Returns:</span>
                        <span className="text-green-400 font-semibold">{product.returns}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Min Investment:</span>
                        <span className="text-blue-400 font-semibold">{product.minInvestment}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-muted hover:bg-muted/80">Invest Now</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
