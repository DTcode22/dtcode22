import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export function ProjectCard({
  title,
  description,
  tech,
  featured = false,
  githubUrl,
  liveUrl,
  image,
}: ProjectCardProps) {
  return (
    <Card
      className={`overflow-hidden flex flex-col h-full ${
        featured ? 'group hover:shadow-lg transition-shadow' : ''
      }`}
    >
      {/* Media Section */}
      {featured && image && (
        <div className="aspect-video bg-muted relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((techItem) => (
            <Badge key={techItem} variant="secondary">
              {techItem}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4">
          {liveUrl && (
            <Button asChild size="sm" className="w-full sm:w-auto">
              <Link href={liveUrl} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Demo
              </Link>
            </Button>
          )}
          {githubUrl && (
            <Button
              asChild
              className="bg-background/60 backdrop-blur-sm border border-border/50 hover:bg-background/80 w-full sm:w-auto"
            >
              <Link href={githubUrl} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
