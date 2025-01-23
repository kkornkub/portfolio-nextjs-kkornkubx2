"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const sections = ["about", "skills", "projects", "education", "experience", "fitness", "diet"]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border animate-fadeIn">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">kkornkubx2.dev</h1>
        <ul className="flex space-x-4 overflow-x-auto">
          {sections.map((section) => (
            <li key={section}>
              <Button
                variant="ghost"
                className={activeSection === section ? "bg-accent" : ""}
                onClick={() => {
                  document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

