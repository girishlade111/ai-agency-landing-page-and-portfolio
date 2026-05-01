import type React from "react"
import type { Metadata } from "next"
import LandingPage from "@/components/landing-page"

export const metadata: Metadata = {
  title: "Automatic - AI-First Development Agency | Web Development & SaaS Solutions",
  description:
    "Premier AI-first development agency specializing in building high-quality web applications, SaaS platforms, marketplaces, and AI automation solutions. Transform your ideas into powerful digital products with our expert team.",
  keywords: [
    "AI-first development agency",
    "web development company",
    "SaaS development",
    "React development",
    "Next.js development",
    "TypeScript web development",
    "custom web applications",
    "marketplace development",
    "AI automation",
    "software development agency",
  ],
  openGraph: {
    title: "Automatic - AI-First Development Agency | Web Development & SaaS Solutions",
    description:
      "Premier AI-first development agency specializing in building high-quality web applications, SaaS platforms, marketplaces, and AI automation solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatic - AI-First Development Agency",
    description:
      "Premier AI-first development agency building high-quality web applications, SaaS platforms, marketplaces, and AI automation solutions.",
  },
  robots: {
    indexWith: true,
    followWith: true,
  },
}

export default function Home() {
  return <LandingPage />
}