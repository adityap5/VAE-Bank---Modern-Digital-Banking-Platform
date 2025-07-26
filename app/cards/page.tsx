"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CreditCard, Shield, Gift, Plane, ShoppingBag, Fuel } from "lucide-react"
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

export default function CardsPage() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div className="page-transition min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-4 min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Credit Cards India"
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
                  Premium
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Credit Cards
                  </span>
                </h1>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Experience the best of rewards, cashback, and exclusive privileges with our range of credit cards
                designed for Indian lifestyle. Earn up to 5% cashback on all purchases.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Apply for Card
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-foreground hover:bg-muted/80 bg-transparent"
                >
                  Compare Cards
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center space-x-12 pt-8">
                {[
                  { value: "5%", label: "Max Cashback" },
                  { value: "₹0", label: "Annual Fee*" },
                  { value: "24/7", label: "Customer Support" },
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
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Credit Card Collection"
                width={600}
                height={700}
                className="mx-auto rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cards Collection Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Our Card Collection</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect credit card that matches your lifestyle and spending patterns.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Xapo Cashback Card",
                type: "Cashback",
                annualFee: "₹0",
                cashback: "Up to 5%",
                features: ["5% on online shopping", "2% on dining", "1% on all other spends", "No annual fee"],
                color: "from-green-400 to-emerald-600",
                popular: false,
              },
              {
                name: "Xapo Travel Card",
                type: "Travel",
                annualFee: "₹2,999",
                cashback: "10X Rewards",
                features: [
                  "10X rewards on travel",
                  "Airport lounge access",
                  "Travel insurance",
                  "Foreign currency markup waiver",
                ],
                color: "from-blue-400 to-cyan-600",
                popular: true,
              },
              {
                name: "Xapo Premium Card",
                type: "Lifestyle",
                annualFee: "₹5,999",
                cashback: "15X Rewards",
                features: [
                  "15X rewards on premium brands",
                  "Concierge services",
                  "Golf privileges",
                  "Exclusive dining offers",
                ],
                color: "from-purple-400 to-pink-600",
                popular: false,
              },
              {
                name: "Xapo Business Card",
                type: "Business",
                annualFee: "₹1,999",
                cashback: "3X Rewards",
                features: [
                  "3X rewards on business spends",
                  "Expense management tools",
                  "Higher credit limits",
                  "GST invoice management",
                ],
                color: "from-orange-400 to-red-600",
                popular: false,
              },
              {
                name: "Xapo Fuel Card",
                type: "Fuel",
                annualFee: "₹499",
                cashback: "4% Cashback",
                features: ["4% cashback on fuel", "1% on all other spends", "Fuel surcharge waiver", "Low annual fee"],
                color: "from-yellow-400 to-orange-600",
                popular: false,
              },
              {
                name: "Xapo Student Card",
                type: "Student",
                annualFee: "₹0",
                cashback: "2% Cashback",
                features: [
                  "2% cashback on online spends",
                  "No annual fee for students",
                  "Build credit history",
                  "Educational discounts",
                ],
                color: "from-indigo-400 to-blue-600",
                popular: false,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative ${card.popular ? "scale-105" : ""}`}
              >
                {card.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card
                  className={`h-full ${card.popular ? "bg-gradient-to-b from-gray-900 to-gray-800 border-blue-500" : "bg-card border-border"} hover:border-primary/20 transition-all duration-500`}
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <CreditCard className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{card.name}</h3>
                    <p className="text-muted-foreground mb-4">{card.type} Card</p>
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <div className="text-sm text-muted-foreground">Annual Fee</div>
                        <div className="text-xl font-bold text-foreground">{card.annualFee}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Rewards</div>
                        <div className="text-xl font-bold text-green-400">{card.cashback}</div>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {card.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${card.popular ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" : "bg-muted hover:bg-muted/80"}`}
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Card Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enjoy exclusive benefits and rewards designed for Indian customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Gift,
                title: "Welcome Bonus",
                description: "Get up to ₹5,000 worth of reward points as welcome bonus on your first purchase.",
                color: "from-red-400 to-rose-600",
              },
              {
                icon: Plane,
                title: "Travel Benefits",
                description: "Complimentary airport lounge access, travel insurance, and foreign currency benefits.",
                color: "from-blue-400 to-cyan-600",
              },
              {
                icon: ShoppingBag,
                title: "Shopping Rewards",
                description: "Extra rewards on popular shopping platforms like Amazon, Flipkart, and BigBasket.",
                color: "from-purple-400 to-pink-600",
              },
              {
                icon: Fuel,
                title: "Fuel Surcharge Waiver",
                description: "Save on fuel costs with surcharge waiver at all petrol pumps across India.",
                color: "from-yellow-400 to-orange-600",
              },
              {
                icon: Shield,
                title: "Zero Liability Protection",
                description: "Complete protection against fraudulent transactions with our advanced security features.",
                color: "from-green-400 to-emerald-600",
              },
              {
                icon: CreditCard,
                title: "EMI Conversion",
                description: "Convert your big purchases into easy EMIs with attractive interest rates.",
                color: "from-indigo-400 to-blue-600",
              },
            ].map((benefit, index) => (
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
                      className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
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
