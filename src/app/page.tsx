'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { LeftSidebar } from '@/components/left-sidebar';
import { RightSidebar } from '@/components/right-sidebar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      <div className="pt-16 flex">
        <LeftSidebar />

        <main className="w-full lg:w-[60vw] h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hidden flex justify-center">
          <div className="w-full max-w-4xl px-6 lg:px-12 py-8 space-y-20">
            <Hero onNavigate={scrollToSection} />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </div>
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}
