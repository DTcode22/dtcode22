import { ChevronRight } from 'lucide-react';
import { SkillBadgeWithIcons } from './skill-badge-with-icons';
import { skillsAndTools } from '@/data/skills';

export function SkillsSection() {
  return (
    <section id="skills-tools" className="scroll-mt-20 space-y-8">
      <div className="flex align-top">
        <ChevronRight height={42} width={32}></ChevronRight>
        <h2 className="text-3xl font-bold">
          <code className="tracking-tight">devDependencies</code>
        </h2>
      </div>

      {/* Skills grid - flexible layout that wraps naturally */}
      <div className="flex flex-wrap gap-3">
        {skillsAndTools.map((skill, index) => (
          <SkillBadgeWithIcons
            key={index}
            name={skill.name}
            className="hover:border-primary/30 hover:bg-primary/5"
          />
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
