type MediaItem = {
  type: 'image' | 'video';
  url: string;
};
type Project = {
  title: string;
  description: string;
  media: MediaItem[];
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
};
const projects: Project[] = [
  {
    title: 'Laufer Driving School',
    description:
      'A modern, responsive website for a driving school featuring course information, online booking, and pricing information. Built with Astro for optimal performance and SEO optimization.',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2340&h=1200',
      },
    ],
    tags: ['Astro', 'JavaScript', 'GSAP', 'Framer Motion'],
    demoUrl: 'https://lauferkgdesign.netlify.app/',
    githubUrl: 'https://github.com/dtcode22/lauferkg',
    features: [
      'Interactive course catalog',
      'Online booking system',
      'Animated UI components',
      'Responsive design',
    ],
  },
  {
    title: 'AI Chat Application with OpenRouter',
    description:
      "A feature-rich chat application powered by OpenRouter's free AI models. Built with Next.js and TypeScript, it offers multiple chat sessions, model selection, document context uploading, and multimodal input support.",
    media: [
      {
        type: 'image',
        url: '/images/as2.PNG',
      },
    ],
    tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'OpenRouter API'],
    demoUrl: 'https://chatapp-ashen-omega.vercel.app/',
    githubUrl: 'https://github.com/dtcode22/dtcode22-chatapp',
    features: [
      'Create and manage multiple chat sessions',
      'Select from various AI models provided by OpenRouter',
      'Upload text documents to provide context for the AI',
      'Attach images to messages for multimodal models',
    ],
  },
  {
    title: 'Pattern Editor',
    description:
      'An interactive visual pattern generator with real-time parameter controls used for a costum android live wallpaper app. Features include video and json export, canvas resizing and zoom options.',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2340&h=1200',
      },
    ],
    tags: ['TypeScript', 'Next.js', 'Canvas', 'Math'],
    demoUrl: 'https://pattern-editor-zhrt.vercel.app/',
    githubUrl: 'https://github.com/dtcode22/pattern-editor',
    features: [
      'Real-time pattern generation',
      'Parameter controls with live preview',
      'Video export functionality',
      'Configuration import/export',
    ],
  },
  {
    title: 'Dynamic Pattern Live Wallpaper',
    description:
      'An Android live wallpaper that generates mesmerizing dynamic patterns with customizable parameters and multiple operational modes.',
    media: [
      { type: 'image', url: '/images/dynamic-pattern.gif' },
      { type: 'image', url: '/images/dynamic-pattern-static.jpg' },
    ],
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Live Wallpaper'],
    demoUrl: 'https://github.com/dtcode22/wpmod02',
    githubUrl: 'https://github.com/dtcode22/wpmod02',
    features: [],
  },
];

export default projects;
