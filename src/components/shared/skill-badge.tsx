import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  icon?: string;
  className?: string;
}

export function SkillBadge({ name, icon, className }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 px-4 py-3 rounded-lg border border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-200 hover:scale-105 hover:shadow-md min-w-fit',
        'backdrop-blur-sm',
        className
      )}
    >
      {icon && <span className="text-lg flex-shrink-0">{icon}</span>}
      <span className="text-sm font-medium whitespace-nowrap">{name}</span>
    </div>
  );
}
