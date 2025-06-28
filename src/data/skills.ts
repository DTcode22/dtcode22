export interface Skill {
  name: string
  level: number
  category: "frontend" | "backend" | "database" | "tools"
}

export const skills: Skill[] = [
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Python", level: 70, category: "backend" },
  { name: "AWS", level: 65, category: "tools" },
]

export const technologies = {
  frontend: ["React", "Next.js", "Vue.js", "TypeScript"],
  backend: ["Node.js", "Python", "Express", "FastAPI"],
  database: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  tools: ["Docker", "AWS", "Git", "Figma"],
}
