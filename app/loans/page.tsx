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
                  Smart
                  <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    Loans
                  </span>
                </h1>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Turn your dreams into reality with our flexible loan options. From home loans to personal loans, get
                competitive interest rates starting from 8.5% per annum with quick approval.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                >
                  Apply for Loan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
                  EMI Calculator
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center space-x-8 pt-8">
                {[
                  { value: "8.5%", label: "Starting Interest Rate" },
                  { value: "24hrs", label: "Quick Approval" },
                  { value: "₹50L", label: "Max Loan Amount" },
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
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Loan Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive range of loan products designed for every need and life stage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Home Loans",
                description: "Fulfill your dream of owning a home with attractive interest rates and flexible tenure.",
                rate: "8.5% - 9.5% p.a.",
                maxAmount: "₹5 Crores",
                color: "from-blue-400 to-cyan-600",
              },
              {
                icon: Car,
                title: "Car Loans",
                description: "Drive your dream car with easy financing options and minimal documentation.",
                rate: "9.0% - 11.0% p.a.",
                maxAmount: "₹1 Crore",
                color: "from-green-400 to-emerald-600",
              },
              {
                icon: CreditCard,
                title: "Personal Loans",
                description: "Meet your personal financial needs with unsecured loans and quick disbursal.",
                rate: "10.5% - 18.0% p.a.",
                maxAmount: "₹50 Lakhs",
                color: "from-purple-400 to-pink-600",
              },
              {
                icon: GraduationCap,
                title: "Education Loans",
                description: "Invest in your future with education loans for higher studies in India and abroad.",
                rate: "9.5% - 12.0% p.a.",
                maxAmount: "₹1.5 Crores",
                color: "from-yellow-400 to-orange-600",
              },
              {
                icon: Building2,
                title: "Business Loans",
                description: "Grow your business with working capital and term loans at competitive rates.",
                rate: "11.0% - 16.0% p.a.",
                maxAmount: "₹10 Crores",
                color: "from-red-400 to-rose-600",
              },
              {
                icon: Calculator,
                title: "Loan Against Property",
                description: "Unlock the value of your property with loans against residential or commercial property.",
                rate: "9.0% - 12.0% p.a.",
                maxAmount: "₹5 Crores",
                color: "from-indigo-400 to-blue-600",
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
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Interest Rate:</span>
                        <span className="text-green-600 dark:text-green-400 font-semibold">{loan.rate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Max Amount:</span>
                        <span className="text-primary font-semibold">{loan.maxAmount}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-muted hover:bg-muted/80 text-foreground">Apply Now</Button>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Why Choose VAE Loans?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience hassle-free lending with competitive rates and customer-first approach.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quick Approval",
                description: "Get loan approval within 24 hours with minimal documentation",
                icon: "⚡",
              },
              {
                title: "Competitive Rates",
                description: "Enjoy some of the lowest interest rates in the market",
                icon: "💰",
              },
              {
                title: "Flexible Tenure",
                description: "Choose repayment tenure from 1 to 30 years based on your needs",
                icon: "📅",
              },
              {
                title: "Digital Process",
                description: "Complete loan application and documentation online",
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
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Ready to Apply?</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Get pre-approved for your loan in minutes. Our loan experts are here to help you choose the right loan for
              your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
                Apply Now
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted text-lg px-8 py-4 bg-transparent"
              >
                Calculate EMI
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
