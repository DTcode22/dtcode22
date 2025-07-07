import Link from 'next/link';
import { ArrowRight, Code, BookOpen, Mail, User } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type SectionId = 'about' | 'projects' | 'writings' | 'contact';

interface SectionNavigatorProps {
  currentSection: SectionId;
  id: string;
}

const sections = [
  {
    id: 'about' as SectionId,
    title: 'About Me',
    href: '/',
    description: 'Learn more about my background and skills.',
    icon: <User className="w-8 h-8 text-primary" />,
  },
  {
    id: 'projects' as SectionId,
    title: 'Projects',
    href: '/projects',
    description: 'Explore a selection of my work.',
    icon: <Code className="w-8 h-8 text-primary" />,
  },
  {
    id: 'writings' as SectionId,
    title: 'Writings',
    href: '/writings',
    description: 'Read my thoughts on tech and development.',
    icon: <BookOpen className="w-8 h-8 text-primary" />,
  },
  {
    id: 'contact' as SectionId,
    title: 'Contact',
    href: '/contact',
    description: 'Get in touch for collaborations or a chat.',
    icon: <Mail className="w-8 h-8 text-primary" />,
  },
];

export function SectionNavigator({
  currentSection,
  id,
}: SectionNavigatorProps) {
  const otherSections = sections.filter(
    (section) => section.id !== currentSection
  );

  return (
    <section id={id} className="mt-32">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {otherSections.map((section) => (
          <Link key={section.id} href={section.href} passHref>
            <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between p-6 pb-2">
                {section.icon}
                <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-transform" />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6 pt-2">
                <CardTitle className="text-xl mb-2">{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
