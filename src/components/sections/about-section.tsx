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

export function AboutSection() {
  return (
    <div className="space-y-16">
      {/* Introduction */}
      <section id="introduction" className="scroll-mt-20 space-y-6 mb-32">
        <div className="text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Hey, I&apos;m{' '}
            <span className="text-primary">
              Dejan<span className="font-size:100px;">&#128075;</span>{' '}
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A full-stack developer, still figuring it out but making it look
            intentional
          </p>
        </div>
      </section>

      {/* Background */}
      <section id="background" className="scroll-mt-20 space-y-6">
        <div className="flex align-top">
          <ChevronRight height={42} width={32}></ChevronRight>
          <h2 className="text-3xl font-bold">whoami</h2>
        </div>
        <div className="">
          <div className="space-y-4">
            <p className="text-primary pl-8">
              - I&apos;m a full-stack web developer with a computer sciences
              background.
              <br />
              - I&apos;ve done freelance work and collaborated on projects
              <br />- Born in 1999, Based in Serbia/BiH, open to full-time and
              part-time roles as well as remote work. <br /> - I&apos;m flexible
              working with different tech stacks, though i prefer modern tools.
              <br />- Questionable sense of humor
              <br />- Creative chaos and organized perfectionism
            </p>
          </div>
        </div>
      </section>
      {/* Skills */}
      <section id="skills" className="scroll-mt-20 space-y-6">
        <div className="flex align-top">
          <ChevronRight height={42} width={32}></ChevronRight>
          <h2 className="text-3xl font-bold">credentials-manager</h2>
        </div>
        <div className="text-primary pl-8 flex flex-col">
          <div className="wrap">
            npx create-next-app@latest (--disable-git fixed-undocumented
            <a
              href="https://x.com/wired761/status/1936966124551426424"
              className="text-sky-400 underline"
              target="_blank"
            >
              {' '}
              see here
            </a>
            )
            <br />
          </div>
          <div className="wrap">
            npx shadcn@latest add --all (build errors unresolved{' '}
            <a
              href="https://github.com/shadcn-ui/ui/issues/5214"
              className="text-sky-400 underline"
              target="_blank"
            >
              {' '}
              see here
            </a>
            )
          </div>
          git init <br />
          git config user.name
          <br />
          <div className="wrap flex items-center  pl-16">
            <ChevronRight></ChevronRight>{' '}
            <a
              href="https://github.com/dtcode22"
              target="_blank"
              className="flex items-center gap-1 underline"
            >
              DTcode22
              <ExternalLink height={12} width={12}></ExternalLink>
            </a>
          </div>
          git config user.email
          <br />
          <div className="wrap flex items-center gap-1 pl-16">
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
          git remote set origin
          <div className="wrap flex items-center gap-1 pl-16">
            <ChevronRight></ChevronRight>
            <a
              href="https://github.com/supdiff/dtc-portfolio/commits/master/"
              target="_blank"
              className="flex items-center gap-1 underline"
            >
              https://github.com/supdiff/dtc-portfolio
              <ExternalLink height={12} width={12}></ExternalLink>
            </a>
          </div>
        </div>
      </section>
      {/* Experience */}
      <section id="experience" className="scroll-mt-20 space-y-8">
        <div className="flex align-top">
          <ChevronRight height={42} width={32}></ChevronRight>
          <h2 className="text-3xl font-bold">getWorkExperience&#40;&#41;</h2>
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
                storage for online e-commerce webshop app.
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Svelte.js</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Tailwind.css</Badge>
                <Badge variant="secondary">Firebase</Badge>
                <Badge variant="secondary">Firestore</Badge>
                <Badge variant="secondary">Auth</Badge>
                <Badge variant="secondary">Cloud Storage</Badge>
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
                Worked on freelancing websites for clients including designing,
                coding, hosting, deploying, domain, indexing and SEO
                optimisation. Utilized different frameworks including Astro.js
                and React/Next.js developing front-end and back-end solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">React.js</Badge>
                <Badge variant="secondary">JS</Badge>
                <Badge variant="secondary">TS</Badge>
                <Badge variant="secondary">Tailwind</Badge>
                <Badge variant="secondary">GSAP</Badge>
                <Badge variant="secondary">Motion</Badge>
                <Badge variant="secondary">Shadcn</Badge>
                <Badge variant="secondary">Figma</Badge>
                <Badge variant="secondary">Firebase</Badge>
                <Badge variant="secondary">Postman</Badge>
                <Badge variant="secondary">Netlify</Badge>
                <Badge variant="secondary">Vercel</Badge>
                <Badge variant="secondary">GSC</Badge>
                <Badge variant="secondary">Google Analytics</Badge>
                <Badge variant="secondary">Lighthouse</Badge>
                <Badge variant="secondary">Namescheap</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Philosophy */}
      <SkillsSection />
    </div>
  );
}
