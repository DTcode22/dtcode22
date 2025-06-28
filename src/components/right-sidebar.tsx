import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, TrendingUp } from 'lucide-react';

export function RightSidebar() {
  const recentPosts = [
    {
      title: 'Building Scalable React Applications',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
    },
    {
      title: "Next.js 15: What's New",
      date: 'Dec 10, 2024',
      readTime: '3 min read',
    },
    {
      title: 'TypeScript Best Practices',
      date: 'Dec 5, 2024',
      readTime: '7 min read',
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Happy Clients', value: '30+' },
  ];

  return (
    <aside className="hidden xl:block w-80 p-6 space-y-6">
      {/* Stats Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Quick Stats
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
                <Badge variant="secondary">{stat.value}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Blog Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
          <CardDescription>Latest from my blog</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-sm font-medium leading-tight hover:text-primary cursor-pointer">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
                {index < recentPosts.length - 1 && <hr className="my-3" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle>Get In Touch</CardTitle>
          <CardDescription>Let's discuss your next project</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" rows={3} />
            <Button className="w-full">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </aside>
  );
}
