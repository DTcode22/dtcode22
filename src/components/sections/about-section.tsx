import { Code, Palette, Smartphone, GraduationCap, Award, Coffee } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/skills"

export function AboutSection() {
  return (
    <div className="space-y-16">
      {/* Introduction */}
      <section id="introduction" className="scroll-mt-8 space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Hi, I'm <span className="text-primary">John Doe</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A passionate full-stack developer creating amazing digital experiences with modern technologies
          </p>
        </div>
      </section>

      {/* Background */}
      <section id="background" className="scroll-mt-8 space-y-8">
        <h2 className="text-3xl font-bold">Background</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I'm a passionate full-stack developer with over 5 years of experience building web applications. My
              journey started with a Computer Science degree, and I've been continuously learning and adapting to new
              technologies ever since.
            </p>
            <p className="text-muted-foreground">
              I specialize in creating efficient, scalable solutions that solve real-world problems. My approach
              combines technical expertise with user-centered design principles.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <GraduationCap className="w-5 h-5 mr-3 text-primary" />
              <span>Computer Science Graduate</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-3 text-primary" />
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center">
              <Coffee className="w-5 h-5 mr-3 text-primary" />
              <span>Coffee Enthusiast</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-8 space-y-8">
        <h2 className="text-3xl font-bold">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-8 space-y-8">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Senior Full Stack Developer</CardTitle>
              <CardDescription>Tech Company • 2022 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Led development of multiple web applications using React, Node.js, and AWS. Mentored junior developers
                and improved team productivity by 30%.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Team Leadership</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Full Stack Developer</CardTitle>
              <CardDescription>Startup Inc • 2020 - 2022</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Built and maintained e-commerce platform serving 10k+ users. Implemented CI/CD pipelines and reduced
                deployment time by 50%.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">CI/CD</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="scroll-mt-8 space-y-8 pb-16">
        <h2 className="text-3xl font-bold">My Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Clean Code</h3>
              <p className="text-sm text-muted-foreground">
                Writing maintainable, readable code that stands the test of time
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">User-Centered</h3>
              <p className="text-sm text-muted-foreground">
                Designing with the end user in mind, prioritizing experience and accessibility
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Mobile-First</h3>
              <p className="text-sm text-muted-foreground">
                Building responsive applications that work seamlessly across all devices
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
