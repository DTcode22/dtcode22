import { ChevronRight } from 'lucide-react';
import { SkillBadgeWithIcons } from './skill-badge-with-icons';
import { skillsAndTools } from '@/data/skills';

export function SkillsSection() {
  return (
    <section id="skills-tools" className="scroll-mt-20 space-y-8">
      <div className="flex align-top">
        <ChevronRight
          height={42}
          width={32}
          className="not-sm:w-7 not-sm:h-10"
        ></ChevronRight>
        <h2 className="text-3xl font-bold not-sm:text-2xl">
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
    </section>
  );
}
