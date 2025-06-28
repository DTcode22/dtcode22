import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    tech: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "AI Chat Bot",
    description: "An intelligent chatbot using OpenAI API and natural language processing",
    tech: ["Python", "OpenAI", "Flask", "React"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-video bg-muted"></div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {project.title}
                <ExternalLink className="w-4 h-4" />
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
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
  )
}
