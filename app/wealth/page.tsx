"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, TrendingUp, Shield, Crown, Briefcase, Globe, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useRef } from "react"

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

export default function WealthPage() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div className="page-transition min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-4 min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
          <Image
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Wealth Management"
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
                  Wealth Management
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Excellence
                  </span>
                </h1>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Preserve and grow your wealth with personalized investment strategies, expert guidance, and exclusive
                access to premium financial opportunities.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Start Wealth Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-foreground hover:bg-gray-800 bg-transparent"
                >
                  Book Consultation
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center space-x-12 pt-8">
                {[
                  { value: "₹1,00,000Cr+", label: "Assets Under Management" },
                  { value: "15%", label: "Average Annual Returns" },
                  { value: "500+", label: "Wealth Advisors" },
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
              <Image
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Wealth Dashboard"
                width={600}
                height={700}
                className="mx-auto rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Wealth Management Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive wealth solutions tailored to high-net-worth individuals and families.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Investment Management",
                description: "Personalized investment portfolios managed by expert advisors with proven track records.",
                color: "from-green-400 to-emerald-600",
              },
              {
                icon: Shield,
                title: "Estate Planning",
                description: "Comprehensive estate planning strategies to preserve wealth for future generations.",
                color: "from-blue-400 to-cyan-600",
              },
              {
                icon: Calculator,
                title: "Tax Optimization",
                description: "Advanced tax strategies to minimize liability and maximize after-tax returns.",
                color: "from-purple-400 to-pink-600",
              },
              {
                icon: Crown,
                title: "Private Banking",
                description: "Exclusive banking services with dedicated relationship managers and concierge support.",
                color: "from-yellow-400 to-orange-600",
              },
              {
                icon: Globe,
                title: "Global Investments",
                description: "Access to international markets and exclusive investment opportunities worldwide.",
                color: "from-indigo-400 to-blue-600",
              },
              {
                icon: Briefcase,
                title: "Family Office Services",
                description: "Comprehensive wealth management for ultra-high-net-worth families and institutions.",
                color: "from-red-400 to-rose-600",
              },
            ].map((service, index) => (
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
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Tiers Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Investment Tiers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the wealth management tier that aligns with your financial goals and investment preferences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Wealth Builder",
                minimum: "₹25L",
                description: "For emerging high-net-worth individuals",
                features: [
                  "Dedicated wealth advisor",
                  "Customized investment portfolio",
                  "Quarterly portfolio reviews",
                  "Tax-efficient strategies",
                  "Estate planning basics",
                ],
                popular: false,
              },
              {
                name: "Private Client",
                minimum: "₹1Cr",
                description: "Comprehensive wealth management",
                features: [
                  "Senior wealth advisor team",
                  "Alternative investments access",
                  "Monthly portfolio reviews",
                  "Advanced tax planning",
                  "Trust and estate services",
                  "Concierge banking services",
                ],
                popular: true,
              },
              {
                name: "Family Office",
                minimum: "₹10Cr",
                description: "Ultra-high-net-worth solutions",
                features: [
                  "Dedicated family office team",
                  "Exclusive investment opportunities",
                  "Weekly portfolio monitoring",
                  "Multi-generational planning",
                  "Philanthropic advisory",
                  "Global investment access",
                ],
                popular: false,
              },
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative ${tier.popular ? "scale-105" : ""}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card
                  className={`h-full ${tier.popular ? "bg-gradient-to-b from-card to-muted border-primary" : "bg-card border-border"} hover:border-primary/20 transition-all duration-500`}
                >
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-foreground mb-2">{tier.minimum}</div>
                    <p className="text-muted-foreground mb-8">{tier.description}</p>
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${tier.popular ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" : "bg-gray-800 hover:bg-gray-700"}`}
                    >
                      Get Started
                    </Button>
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
