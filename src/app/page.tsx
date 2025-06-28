import { AppSidebar } from '@/components/left-sidebar';
import { RightSidebar } from '@/components/right-sidebar';
import { MainContent } from '@/components/main-content';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SidebarProvider>
        <div className="flex">
          <AppSidebar />
          <SidebarInset className="flex-1">
            <div className="flex min-h-[calc(100vh-4rem)]">
              <MainContent />
              <RightSidebar />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
      <Footer />
    </div>
  );
}
