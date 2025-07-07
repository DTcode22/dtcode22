'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/layout/navbar';
import { LeftSidebar } from '@/components/layout/left-sidebar';
import { RightSidebar } from '@/components/layout/right-sidebar';

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // If pathname is '/', the section is 'about'. Otherwise, extract from path.
  const activeSection = pathname === '/' ? 'about' : pathname.substring(1);

  return (
    <div className="min-h-screen bg-background max-w-screen-2xl m-auto">
      <Navbar activeSection={activeSection} />

      <div className="pt-16 flex">
        <LeftSidebar />

        <main className="w-full lg:w-[64vw] h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hidden flex justify-center">
          <div className="w-full max-w-7xl px-6 lg:px-24 md:px-12 pt-32">
            {children}
          </div>
        </main>

        <RightSidebar activeSection={activeSection} />
      </div>
    </div>
  );
}
