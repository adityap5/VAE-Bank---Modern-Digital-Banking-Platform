"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Building2, Globe, CreditCard, BarChart3, Calculator, FileText } from "lucide-react"
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

export default function BusinessPage() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div className="min-h-screen bg-background text-foreground page-transition">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-4 min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Business Banking"
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
                  Business Banking
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </h1>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Empower your business with comprehensive banking solutions. From startups to enterprises, we provide the
                financial tools you need to grow and succeed in the global marketplace.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Open Business Account
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-foreground hover:bg-gray-800 bg-transparent"
                >
                  Schedule Consultation
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center space-x-12 pt-8">
                {[
                  { value: "50K+", label: "Business Clients" },
                  { value: "₹25,000Cr+", label: "Business Loans" },
                  { value: "99.9%", label: "Uptime" },
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
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Business Dashboard"
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
            <h2 className="text-5xl font-bold text-foreground mb-6">Business Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive financial services designed to support your business at every stage of growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Business Accounts",
                description: "Flexible checking and savings accounts with competitive rates and no hidden fees.",
                color: "from-blue-400 to-cyan-600",
              },
              {
                icon: CreditCard,
                title: "Corporate Cards",
                description: "Expense management made easy with corporate credit cards and spending controls.",
                color: "from-green-400 to-emerald-600",
              },
              {
                icon: Calculator,
                title: "Business Loans",
                description: "Flexible financing options to fuel your business growth and expansion plans.",
                color: "from-purple-400 to-pink-600",
              },
              {
                icon: Globe,
                title: "International Trade",
                description: "Global payment solutions, foreign exchange, and trade finance services.",
                color: "from-yellow-400 to-orange-600",
              },
              {
                icon: BarChart3,
                title: "Cash Management",
                description: "Optimize your cash flow with automated solutions and real-time reporting.",
                color: "from-indigo-400 to-blue-600",
              },
              {
                icon: FileText,
                title: "Payroll Services",
                description: "Streamlined payroll processing with tax compliance and employee benefits.",
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

      {/* Business Sizes Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Solutions for Every Business Size</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startups to large enterprises, we have tailored solutions for your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Startups & Small Business",
                description: "Get started with essential banking services",
                features: [
                  "Free business checking",
                  "Mobile banking app",
                  "Payment processing",
                  "Basic lending options",
                  "24/7 online support",
                ],
                image:
                  "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              },
              {
                title: "Growing Companies",
                description: "Scale your operations with advanced tools",
                features: [
                  "Multiple account types",
                  "Advanced cash management",
                  "Corporate credit cards",
                  "International services",
                  "Dedicated relationship manager",
                ],
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              },
              {
                title: "Large Enterprises",
                description: "Comprehensive solutions for complex needs",
                features: [
                  "Custom banking solutions",
                  "Treasury management",
                  "Investment banking",
                  "Risk management",
                  "Global banking network",
                ],
                image:
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-card border-border hover:border-primary/20 transition-all duration-500 overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{solution.title}</h3>
                    <p className="text-muted-foreground mb-6">{solution.description}</p>
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Learn More
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
