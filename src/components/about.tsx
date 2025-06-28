import { Code, Palette, Smartphone } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="space-y-8">
      <h2 className="text-3xl font-bold flex items-center">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-muted-foreground mb-4">
            I'm a passionate full-stack developer with over 5 years of
            experience building web applications. I love creating efficient,
            scalable solutions and learning new technologies.
          </p>
          <p className="text-muted-foreground">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open source projects, or enjoying outdoor
            activities.
          </p>
        </div>
        <div className="space-y-4 flex flex-col justify-evenly items-center">
          <div className="flex items-center">
            <Code className="w-5 h-5 mr-3 text-primary" />
            <span>Clean, efficient code</span>
          </div>
          <div className="flex items-center">
            <Palette className="w-5 h-5 mr-3 text-primary" />
            <span>User-centered design</span>
          </div>
          <div className="flex items-center">
            <Smartphone className="w-5 h-5 mr-3 text-primary" />
            <span>Mobile-first approach</span>
          </div>
        </div>
      </div>
    </section>
  );
}
