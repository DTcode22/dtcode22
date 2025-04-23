import projects from '@/data/projects';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsSection() {
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
              className="overflow-hidden bg-card hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              <div className="h-96">
                <div
                  className={`grid ${
                    project.media.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
                  } h-full`}
                >
                  {project.media.map((mediaItem, mediaIndex) => {
                    const isLocalImage = mediaItem.url.startsWith('images/');

                    return (
                      <div
                        key={mediaIndex}
                        className="relative overflow-hidden h-full"
                      >
                        {mediaItem.type === 'image' ? (
                          isLocalImage ? (
                            <div className="relative w-full h-full">
                              <img
                                src={`/${mediaItem.url}`}
                                alt={project.title}
                                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          ) : (
                            <img
                              src={mediaItem.url}
                              alt={project.title}
                              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                            />
                          )
                        ) : (
                          <video
                            src={mediaItem.url}
                            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                            autoPlay
                            loop
                            muted
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
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
                {project.features.length > 0 && (
                  <div className="space-y-2 mb-auto">
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
                )}
                {project.demoUrl && (
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button asChild className="w-full sm:w-auto">
                      <Link href={project.demoUrl} target="_blank">
                        <ExternalLink className="mr-2" />
                        View Demo
                      </Link>
                    </Button>
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        asChild
                        className="w-full sm:w-auto"
                      >
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
