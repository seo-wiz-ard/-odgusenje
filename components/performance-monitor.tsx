"use client"

import { useEffect } from "react"

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return

    // Measure and report Core Web Vitals
    const measureWebVitals = () => {
      try {
        // Largest Contentful Paint (LCP)
        if ("PerformanceObserver" in window) {
          new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const lastEntry = entries[entries.length - 1]
            if (lastEntry && process.env.NODE_ENV === "development") {
              console.log("LCP:", lastEntry.startTime)
            }
          }).observe({ entryTypes: ["largest-contentful-paint"] })

          // First Input Delay (FID)
          new PerformanceObserver((list) => {
            const entries = list.getEntries()
            entries.forEach((entry: any) => {
              if (entry.processingStart && process.env.NODE_ENV === "development") {
                console.log("FID:", entry.processingStart - entry.startTime)
              }
            })
          }).observe({ entryTypes: ["first-input"] })

          // Cumulative Layout Shift (CLS)
          let clsValue = 0
          new PerformanceObserver((list) => {
            const entries = list.getEntries()
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value
              }
            })
            if (process.env.NODE_ENV === "development") {
              console.log("CLS:", clsValue)
            }
          }).observe({ entryTypes: ["layout-shift"] })
        }
      } catch (error) {
        // Silently fail if PerformanceObserver is not supported
        console.warn("Performance monitoring not supported in this browser")
      }
    }

    // Run after page load
    if (document.readyState === "complete") {
      measureWebVitals()
    } else {
      window.addEventListener("load", measureWebVitals)
    }

    return () => {
      window.removeEventListener("load", measureWebVitals)
    }
  }, [])

  return null
}
