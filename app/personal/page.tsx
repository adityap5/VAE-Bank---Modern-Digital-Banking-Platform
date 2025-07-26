"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Shield, CreditCard, Zap, PiggyBank, Wallet, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useRef } from "react"

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

export default function PersonalPage() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <div className="min-h-screen bg-background text-foreground page-transition">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-4 min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Personal Banking"
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
                  Personal Banking
                  <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    Reimagined
                  </span>
                </h1>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Experience banking that adapts to your lifestyle. From everyday transactions to long-term savings,
                manage your personal finances with tools designed for the modern world.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                >
                  Open Personal Account
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
                  Compare Accounts
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Personal Banking App"
                width={600}
                height={700}
                className="mx-auto rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Personal Banking Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage your personal finances, all in one place.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wallet,
                title: "Smart Checking",
                description: "No monthly fees, unlimited transactions, and instant notifications for every purchase.",
                color: "from-green-400 to-emerald-600",
              },
              {
                icon: PiggyBank,
                title: "High-Yield Savings",
                description: "Earn competitive interest rates with automatic savings goals and round-up features.",
                color: "from-blue-400 to-cyan-600",
              },
              {
                icon: CreditCard,
                title: "Premium Cards",
                description: "Metal cards with cashback rewards, travel benefits, and worldwide acceptance.",
                color: "from-purple-400 to-pink-600",
              },
              {
                icon: Zap,
                title: "Instant Transfers",
                description: "Send money to friends and family instantly with just their phone number or email.",
                color: "from-yellow-400 to-orange-600",
              },
              {
                icon: BarChart3,
                title: "Spending Insights",
                description: "AI-powered analytics to help you understand and optimize your spending habits.",
                color: "from-indigo-400 to-blue-600",
              },
              {
                icon: Shield,
                title: "Advanced Security",
                description: "Biometric authentication, real-time fraud monitoring, and instant card controls.",
                color: "from-red-400 to-rose-600",
              },
            ].map((feature, index) => (
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
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Types Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Choose Your Account</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the personal banking package that fits your lifestyle and financial goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                price: "Free",
                description: "Perfect for everyday banking needs",
                features: [
                  "Free checking account",
                  "Debit card included",
                  "Mobile banking",
                  "ATM fee reimbursement",
                  "24/7 customer support",
                ],
                popular: false,
              },
              {
                name: "Premium",
                price: "₹999/month",
                description: "Enhanced features for active users",
                features: [
                  "Everything in Essential",
                  "High-yield savings account",
                  "Premium metal card",
                  "Investment tools",
                  "Priority customer support",
                  "Travel insurance",
                ],
                popular: true,
              },
              {
                name: "Private",
                price: "₹2,999/month",
                description: "Exclusive banking for high-net-worth individuals",
                features: [
                  "Everything in Premium",
                  "Dedicated relationship manager",
                  "Exclusive investment opportunities",
                  "Concierge services",
                  "Private banking perks",
                  "Custom financial planning",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative ${plan.popular ? "scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-blue-600 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card
                  className={`h-full ${plan.popular ? "bg-gradient-to-b from-card to-muted border-primary" : "bg-card border-border"} hover:border-primary/20 transition-all duration-300`}
                >
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-foreground mb-2">{plan.price}</div>
                    <p className="text-muted-foreground mb-8">{plan.description}</p>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${plan.popular ? "bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90" : "bg-muted hover:bg-muted/80"}`}
                    >
                      Choose {plan.name}
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
