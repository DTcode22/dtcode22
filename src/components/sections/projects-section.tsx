import { SectionHeader } from "@/components/shared/section-header"
import { ProjectCard } from "@/components/shared/project-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"
import { technologies } from "@/data/skills"

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="space-y-16">
      {/* Header */}
      <section id="featured-projects" className="scroll-mt-8 space-y-8">
        <SectionHeader
          title="My Projects"
          subtitle="A showcase of my recent work and personal projects that demonstrate my skills and passion for development"
        />

        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              featured={true}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section id="other-projects" className="scroll-mt-8 space-y-8">
        <h2 className="text-3xl font-bold">Other Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              featured={false}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="scroll-mt-8 space-y-8 pb-16">
        <h2 className="text-3xl font-bold">Technologies I Use</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {Object.entries(technologies).map(([category, techs]) => (
            <Card key={category}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg capitalize">{category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {techs.map((tech) => (
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
