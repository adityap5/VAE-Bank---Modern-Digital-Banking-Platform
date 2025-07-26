"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Users, Globe, Award, TrendingUp, Shield, Heart, Target, Lightbulb } from "lucide-react"
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

export default function AboutPage() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div className="page-transition min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-4 min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="About Xapo Bank"
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
                  About
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Xapo Bank
                  </span>
                </h1>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Founded in 2014, Xapo Bank has been at the forefront of digital banking innovation, serving millions of
                customers worldwide with secure, borderless financial services.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Join Our Mission
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-foreground hover:bg-gray-800 bg-transparent"
                >
                  Our Story
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Xapo Bank Team"
                width={600}
                height={700}
                className="mx-auto rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Our Mission & Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to democratizing access to financial services and empowering individuals and businesses to
              thrive in the digital economy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To provide secure, accessible, and innovative banking solutions that empower financial freedom for everyone, everywhere.",
                color: "from-blue-400 to-cyan-600",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "We continuously push the boundaries of financial technology to create better experiences for our customers.",
                color: "from-yellow-400 to-orange-600",
              },
              {
                icon: Shield,
                title: "Security",
                description:
                  "Your trust is our foundation. We employ the highest security standards to protect your financial assets.",
                color: "from-green-400 to-emerald-600",
              },
              {
                icon: Heart,
                title: "Customer First",
                description:
                  "Every decision we make is guided by what's best for our customers and their financial well-being.",
                color: "from-red-400 to-rose-600",
              },
              {
                icon: Globe,
                title: "Global Reach",
                description:
                  "We believe in a borderless world where financial services are accessible to everyone, regardless of location.",
                color: "from-purple-400 to-pink-600",
              },
              {
                icon: Users,
                title: "Transparency",
                description:
                  "We believe in honest, transparent communication and fair pricing with no hidden fees or surprises.",
                color: "from-indigo-400 to-blue-600",
              },
            ].map((value, index) => (
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
                      className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className="w-8 h-8 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation and excellence at Xapo Bank.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Arjun Mehta",
                role: "Chief Executive Officer",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Former Goldman Sachs executive with 15+ years in fintech innovation.",
              },
              {
                name: "Kavya Singh",
                role: "Chief Technology Officer",
                image:
                  "https://images.unsplash.com/photo-1494790108755-2616b9e0d9d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Tech visionary who previously led engineering teams at Google and Tesla.",
              },
              {
                name: "Rohit Sharma",
                role: "Chief Financial Officer",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Former McKinsey partner specializing in financial services transformation.",
              },
              {
                name: "Neha Gupta",
                role: "Chief Security Officer",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Cybersecurity expert with experience at NSA and leading security firms.",
              },
              {
                name: "Vikram Joshi",
                role: "Chief Marketing Officer",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Brand strategist who built marketing teams at Stripe and Square.",
              },
              {
                name: "Deepika Rao",
                role: "Chief Risk Officer",
                image:
                  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Risk management expert with 20+ years at JPMorgan and Deutsche Bank.",
              },
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-card border-border hover:border-primary/20 transition-all duration-500 overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{leader.name}</h3>
                    <p className="text-blue-400 font-semibold mb-4">{leader.role}</p>
                    <p className="text-muted-foreground leading-relaxed">{leader.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="py-32 bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Our Impact</h2>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              Numbers that reflect our commitment to serving customers worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "4M+", label: "Active Customers", icon: Users },
              { value: "₹50,000Cr+", label: "Assets Under Management", icon: TrendingUp },
              { value: "180+", label: "Countries Served", icon: Globe },
              { value: "99.9%", label: "Uptime Guarantee", icon: Award },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-10 h-10 text-foreground" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
