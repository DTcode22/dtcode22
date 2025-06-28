import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export function MainContent() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description:
        'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration.',
      image: '/placeholder.svg?height=200&width=300',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates and team features.',
      image: '/placeholder.svg?height=200&width=300',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A responsive weather dashboard with location-based forecasts and interactive charts.',
      image: '/placeholder.svg?height=200&width=300',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Vue.js',
    'Node.js',
    'Python',
    'Django',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Docker',
    'Tailwind CSS',
    'Git',
    'REST APIs',
    'GraphQL',
  ];

  return (
    <main className="flex-1 p-6 space-y-8">
      {/* Hero Section */}
      <section id="home" className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Hi, I'm John Doe 👋
          </h1>
          <p className="text-xl text-muted-foreground">
            Full Stack Developer passionate about creating amazing web
            experiences
          </p>
        </div>
        <p className="text-lg leading-relaxed max-w-3xl">
          I'm a passionate full-stack developer with 5+ years of experience
          building scalable web applications. I love turning ideas into reality
          through clean, efficient code and thoughtful user experiences.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="space-y-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              I'm a dedicated software engineer who loves building innovative
              solutions that make a difference. With expertise in modern web
              technologies, I enjoy working on challenging projects that push
              the boundaries of what's possible on the web. When I'm not coding,
              you can find me exploring new technologies, contributing to open
              source projects, or sharing knowledge with the developer
              community.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section id="skills" className="space-y-4">
        <h2 className="text-3xl font-bold">Skills & Technologies</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-4">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
