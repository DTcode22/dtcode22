import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function ContactSection() {
  return (
    <div className="space-y-32">
      {/* Header */}
      <section id="contact-intro" className="scroll-mt-20 space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I&apos;m always interested in new opportunities, interesting
            projects, and meaningful conversations. Let&apos;s connect and
            discuss how we can work together!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section id="contact-methods" className="scroll-mt-20 space-y-8">
        <h2 className="text-3xl font-bold">Contact Information</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground mb-3">
                john.doe@example.com
              </p>
              <Button variant="outline" size="sm">
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Linkedin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground mb-3">
                linkedin.com/in/johndoe
              </p>
              <Button variant="outline" size="sm">
                Connect
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Github className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-muted-foreground mb-3">
                github.com/johndoe
              </p>
              <Button variant="outline" size="sm">
                Follow
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground mb-3">
                San Francisco, CA
              </p>
              <Button variant="outline" size="sm">
                View Map
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="scroll-mt-20 space-y-8">
        <h2 className="text-3xl font-bold">Send Me a Message</h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Let&apos;s Start a Conversation</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this about?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or just say hello!"
                  rows={6}
                />
              </div>
              <Button className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Availability */}
      <section id="availability" className="scroll-mt-20 space-y-8">
        <h2 className="text-3xl font-bold">Current Availability</h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="font-semibold">
                    Available for new projects
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I&apos;m currently accepting new freelance projects and
                  full-time opportunities. Response time is typically within 24
                  hours.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
