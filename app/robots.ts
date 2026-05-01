import type React from "react"
import type { Metadata } from "next"
import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "",
    },
    sitemap: "https://automatic-three.vercel.app/sitemap.xml",
  }
}