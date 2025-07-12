import { Github, LinkedinIcon, Mail } from 'lucide-react';
import Image from 'next/image';

export function LeftSidebar() {
  return (
    <aside className="hidden lg:block w-[18vw] h-[calc(100vh-4rem)] bg-muted/30 pt-12 px-6 pb-6">
      <div className="sticky top-6">
        <div className="text-center mb-6">
          <div className="w-44 h-44 bg-primary/10 mx-auto mb-4 flex items-center justify-center">
            <Image src="/ghibli.png" alt="me" height={176} width={176}></Image>
          </div>
          <h3 className="font-semibold text-lg">DTcode22</h3>
          <p className="text-sm text-muted-foreground">Full Stack Developer</p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col items-center gap-2">
            <h4 className="font-medium mb-2">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="https://github.com/DTcode22"
                className="flex items-center text-sm text-muted-foreground hover:text-primary"
                target="_blank"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dejan-turuntas/"
                className="flex items-center text-sm text-muted-foreground hover:text-primary"
                target="_blank"
              >
                <LinkedinIcon className="w-4 h-4 mr-2" />
                Linkedin
              </a>
              <a
                href="mailto:dejant999@gmail.com"
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
