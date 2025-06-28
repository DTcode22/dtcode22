"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TableOfContentsProps {
  activeSection: string
}

const sectionHeadings = {
  about: [
    { id: "introduction", title: "Introduction", level: 1 },
    { id: "background", title: "Background", level: 1 },
    { id: "skills", title: "Skills & Expertise", level: 1 },
    { id: "experience", title: "Experience", level: 1 },
    { id: "philosophy", title: "My Philosophy", level: 1 },
  ],
  projects: [
    { id: "featured-projects", title: "Featured Projects", level: 1 },
    { id: "other-projects", title: "Other Projects", level: 1 },
    { id: "technologies", title: "Technologies", level: 1 },
  ],
  writings: [
    { id: "writings-intro", title: "Introduction", level: 1 },
    { id: "featured-articles", title: "Featured Articles", level: 1 },
    { id: "recent-articles", title: "Recent Articles", level: 1 },
    { id: "topics", title: "Topics", level: 1 },
  ],
  contact: [
    { id: "contact-intro", title: "Introduction", level: 1 },
    { id: "contact-methods", title: "Contact Methods", level: 1 },
    { id: "contact-form", title: "Send Message", level: 1 },
    { id: "availability", title: "Availability", level: 1 },
  ],
}

export function RightSidebar({ activeSection }: TableOfContentsProps) {
  const [activeHeading, setActiveHeading] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const headings = sectionHeadings[activeSection as keyof typeof sectionHeadings] || []
      const scrollPosition = window.scrollY + 150

      for (let i = headings.length - 1; i >= 0; i--) {
        const element = document.getElementById(headings[i].id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveHeading(headings[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const scrollToHeading = (headingId: string) => {
    const element = document.getElementById(headingId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const currentHeadings = sectionHeadings[activeSection as keyof typeof sectionHeadings] || []

  return (
    <aside className="hidden lg:block w-[20vw] h-[calc(100vh-4rem)] bg-muted/30 p-6">
      <div className="sticky top-6 space-y-6">
        {/* Table of Contents */}
        {currentHeadings.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">On This Page</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {currentHeadings.map((heading) => (
                <button
                  key={heading.id}
                  onClick={() => scrollToHeading(heading.id)}
                  className={cn(
                    "block w-full text-left text-sm py-1 px-2 rounded transition-colors hover:bg-muted",
                    activeHeading === heading.id ? "text-primary font-medium bg-muted" : "text-muted-foreground",
                  )}
                >
                  {heading.title}
                </button>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Latest Blog Posts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Latest Posts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-sm mb-1 hover:text-primary cursor-pointer">
                Building Scalable React Apps
              </h4>
              <p className="text-xs text-muted-foreground">Jan 15, 2024</p>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-1 hover:text-primary cursor-pointer">Next.js 14 Features</h4>
              <p className="text-xs text-muted-foreground">Jan 10, 2024</p>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-1 hover:text-primary cursor-pointer">TypeScript Best Practices</h4>
              <p className="text-xs text-muted-foreground">Jan 5, 2024</p>
            </div>
          </CardContent>
        </Card>

        {/* Current Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Current Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">Available for work</span>
            </div>
            <p className="text-xs text-muted-foreground">Open to new opportunities and interesting projects</p>
          </CardContent>
        </Card>
      </div>
    </aside>
  )
}
