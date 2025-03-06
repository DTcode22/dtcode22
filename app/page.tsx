'use client';

import { Github, Mail, Terminal } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectSection from '@/components/ProjectSection';
import skills from '@/data/skills';
export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Hero Section */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-primary">DTcode22</h1>
          <p className="text-xl text-muted-foreground">
            Full-Stack Developer & Software Engineer
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* About Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            Passionate software engineer with expertise in full-stack
            development, cloud architecture, and machine learning. Committed to
            creating efficient, scalable solutions that solve real-world
            problems.
          </p>
        </Card>

        {/* Skills Section */}
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
        {/* Project Section */}
        <ProjectSection />

        {/* Contact Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-4">
            Interested in collaboration? Let's connect and discuss your next
            project.
          </p>
          <div className="flex gap-4">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
