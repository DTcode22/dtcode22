import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { PatternBackground } from '@/components/pattern-background';

export default function Home() {
  return (
    <>
      <PatternBackground />
      <div className="relative min-h-screen px-6 md:px-12 py-16 md:py-24 max-w-3xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-20">
          <div />
          <ThemeToggle />
        </header>

        {/* Intro */}
        <section className="mb-24 space-y-4">
          <h1 className="text-3xl md:text-4xl">Dejan Turuntas</h1>
          <p className="text-muted-foreground text-lg">
            Full-stack developer, turning chaos into code.
          </p>
          <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
            <Link
              href="https://github.com/DTcode22"
              target="_blank"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/dejan-turuntas/"
              target="_blank"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
            <Link
              href="mailto:dejant999@gmail.com"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              Email
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/50 pt-8 pb-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dejan Turuntas</p>
        </footer>
      </div>
    </>
  );
}
