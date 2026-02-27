import Link from 'next/link';
import Image from 'next/image';
import { Github, ExternalLink, Linkedin, Mail } from 'lucide-react';
import { projects, otherProjects } from '@/data/projects';
import { ThemeToggle } from '@/components/theme/theme-toggle';

export default function Home() {
  return (
    <div className="min-h-screen px-6 md:px-12 py-16 md:py-24 max-w-3xl mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between mb-20">
        <div />
        <ThemeToggle />
      </header>

      {/* Intro */}
      <section className="mb-24 space-y-4">
        <h1 className="text-3xl md:text-4xl">Dejan Turuntas</h1>
        <p className="text-muted-foreground text-lg">
          Full-stack developer, turning chaos into code.
        </p>
        <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
          <Link
            href="https://github.com/DTcode22"
            target="_blank"
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/dejan-turuntas/"
            target="_blank"
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Link>
          <Link
            href="mailto:dejant999@gmail.com"
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
            Email
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-24 space-y-10">
        <h2 className="text-xl tracking-wide text-muted-foreground">
          Projects
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <article key={index} className="space-y-4">
              <div className="relative aspect-[16/9] border overflow-hidden">
                <div
                  className={`grid ${
                    project.media.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
                  } absolute inset-0`}
                >
                  {project.media.map((mediaItem, mediaIndex) => (
                    <div
                      key={mediaIndex}
                      className="relative overflow-hidden h-full"
                    >
                      {mediaItem.type === 'image' ? (
                        <Image
                          src={mediaItem.url}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <video
                          src={mediaItem.url}
                          className="object-cover w-full h-full"
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

              <h3 className="text-xl">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground font-mono">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </div>

              <div className="flex items-center gap-6 text-sm">
                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Demo
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Source
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="mb-24 space-y-10">
          <h2 className="text-xl tracking-wide text-muted-foreground">
            Other Work
          </h2>

          <div className="space-y-10">
            {otherProjects.map((project, index) => (
              <article key={index} className="space-y-3">
                <h3 className="text-lg">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                {project.tags && (
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground font-mono">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
                {(project.demoUrl || project.githubUrl) && (
                  <div className="flex items-center gap-6 text-sm">
                    {project.demoUrl && (
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Demo
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-primary transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Source
                      </Link>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t pt-8 pb-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Dejan Turuntas</p>
      </footer>
    </div>
  );
}
