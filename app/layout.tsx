import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import PageTransition from "@/components/page-transition"
import RouteProgress from "@/components/route-progress"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VAE DeFi - Top Tier Crypto Trading Infrastructure Firm",
  description:
    "Experience the future of banking with VAE Bank. Seamlessly manage your money across borders with cutting-edge security and innovative features designed for the digital age.",
  keywords:
    "digital banking, global banking, cryptocurrency, fintech, mobile banking, international transfers",
  authors: [{ name: "VAE Bank" }],
  openGraph: {
    title: "VAE Bank - Banking for a Changing World",
    description:
      "Experience the future of banking with cutting-edge security and innovative features.",
    type: "website",
    locale: "en_US",
  },
}

// ✅ Export viewport separately
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <RouteProgress />
          <Navigation />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
