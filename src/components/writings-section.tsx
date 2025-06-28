import { Calendar, Clock, ArrowRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const writings = [
  {
    title: 'Building Scalable React Applications',
    excerpt:
      'Learn the best practices for structuring large React applications with proper state management, component architecture, and performance optimization techniques.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'Architecture', 'Performance'],
    featured: true,
  },
  {
    title: "Next.js 14: What's New and Exciting",
    excerpt:
      'Explore the latest features in Next.js 14 including Server Components, improved routing, and enhanced developer experience.',
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['Next.js', 'Web Development', 'JavaScript'],
    featured: true,
  },
  {
    title: 'TypeScript Best Practices for 2024',
    excerpt:
      'A comprehensive guide to writing better TypeScript code with advanced types, utility types, and modern patterns.',
    date: '2024-01-05',
    readTime: '10 min read',
    tags: ['TypeScript', 'Best Practices', 'Development'],
    featured: false,
  },
  {
    title: 'The Future of Web Development',
    excerpt:
      'Discussing emerging trends in web development including AI integration, edge computing, and the evolution of JavaScript frameworks.',
    date: '2023-12-28',
    readTime: '7 min read',
    tags: ['Web Development', 'Trends', 'Future'],
    featured: false,
  },
  {
    title: 'Optimizing Database Performance',
    excerpt:
      'Techniques for improving database query performance, indexing strategies, and scaling considerations for modern applications.',
    date: '2023-12-20',
    readTime: '12 min read',
    tags: ['Database', 'Performance', 'Backend'],
    featured: false,
  },
];

export function WritingsSection() {
  const featuredWritings = writings.filter((w) => w.featured);
  const recentWritings = writings.filter((w) => !w.featured);

  return (
    <div className="space-y-16">
      {/* Header */}
      <section id="writings-intro" className="scroll-mt-8 space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold">My Writings</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about web development, technology
            trends, and software engineering
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="featured-articles" className="scroll-mt-8 space-y-8">
        <h2 className="text-3xl font-bold">Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredWritings.map((article, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group-hover:text-primary"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Articles */}
      <section id="recent-articles" className="scroll-mt-8 space-y-8">
        <h2 className="text-3xl font-bold">Recent Articles</h2>
        <div className="space-y-4">
          {recentWritings.map((article, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold hover:text-primary transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section id="topics" className="scroll-mt-8 space-y-8 pb-16">
        <h2 className="text-3xl font-bold">Topics I Write About</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Frontend Development</CardTitle>
              <CardDescription>
                React, Next.js, TypeScript, and modern frontend architectures
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Backend & APIs</CardTitle>
              <CardDescription>
                Node.js, databases, API design, and server-side development
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Developer Experience</CardTitle>
              <CardDescription>
                Tools, workflows, best practices, and productivity tips
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
}
