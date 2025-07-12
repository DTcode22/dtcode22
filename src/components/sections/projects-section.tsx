import Link from 'next/link';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { projects, otherProjects } from '@/data/projects';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SectionNavigator } from '../shared/section-navigator';

export function ProjectsSection() {
  return (
    <div className="space-y-16 pb-16">
      {/* Featured Projects Section */}
      <section id="featured-projects" className="scroll-mt-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              {/* Media Section */}
              <div className="relative aspect-video">
                <div
                  className={`grid ${
                    project.media.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
                  } absolute inset-0`}
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
                    <Button
                      asChild
                      variant={'demo'}
                      className="w-full h-9 sm:w-auto"
                    >
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
      </section>

      {/* Other Projects Section */}
      <section id="other-projects" className="scroll-mt-20 space-y-8">
        <h2 className="text-3xl font-bold">Other Notable Projects</h2>
        <div className="space-y-6">
          {otherProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
                {/* Optional Image */}
                {project.image && (
                  <div className="relative md:col-span-4 aspect-video md:aspect-auto h-full min-h-[150px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-fill md:rounded-l-lg md:rounded-r-none"
                    />
                  </div>
                )}
                {/* Content */}
                <div
                  className={`p-6 ${
                    project.image ? 'md:col-span-8' : 'md:col-span-12'
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {/* Action Buttons */}
                  {(project.demoUrl || project.githubUrl) && (
                    <div className="flex items-center gap-4 mt-4">
                      {project.demoUrl && (
                        <Button asChild size="sm" variant={'demo'}>
                          <Link href={project.demoUrl} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Demo
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" asChild size="sm">
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            Source Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <div className="scroll-mt-20">
        <SectionNavigator currentSection="projects" id="nav" />
      </div>
    </div>
  );
}
