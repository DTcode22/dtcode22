export interface Project {
  title: string
  description: string
  tech: string[]
  featured: boolean
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and PostgreSQL featuring real-time inventory management, payment processing, and admin dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    featured: true,
    githubUrl: "https://github.com/johndoe/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking.",
    tech: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
    featured: true,
    githubUrl: "https://github.com/johndoe/taskmanager",
    liveUrl: "https://taskmanager-demo.com",
  },
  {
    title: "AI Chat Bot",
    description:
      "An intelligent chatbot using OpenAI API and natural language processing with context awareness and multi-language support.",
    tech: ["Python", "OpenAI", "Flask", "React"],
    featured: false,
    githubUrl: "https://github.com/johndoe/ai-chatbot",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
    tech: ["Vue.js", "Express", "Weather API", "Chart.js"],
    featured: false,
    githubUrl: "https://github.com/johndoe/weather-dashboard",
    liveUrl: "https://weather-demo.com",
  },
]
