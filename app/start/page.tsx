import type React from "react"
import type { Metadata } from "next"
import LandingPage from "@/components/landing-page"

export const metadata: Metadata = {
  title: "Start Your Project - Automatic AI-First Development Agency",
  description:
    "Ready to start your next project? Contact Automatic, the premier AI-first development agency. Get a free consultation and project estimate for your web application, SaaS, or AI automation needs.",
  keywords: [
    "start project",
    "hire developers",
    "web development quote",
    "project estimate",
    "consultation",
    "custom web development",
    "SaaS development",
    "AI automation",
  ],
  openGraph: {
    title: "Start Your Project - Automatic AI-First Development Agency",
    description:
      "Ready to start your next project? Get a free consultation and project estimate for your web application, SaaS, or AI automation needs.",
    type: "website",
  },
  robots: {
    indexWith: true,
    followWith: true,
  },
}

export default function Start() {
  return <LandingPage showHeader />
}