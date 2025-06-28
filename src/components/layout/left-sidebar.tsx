import { Code, Github, Linkedin, Mail } from 'lucide-react';

export function LeftSidebar() {
  return (
    <aside className="hidden lg:block w-[18vw] h-[calc(100vh-4rem)] bg-muted/30 pt-12 px-6 pb-6">
      <div className="sticky top-6">
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Code className="w-12 h-12 text-primary" />
          </div>
          <h3 className="font-semibold text-lg">John Doe</h3>
          <p className="text-sm text-muted-foreground">Full Stack Developer</p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col items-center gap-2">
            <h4 className="font-medium mb-2">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center text-sm text-muted-foreground hover:text-primary"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
              <a
                href="#"
                className="flex items-center text-sm text-muted-foreground hover:text-primary"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
