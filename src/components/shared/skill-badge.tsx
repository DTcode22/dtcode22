import type React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
}

export function SkillBadge({
  name,
  icon,
  variant = 'secondary',
  className,
}: SkillBadgeProps) {
  return (
    <Badge
      variant={variant}
      className={cn(
        'flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all hover:scale-105 hover:shadow-md',
        'bg-muted/50 hover:bg-muted border border-border/50',
        className
      )}
    >
      {icon && (
        <span className="w-4 h-4 flex items-center justify-center">{icon}</span>
      )}
      {name}
    </Badge>
  );
}
