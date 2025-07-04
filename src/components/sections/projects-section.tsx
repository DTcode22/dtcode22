import Link from 'next/link';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function ProjectsSection() {
  return (
    <div className="space-y-16">
      <h2 className="text-4xl font-bold text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-32">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden bg-card hover:shadow-lg transition-shadow flex flex-col h-full"
          >
            {/* Media Section */}
            <div className="h-96">
              <div
                className={`grid ${
                  project.media.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
                } h-full`}
              >
                {project.media.map((mediaItem, mediaIndex) => (
                  <div
                    key={mediaIndex}
                    className="relative overflow-hidden h-full group"
                  >
                    {mediaItem.type === 'image' ? (
                      <Image
                        src={mediaItem.url}
                        alt={project.title}
                        fill
                        object-cover="true"
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <video
                        src={mediaItem.url}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
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

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto pt-4">
                {project.demoUrl && (
                  <Button asChild className="w-full h-9 sm:w-auto">
                    <Link href={project.demoUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Demo
                    </Link>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    asChild
                    className="w-full sm:w-auto"
                  >
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
