'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { LeftSidebar } from '@/components/layout/left-sidebar';
import { RightSidebar } from '@/components/layout/right-sidebar';
import { AboutSection } from '@/components/sections/about-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { WritingsSection } from '@/components/sections/writings-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    // Scroll to top of main content when switching sections
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderMainContent = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'writings':
        return <WritingsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <div className="pt-16 flex">
        <LeftSidebar />

        <main className="w-full lg:w-[64vw] h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hidden flex justify-center">
          <div className="w-full max-w-7xl px-6 lg:px-24 md:px-12 pt-32">
            {renderMainContent()}
          </div>
        </main>

        <RightSidebar activeSection={activeSection} />
      </div>
    </div>
  );
}
