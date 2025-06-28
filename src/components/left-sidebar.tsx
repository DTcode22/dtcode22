import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';

export function AppSidebar() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  const quickInfo = [
    { icon: MapPin, text: 'San Francisco, CA' },
    { icon: Calendar, text: 'Available for hire' },
  ];

  return (
    <Sidebar className="hidden lg:flex pt-16">
      <SidebarHeader className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src="/placeholder.svg?height=96&width=96"
              alt="Profile"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-muted-foreground">Full Stack Developer</p>
            <Badge variant="secondary" className="mt-2">
              Available
            </Badge>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Quick Info</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              {quickInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-sm"
                >
                  <item.icon className="w-4 h-4 text-muted-foreground" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Connect</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialLinks.map((link) => (
                <SidebarMenuItem key={link.label}>
                  <SidebarMenuButton asChild>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              <Button className="w-full" size="sm">
                Download Resume
              </Button>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                size="sm"
              >
                Schedule Call
              </Button>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
