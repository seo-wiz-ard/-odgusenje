// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle")
  const navMenu = document.getElementById("navMenu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")

      // Animate hamburger menu
      const spans = navToggle.querySelectorAll("span")
      if (navMenu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
        spans[1].style.opacity = "0"
        spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
      } else {
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active")
        const spans = navToggle.querySelectorAll("span")
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })
  })

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add fade-in animation to elements when they come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".service-card, .testimonial-card, .hero-content")
  animateElements.forEach((el) => {
    observer.observe(el)
  })

  // Phone number click tracking (for analytics)
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]')
  phoneLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // You can add analytics tracking here
      console.log("Phone number clicked:", this.href)
    })
  })

  // Email click tracking (for analytics)
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]')
  emailLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // You can add analytics tracking here
      console.log("Email clicked:", this.href)
    })
  })

  // Navbar background on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)"
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)"
    }
  })

  // Dropdown menu improvements for mobile
  const dropdowns = document.querySelectorAll(".dropdown")
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle")
    const menu = dropdown.querySelector(".dropdown-menu")

    if (window.innerWidth <= 768) {
      toggle.addEventListener("click", (e) => {
        e.preventDefault()
        menu.style.display = menu.style.display === "block" ? "none" : "block"
      })
    }
  })
})

// Performance optimization - lazy load images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('img[loading="lazy"]')

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src || img.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  }
})

// Contact form handling (if you add a contact form)
function handleContactForm(event) {
  event.preventDefault()

  // Get form data
  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData)

  // Here you would typically send the data to your server
  console.log("Contact form submitted:", data)

  // Show success message
  alert("Hvala vam na poruci! Kontaktiraćemo vas uskoro.")

  // Reset form
  event.target.reset()
}

// Add structured data for better SEO
function addStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: document.title,
    description: document.querySelector('meta[name="description"]').content,
    url: window.location.href,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Početna",
          item: window.location.origin,
        },
      ],
    },
  }

  const script = document.createElement("script")
  script.type = "application/ld+json"
  script.textContent = JSON.stringify(structuredData)
  document.head.appendChild(script)
}

// Initialize structured data
document.addEventListener("DOMContentLoaded", addStructuredData)
