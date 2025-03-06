import projects from '@/data/projects';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function projectsSection() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <span className="mr-2">•</span>
                      {feature}
                    </div>
                  ))}
                </div>
                {project.demoUrl && (
                  <div className="flex gap-4 mt-6">
                    <Button asChild>
                      <Link href={project.demoUrl} target="_blank">
                        <ExternalLink className="mr-2" />
                        View Demo
                      </Link>
                    </Button>
                    {project.githubUrl && (
                      <Button variant="outline" asChild>
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="mr-2" />
                          Source Code
                        </Link>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
