import { Mail, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Contact() {
  return (
    <section id="contact" className="space-y-8 pb-20">
      <h2 className="text-3xl font-bold">Get In Touch</h2>
      <div className="max-w-2xl">
        <p className="text-muted-foreground mb-8">
          I&apos;m always interested in new opportunities and interesting
          projects. Let&apos;s connect and discuss how we can work together!
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">dejant999@gmail.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Twitter className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">X</h3>
              <p className="text-muted-foreground">https://x.com/wired761</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
