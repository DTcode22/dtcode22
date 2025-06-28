import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  featured?: boolean
  githubUrl?: string
  liveUrl?: string
}

export function ProjectCard({ title, description, tech, featured = false, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className={`overflow-hidden ${featured ? "group hover:shadow-lg transition-shadow" : ""}`}>
      {featured && (
        <div className="aspect-video bg-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
        </div>
      )}
      <CardHeader>
        <CardTitle className={`flex items-center justify-between ${featured ? "" : "text-lg"}`}>
          {title}
          <div className="flex gap-2">
            {githubUrl && (
              <Button size="icon" variant="ghost" className={featured ? "h-8 w-8" : "h-7 w-7"}>
                <Github className={featured ? "w-4 h-4" : "w-3 h-3"} />
              </Button>
            )}
            {liveUrl && (
              <Button size="icon" variant="ghost" className={featured ? "h-8 w-8" : "h-7 w-7"}>
                <ExternalLink className={featured ? "w-4 h-4" : "w-3 h-3"} />
              </Button>
            )}
          </div>
        </CardTitle>
        <CardDescription className={featured ? "text-sm leading-relaxed" : "text-sm"}>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tech.map((techItem) => (
            <Badge key={techItem} variant={featured ? "secondary" : "outline"} className={featured ? "" : "text-xs"}>
              {techItem}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
