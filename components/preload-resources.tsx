"use client"

import { useEffect } from "react"

export default function PreloadResources() {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=300&width=400",
    ]

    criticalImages.forEach((src) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "image"
      link.href = src
      document.head.appendChild(link)
    })

    // Preload critical fonts
    const criticalFonts = ["https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"]

    criticalFonts.forEach((href) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "style"
      link.href = href
      link.onload = () => {
        link.rel = "stylesheet"
      }
      document.head.appendChild(link)
    })

    // DNS prefetch for external resources
    const dnsPrefetchDomains = ["fonts.googleapis.com", "fonts.gstatic.com", "www.google.com"]

    dnsPrefetchDomains.forEach((domain) => {
      const link = document.createElement("link")
      link.rel = "dns-prefetch"
      link.href = `//${domain}`
      document.head.appendChild(link)
    })
  }, [])

  return null
}
