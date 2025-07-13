import { ChevronRight, ExternalLink, MapPin } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SkillsSection } from '../shared/skills-section';
import { techStack, backendStack } from '@/data/badge';
import { SectionNavigator } from '../shared/section-navigator';

export function AboutSection() {
  return (
    <div className="space-y-16">
      <section id="introduction" className="scroll-mt-20 space-y-6 mb-32">
        <div className="text-center space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold flex flex-wrap justify-center items-center gap-x-4">
            <code className="tracking-tighter">Hello world,</code>
            <code className="tracking-tighter whitespace-nowrap">
              I&apos;m Dejan
              <span className="inline-block">&#128075;</span>
            </code>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A software engineer turning chaos into code
          </p>
        </div>
      </section>

      <section id="background" className="scroll-mt-20 space-y-6">
        <div className="flex align-top">
          <ChevronRight height={42} width={32}></ChevronRight>
          <h2 className="text-3xl font-bold not-sm:text-3xl">
            <code className="tracking-wider">whoami</code>
          </h2>
        </div>
        <div className="">
          <div className="space-y-4">
            <p className="text-primary pl-8">
              - I&apos;m a full-stack web developer with a computer sciences
              background.
              <br />
              - Born in 1999, Based in Serbia/BiH, open to full-time and
              part-time roles <br />
              - I&apos;m flexible working with different tech stacks, though I
              prefer modern tools.
              <br />
              - I&apos;ve done freelance work and collaborated on projects
              <br />- Questionable sense of humor
            </p>
          </div>
        </div>
      </section>
      <section id="skills" className="scroll-mt-20 space-y-6">
        <div className="flex align-top">
          <ChevronRight
            height={42}
            width={32}
            className="not-sm:w-7 not-sm:h-10"
          ></ChevronRight>
          <h2 className="text-3xl font-bold not-sm:text-2xl">
            <code className="tracking-tighter">credentials-manager</code>
          </h2>
        </div>
        <div className="text-primary pl-8 flex flex-col gap-1">
          <code>git init</code>

          <code>git config user.name</code>
          <div className="wrap flex items-center pb-2 pl-18 not-sm:pl-6">
            <ChevronRight></ChevronRight>
            <a
              href="https://github.com/dtcode22"
              target="_blank"
              className="flex items-center gap-1 underline"
            >
              DTcode22
              <ExternalLink height={12} width={12}></ExternalLink>
            </a>
          </div>
          <code>git config user.email</code>
          <div className="wrap flex items-center gap-1 pb-2 pl-18 not-sm:pl-6">
            <ChevronRight></ChevronRight>
            <a
              href="mailto:dejant999@gmail.com"
              target="_blank"
              className="flex items-center gap-1 underline"
            >
              dejant999@gmail.com
              <ExternalLink height={12} width={12}></ExternalLink>
            </a>
          </div>
          <code>git remote set origin</code>
          <div className="flex items-center gap-1 pb-2 pl-18 not-sm:pl-0">
            <ChevronRight className="not-sm:hidden"></ChevronRight>
            <a
              href="https://github.com/supdiff"
              target="_blank"
              className="flex items-center gap-1 underline"
            >
              https://github.com/supdiff/dtc-portfolio
              <ExternalLink
                height={12}
                width={12}
                className="not-sm:hidden"
              ></ExternalLink>
            </a>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-20 space-y-8">
        <div className="flex align-top">
          <ChevronRight
            height={42}
            width={32}
            className="not-sm:w-7 not-sm:h-10"
          ></ChevronRight>
          <h2 className="text-3xl font-bold not-sm:text-2xl">
            <code className="tracking-normal">getWorkExperience&#40;&#41;</code>
          </h2>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Full Stack Developer</CardTitle>
              <CardDescription>gastarbajter24 • 2024</CardDescription>
              <div className="wrap flex items-center gap-1 text-muted-foreground text-sm">
                <MapPin height={14} width={14}></MapPin>De • Remote
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-muted-foreground mb-4">
                Worked on a custom backend admin dashboard project in Svelte
                using Firebase for CRUD operations, authentication and file
                storage for online e-commerce webshop.
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="flex flex-wrap gap-2">
                  {backendStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Freelance Work</CardTitle>
              <CardDescription>Self Emp • 2023 - Present</CardDescription>
              <div className="wrap flex items-center gap-1 text-muted-foreground text-sm">
                <MapPin height={14} width={14}></MapPin>BiH • Srb • Remote
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Worked on freelance projects for clients including designing,
                coding, hosting, deploying, domain, indexing and SEO
                optimisation. Utilized different frameworks including Astro.js
                and React/Next.js developing front-end and back-end solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <SkillsSection />
      <SectionNavigator currentSection="about"></SectionNavigator>
    </div>
  );
}
