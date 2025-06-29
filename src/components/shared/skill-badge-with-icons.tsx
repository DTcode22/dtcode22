import type React from 'react';
import { cn } from '@/lib/utils';
import { Code2, GitBranch, Zap } from 'lucide-react';
import { FaReact, FaJava } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiShadcnui,
  SiFramer,
  SiPostman,
  SiFigma,
  SiGithub,
  SiPython,
  SiMysql,
  SiDocker,
  SiVercel,
  SiFirebase,
  SiLinux,
} from 'react-icons/si';
import { RiNodejsLine } from 'react-icons/ri';

interface SkillBadgeWithIconsProps {
  name: string;
  className?: string;
}

// Icon mapping for each technology
const iconMap: Record<string, React.ReactNode> = {
  ReactJs: <FaReact className="w-4 h-4 text-blue-400" />,
  NextJs: <SiNextdotjs className="w-4 h-4" />,
  JavaScript: <SiJavascript className="w-4 h-4 text-yellow-500" />,
  TypeScript: <SiTypescript className="w-4 h-4 text-blue-700" />,
  Tailwind: <SiTailwindcss className="w-4 h-4 text-cyan-500" />,
  Shadcn: <SiShadcnui className="w-4 h-4 text-gray-600" />,
  Motion: <SiFramer className="w-4 h-4 text-yellow-500" />,
  GSAP: <Zap className="w-4 h-4 text-green-500" />,
  NodeJS: <RiNodejsLine className="w-5 h-5 text-green-600" />,
  Firebase: <SiFirebase className="w-4 h-4 text-red-600" />,
  Postman: <SiPostman className="w-5 h-5 text-gray-600 dark:text-white" />,
  Git: <GitBranch className="w-4 h-4 text-orange-600" />,
  GitHub: <SiGithub className="w-4 h-4 text-gray-800 dark:text-white" />,
  Python: <SiPython className="w-4 h-4 text-blue-500" />,
  Java: <FaJava className="w-4 h-4 text-orange-600" />,
  SQL: <SiMysql className="w-4 h-4 text-blue-500" />,
  Docker: <SiDocker className="w-4 h-4 text-blue-600" />,
  Linux: <SiLinux className="w-4 h-4 text-yellow-600" />,
  Vercel: <SiVercel className="w-4 h-4 text-black dark:text-white" />,
  Figma: <SiFigma className="w-4 h-4 text-purple-500" />,
};

export function SkillBadgeWithIcons({
  name,
  className,
}: SkillBadgeWithIconsProps) {
  const icon = iconMap[name] || <Code2 className="w-4 h-4 text-gray-500" />;

  return (
    <div
      className={cn(
        'flex items-center gap-3 px-4 py-3 rounded-lg border border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-200 hover:scale-105 hover:shadow-md min-w-fit cursor-default',
        'backdrop-blur-sm',
        className
      )}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className="text-sm font-medium whitespace-nowrap">{name}</span>
    </div>
  );
}
