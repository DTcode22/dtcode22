'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { LeftSidebar } from '@/components/left-sidebar';
import { RightSidebar } from '@/components/right-sidebar';
import { AboutSection } from '@/components/about-section';
import { ProjectsSection } from '@/components/projects-section';
import { WritingsSection } from '@/components/writings-section';
import { ContactSection } from '@/components/contact-section';

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

        <main className="w-full lg:w-[60vw] h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hide flex justify-center">
          <div className="w-full max-w-4xl px-6 lg:px-12 py-8">
            {renderMainContent()}
          </div>
        </main>

        <RightSidebar activeSection={activeSection} />
      </div>
    </div>
  );
}
