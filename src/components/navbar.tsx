'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-md border-b">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Mobile: Hamburger first */}
        <div className="flex items-center md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetTitle className="text-lg font-semibold mb-4">
                Navigation
              </SheetTitle>
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`text-left text-lg font-medium transition-colors hover:text-primary ${
                      activeSection === item.id
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Website name - centered on mobile, left on desktop */}
        <div className="font-bold text-xl md:flex-none flex-1 text-center md:text-left">
          Portfolio
        </div>

        {/* Centered Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
