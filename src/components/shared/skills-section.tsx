import { SkillBadge } from './skill-badge';
import { skillsAndTools } from '@/data/skills';

export function SkillsSection() {
  // Group skills by rows for better visual organization
  const skillRows = [
    skillsAndTools.slice(0, 7), // First row: ReactJs, NextJs, Django, JavaScript, TypeScript, Tailwind, Zustand
    skillsAndTools.slice(7, 14), // Second row: Tanstack Query, shadcn, Motion, GSAP, NodeJS, ExpressJS, PostgreSQL
    skillsAndTools.slice(14, 23), // Third row: MongoDB, Redis, Prisma, Postman, Git, GitHub, Python, Java, C
    skillsAndTools.slice(23), // Fourth row: C++, SQL, Docker, Linux, Vercel, Figma
  ];

  return (
    <section id="skills-tools" className="scroll-mt-20 space-y-8 pb-42">
      <h2 className="text-3xl font-bold">Skills & Tools</h2>
      <div className="space-y-4">
        {skillRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-3">
            {row.map((skill, index) => (
              <SkillBadge
                key={`${rowIndex}-${index}`}
                name={skill.name}
                className="transition-all duration-200 hover:bg-primary/10 hover:border-primary/20"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Optional: Add a note about continuous learning */}
      <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border/50">
        <p className="text-sm text-muted-foreground text-center">
          Always learning and exploring new technologies to stay current with
          industry trends
        </p>
      </div>
    </section>
  );
}
