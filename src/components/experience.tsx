import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <h2 className="text-3xl font-bold">Experience</h2>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Senior Full Stack Developer</CardTitle>
            <CardDescription>Tech Company • 2022 - Present</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Led development of multiple web applications using React, Node.js, and AWS. Mentored junior developers and
              improved team productivity by 30%.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Full Stack Developer</CardTitle>
            <CardDescription>Startup Inc • 2020 - 2022</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Built and maintained e-commerce platform serving 10k+ users. Implemented CI/CD pipelines and reduced
              deployment time by 50%.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
