'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme/theme-toggle';

const navItems = [
  { id: '', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'writings', label: 'Writings' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-md border-b max-w-[1920px] m-auto">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetTitle className="text-lg font-semibold mb-4 mt-12 flex justify-center">
                Navigation
              </SheetTitle>
              <div className="flex flex-col items-center space-y-4 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.id === '' ? '/' : `/${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-left text-lg font-medium transition-colors hover:text-primary ${
                      activeSection === item.id
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="font-bold text-xl md:flex-none flex-1 text-center md:text-left">
          Portfolio
        </div>

        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id === '' ? '/' : `/${item.id}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
