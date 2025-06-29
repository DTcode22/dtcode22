'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  activeSection: string;
}

const sectionHeadings = {
  about: [
    { id: 'introduction', title: 'Greetings', level: 1 },
    { id: 'background', title: 'Whoami', level: 1 },
    { id: 'skills', title: 'Tools', level: 1 },
    { id: 'experience', title: 'Experience', level: 1 },
    { id: 'philosophy', title: 'My Philosophy', level: 1 },
  ],
  projects: [
    { id: 'featured-projects', title: 'Featured Projects', level: 1 },
    { id: 'other-projects', title: 'Other Projects', level: 1 },
    { id: 'technologies', title: 'Technologies', level: 1 },
  ],
  writings: [
    { id: 'writings-intro', title: 'Introduction', level: 1 },
    { id: 'featured-articles', title: 'Featured Articles', level: 1 },
    { id: 'recent-articles', title: 'Recent Articles', level: 1 },
    { id: 'topics', title: 'Topics', level: 1 },
  ],
  contact: [
    { id: 'contact-intro', title: 'Introduction', level: 1 },
    { id: 'contact-methods', title: 'Contact Methods', level: 1 },
    { id: 'contact-form', title: 'Send Message', level: 1 },
    { id: 'availability', title: 'Availability', level: 1 },
  ],
};

export function RightSidebar({ activeSection }: TableOfContentsProps) {
  const [activeHeading, setActiveHeading] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const headings =
        sectionHeadings[activeSection as keyof typeof sectionHeadings] || [];
      if (headings.length === 0) return;

      const mainElement = document.querySelector('main');
      if (!mainElement) return;

      const headingElements = headings
        .map((heading) => {
          const element = document.getElementById(heading.id);
          if (!element) return null;

          const rect = element.getBoundingClientRect();
          const mainRect = mainElement.getBoundingClientRect();
          const relativeTop = rect.top - mainRect.top + mainElement.scrollTop;

          return {
            id: heading.id,
            offsetTop: relativeTop,
          };
        })
        .filter((h): h is { id: string; offsetTop: number } => h !== null);

      if (!headingElements.length) return;

      const offset = 150; // The point from the top of the viewport to trigger a heading change.
      const scrollPosition = mainElement.scrollTop;
      const maxScroll = mainElement.scrollHeight - mainElement.clientHeight;

      let currentActiveHeading = '';

      // Find the last heading that is above the scroll threshold.
      for (let i = headingElements.length - 1; i >= 0; i--) {
        if (headingElements[i].offsetTop <= scrollPosition + offset) {
          currentActiveHeading = headingElements[i].id;
          break;
        }
      }

      // If scrolled to the absolute bottom, the last heading is always active.
      // A small tolerance (e.g., 10px) is used to ensure it triggers.
      if (scrollPosition >= maxScroll - 10) {
        currentActiveHeading = headingElements[headingElements.length - 1].id;
      }

      // If no heading is active (i.e., we are at the very top, before the first heading),
      // default to the first one.
      if (!currentActiveHeading) {
        currentActiveHeading = headingElements[0].id;
      }

      setActiveHeading(currentActiveHeading);
    };

    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll, { passive: true });
      setTimeout(handleScroll, 100);
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeSection]);

  // Reset active heading when section changes
  useEffect(() => {
    const headings =
      sectionHeadings[activeSection as keyof typeof sectionHeadings] || [];
    if (headings.length > 0) {
      setActiveHeading(headings[0].id);
      // Give DOM time to update before trying to scroll to top
      setTimeout(() => {
        const mainElement = document.querySelector('main');
        mainElement?.scrollTo({ top: 0 });
      }, 0);
    }
  }, [activeSection]);

  const scrollToHeading = (headingId: string) => {
    const element = document.getElementById(headingId);
    const mainElement = document.querySelector('main');

    if (element && mainElement) {
      const rect = element.getBoundingClientRect();
      const mainRect = mainElement.getBoundingClientRect();
      const relativeTop = rect.top - mainRect.top + mainElement.scrollTop;

      mainElement.scrollTo({
        top: relativeTop - 100, // Adjusted offset for better scroll-to position
        behavior: 'smooth',
      });
    }
  };

  const currentHeadings =
    sectionHeadings[activeSection as keyof typeof sectionHeadings] || [];

  return (
    <aside className="hidden lg:block w-[18vw] h-[calc(100vh-4rem)] bg-muted/30 p-6">
      <div className="sticky top-6 space-y-6">
        {/* Table of Contents */}
        {currentHeadings.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">On This Page</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <div className="relative">
                {/* Progress indicator line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>

                {currentHeadings.map((heading) => (
                  <div key={heading.id} className="relative">
                    {/* Active indicator dot */}
                    <div
                      className={cn(
                        'absolute -left-[3px] top-3 w-1.5 h-1.5 rounded-full transition-all duration-200',
                        activeHeading === heading.id
                          ? 'bg-primary scale-125'
                          : 'bg-muted-foreground/30 scale-75'
                      )}
                    />

                    {/* Progress line for active section */}
                    {activeHeading === heading.id && (
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-primary"></div>
                    )}

                    <button
                      onClick={() => scrollToHeading(heading.id)}
                      className={cn(
                        'block w-full text-left text-sm py-2 pl-6 pr-2 rounded-r transition-all duration-200 hover:bg-muted/50',
                        activeHeading === heading.id
                          ? 'text-primary font-medium bg-primary/5'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      <span className="block truncate">{heading.title}</span>
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Latest Blog Posts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Latest Posts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-sm mb-1 hover:text-primary cursor-pointer transition-colors">
                Building Scalable React Apps
              </h4>
              <p className="text-xs text-muted-foreground">Jan 15, 2024</p>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-1 hover:text-primary cursor-pointer transition-colors">
                Next.js 14 Features
              </h4>
              <p className="text-xs text-muted-foreground">Jan 10, 2024</p>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-1 hover:text-primary cursor-pointer transition-colors">
                TypeScript Best Practices
              </h4>
              <p className="text-xs text-muted-foreground">Jan 5, 2024</p>
            </div>
          </CardContent>
        </Card>

        {/* Current Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Current Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium">Available for work</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Open to new opportunities and interesting projects
            </p>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
}
