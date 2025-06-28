export interface Writing {
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  featured: boolean
  url?: string
}

export const writings: Writing[] = [
  {
    title: "Building Scalable React Applications",
    excerpt:
      "Learn the best practices for structuring large React applications with proper state management, component architecture, and performance optimization techniques.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "Architecture", "Performance"],
    featured: true,
    url: "/blog/building-scalable-react-applications",
  },
  {
    title: "Next.js 14: What's New and Exciting",
    excerpt:
      "Explore the latest features in Next.js 14 including Server Components, improved routing, and enhanced developer experience.",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["Next.js", "Web Development", "JavaScript"],
    featured: true,
    url: "/blog/nextjs-14-features",
  },
  {
    title: "TypeScript Best Practices for 2024",
    excerpt:
      "A comprehensive guide to writing better TypeScript code with advanced types, utility types, and modern patterns.",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["TypeScript", "Best Practices", "Development"],
    featured: false,
    url: "/blog/typescript-best-practices-2024",
  },
  {
    title: "The Future of Web Development",
    excerpt:
      "Discussing emerging trends in web development including AI integration, edge computing, and the evolution of JavaScript frameworks.",
    date: "2023-12-28",
    readTime: "7 min read",
    tags: ["Web Development", "Trends", "Future"],
    featured: false,
    url: "/blog/future-of-web-development",
  },
  {
    title: "Optimizing Database Performance",
    excerpt:
      "Techniques for improving database query performance, indexing strategies, and scaling considerations for modern applications.",
    date: "2023-12-20",
    readTime: "12 min read",
    tags: ["Database", "Performance", "Backend"],
    featured: false,
    url: "/blog/optimizing-database-performance",
  },
]
