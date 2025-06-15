"use client"

import { useEffect } from "react"

export default function PerformanceMonitor() {
  useEffect(() => {
    // Measure and report Core Web Vitals
    const measureWebVitals = () => {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        console.log("LCP:", lastEntry.startTime)
      }).observe({ entryTypes: ["largest-contentful-paint"] })

      // First Input Delay (FID)
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          console.log("FID:", entry.processingStart - entry.startTime)
        })
      }).observe({ entryTypes: ["first-input"] })

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        console.log("CLS:", clsValue)
      }).observe({ entryTypes: ["layout-shift"] })
    }

    // Run after page load
    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        measureWebVitals()
      } else {
        window.addEventListener("load", measureWebVitals)
      }
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("load", measureWebVitals)
      }
    }
  }, [])

  return null
}
