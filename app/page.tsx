'use client';

import { Github, Mail, Terminal } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectSection from '@/components/ProjectSection';
import skills from '@/data/skills';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-primary">DTcode22</h1>
          <p className="text-xl text-muted-foreground">
            Web Developer & Software Engineer
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://github.com/DTcode22"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:dejant999@gmail.com">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            Im a web developer with a Computer Science background with a passion
            for crafting immersive digital experiences. I build both compact,
            SEO-optimized websites using Astro and robust, full-featured
            applications with React and Next.js. My technical foundation
            includes Java, SQL, Firebase, PHP, and mobile app development
            experience. As a freelancer, I've crafted websites directly from
            Figma designs and from scratch, and I always dive into thorough
            documentation to ensure precision and quality in every project.
          </p>
        </Card>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            {Object.entries(skills).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <Card className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>
        <ProjectSection />

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-4">
            I'm open to joining innovative companies as well as collaborating on
            freelance projects. Whether you need a custom website, a full-scale
            web application, or a skilled developer to join your team, I'm here
            to help turn your ideas into reality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="mailto:dejant999@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="https://github.com/DTcode22"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
