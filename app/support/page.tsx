"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Shield,
  HelpCircle,
  Book,
  Video,
  ChevronDown,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useRef, useState } from "react"

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

export default function SupportPage() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "How do I open an account with Xapo Bank?",
      answer:
        "Opening an account is simple and can be done entirely online. Visit our website, click 'Open Account', and follow the step-by-step process. You'll need a valid ID and proof of address. The entire process typically takes 5-10 minutes.",
    },
    {
      question: "What are your fees and charges?",
      answer:
        "We believe in transparent pricing. Our Essential account is completely free with no monthly fees. Premium accounts have a monthly fee of $15, and Private accounts are $50/month. We don't charge for standard transactions, and international transfers have competitive rates.",
    },
    {
      question: "Is my money safe with Xapo Bank?",
      answer:
        "Absolutely. Your deposits are protected by government deposit insurance up to applicable limits. We use military-grade encryption, multi-factor authentication, and maintain the highest security standards in the industry.",
    },
    {
      question: "Can I use Xapo Bank internationally?",
      answer:
        "Yes! Xapo Bank is designed for global use. You can access your account from anywhere in the world, make international transfers, and use your card in over 180 countries with competitive exchange rates.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "We offer 24/7 customer support through multiple channels: live chat on our website and mobile app, phone support, email, and in-app messaging. Premium and Private account holders get priority support.",
    },
    {
      question: "What mobile apps do you offer?",
      answer:
        "We have award-winning mobile apps for both iOS and Android. The apps offer full banking functionality including account management, transfers, bill pay, investment tracking, and customer support.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground page-transition">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-4 min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
          <Image
            src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Customer Support"
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
                  We're Here to
                  <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    Help You
                  </span>
                </h1>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Get the support you need, when you need it. Our dedicated team is available 24/7 to help you with any
                questions or concerns about your Xapo Bank experience.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                >
                  Start Live Chat
                  <MessageCircle className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-foreground hover:bg-gray-800 bg-transparent"
                >
                  Call Support
                  <Phone className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center space-x-12 pt-8">
                {[
                  { value: "24/7", label: "Support Available" },
                  { value: "<2min", label: "Average Response" },
                  { value: "98%", label: "Satisfaction Rate" },
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
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Customer Support Team"
                width={600}
                height={700}
                className="mx-auto rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the support method that works best for you. We're here to help 24/7.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Instant support through our website and mobile app",
                availability: "24/7 Available",
                color: "from-green-400 to-emerald-600",
              },
              {
                icon: Phone,
                title: "Phone Support",
                description: "Speak directly with our support specialists",
                availability: "24/7 Available",
                color: "from-blue-400 to-cyan-600",
              },
              {
                icon: Mail,
                title: "Email Support",
                description: "Send us detailed questions and get comprehensive answers",
                availability: "Response within 2 hours",
                color: "from-purple-400 to-pink-600",
              },
              {
                icon: Video,
                title: "Video Call",
                description: "Schedule a video consultation with our experts",
                availability: "Business hours",
                color: "from-yellow-400 to-orange-600",
              },
            ].map((method, index) => (
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
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{method.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{method.description}</p>
                    <div className="text-sm text-green-400 font-semibold">{method.availability}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find quick answers to the most common questions about Xapo Bank services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-300"
                    >
                      <h3 className="text-xl font-semibold text-foreground pr-4">{faq.question}</h3>
                      <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      </motion.div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? "auto" : 0,
                        opacity: openFaq === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-muted-foreground leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Resources Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Self-Service Resources</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive help center and learning resources.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Book,
                title: "Help Center",
                description: "Comprehensive guides and tutorials for all Xapo Bank features",
                articles: "200+ Articles",
                color: "from-blue-400 to-cyan-600",
              },
              {
                icon: Video,
                title: "Video Tutorials",
                description: "Step-by-step video guides for common banking tasks",
                articles: "50+ Videos",
                color: "from-red-400 to-rose-600",
              },
              {
                icon: HelpCircle,
                title: "Community Forum",
                description: "Connect with other users and get answers from the community",
                articles: "Active Community",
                color: "from-green-400 to-emerald-600",
              },
            ].map((resource, index) => (
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
                      className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <resource.icon className="w-8 h-8 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{resource.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{resource.description}</p>
                    <div className="text-sm text-blue-400 font-semibold mb-6">{resource.articles}</div>
                    <Button className="w-full bg-gray-800 hover:bg-gray-700">
                      Explore
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-32 bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-6xl font-bold text-foreground mb-8">Still Need Help?</h2>
            <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
              Our support team is standing by to assist you with any questions or concerns. Get personalized help from
              our banking experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100 text-lg px-8 py-4">
                Contact Support Now
                <MessageCircle className="ml-2 w-6 h-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-900 bg-transparent text-lg px-8 py-4"
              >
                Schedule Call
                <Phone className="ml-2 w-6 h-6" />
              </Button>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-foreground mx-auto mb-4" />
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-muted-foreground">Always Available</div>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-foreground mx-auto mb-4" />
                <div className="text-2xl font-bold text-foreground">Secure</div>
                <div className="text-muted-foreground">Protected Communication</div>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-foreground mx-auto mb-4" />
                <div className="text-2xl font-bold text-foreground">Expert</div>
                <div className="text-muted-foreground">Trained Specialists</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
