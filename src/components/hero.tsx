"use client"

import { Button } from "@/components/ui/button"

interface HeroProps {
  onNavigate: (sectionId: string) => void
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="min-h-[80vh] flex items-center">
      <div className="max-w-4xl">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">John Doe</span>
        </h1>
        <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
          A passionate full-stack developer creating amazing digital experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" onClick={() => onNavigate("projects")}>
            View My Work
          </Button>
          <Button size="lg" variant="outline" onClick={() => onNavigate("contact")}>
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
