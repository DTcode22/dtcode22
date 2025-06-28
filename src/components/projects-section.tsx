import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and PostgreSQL featuring real-time inventory management, payment processing, and admin dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking.",
    tech: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
  },
  {
    title: "AI Chat Bot",
    description:
      "An intelligent chatbot using OpenAI API and natural language processing with context awareness and multi-language support.",
    tech: ["Python", "OpenAI", "Flask", "React"],
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
    tech: ["Vue.js", "Express", "Weather API", "Chart.js"],
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="space-y-12">
      {/* Featured Projects */}
      <section id="featured-projects" className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section id="other-projects" className="space-y-8">
        <h2 className="text-3xl font-bold">Other Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  {project.title}
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="h-7 w-7">
                      <Github className="w-3 h-3" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-7 w-7">
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="space-y-8">
        <h2 className="text-3xl font-bold">Technologies I Use</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {["Frontend", "Backend", "Database", "Tools"].map((category, index) => (
            <Card key={category}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {index === 0 &&
                  ["React", "Next.js", "Vue.js", "TypeScript"].map((tech) => (
                    <Badge key={tech} variant="outline" className="mr-1 mb-1">
                      {tech}
                    </Badge>
                  ))}
                {index === 1 &&
                  ["Node.js", "Python", "Express", "FastAPI"].map((tech) => (
                    <Badge key={tech} variant="outline" className="mr-1 mb-1">
                      {tech}
                    </Badge>
                  ))}
                {index === 2 &&
                  ["PostgreSQL", "MongoDB", "Redis", "Firebase"].map((tech) => (
                    <Badge key={tech} variant="outline" className="mr-1 mb-1">
                      {tech}
                    </Badge>
                  ))}
                {index === 3 &&
                  ["Docker", "AWS", "Git", "Figma"].map((tech) => (
                    <Badge key={tech} variant="outline" className="mr-1 mb-1">
                      {tech}
                    </Badge>
                  ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
