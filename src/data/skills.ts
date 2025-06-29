export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export const skillsAndTools = [
  // Frontend & Frameworks
  { name: 'ReactJs', category: 'frontend' },
  { name: 'NextJs', category: 'frontend' },
  { name: 'Django', category: 'backend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind', category: 'frontend' },
  { name: 'Zustand', category: 'frontend' },

  // Libraries & Tools
  { name: 'Tanstack Query', category: 'frontend' },
  { name: 'shadcn', category: 'frontend' },
  { name: 'Motion', category: 'frontend' },
  { name: 'GSAP', category: 'frontend' },
  { name: 'NodeJS', category: 'backend' },
  { name: 'ExpressJS', category: 'backend' },
  { name: 'PostgreSQL', category: 'database' },

  // Databases & Backend
  { name: 'MongoDB', category: 'database' },
  { name: 'Redis', category: 'database' },
  { name: 'Prisma', category: 'backend' },
  { name: 'Postman', category: 'tools' },
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'Python', category: 'backend' },
  { name: 'Java', category: 'backend' },
  { name: 'C', category: 'backend' },

  // Development Tools
  { name: 'C++', category: 'backend' },
  { name: 'SQL', category: 'database' },
  { name: 'Docker', category: 'tools' },
  { name: 'Linux', category: 'tools' },
  { name: 'Vercel', category: 'tools' },
  { name: 'Figma', category: 'tools' },
];

export const technologies = {
  frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript'],
  backend: ['Node.js', 'Python', 'Express', 'FastAPI'],
  database: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
  tools: ['Docker', 'AWS', 'Git', 'Figma'],
};
