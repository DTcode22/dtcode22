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
    title: 'Webcam Filter',
    description:
      'A Next.js application that transforms webcam input into a dynamic circle pattern effect. Features real-time video processing, adjustable parameters, camera switching, and video recording capabilities.',
    media: [
      {
        type: 'image',
        url: '/images/webcam.png',
      },
    ],
    tags: ['Next.js', 'TypeScript', 'React', 'Webcam API', 'Tailwind CSS'],
    demoUrl: 'https://webcamfilter.vercel.app/',
    githubUrl: 'https://github.com/DTcode22/webcamfilter',
    features: [
      'Real-time webcam video processing',
      'Dynamic circle pattern generation',
      'Adjustable circle size and spacing controls',
      'Front/back camera switching',
      'Video recording with download option',
    ],
  },
  {
    title: 'Panning CSS Demo',
    description:
      'A minimalist Astro project showcasing a visually striking hero section with animated background panning effects and a responsive layout. Features a dynamic header and footer with custom styling.',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&q=80&w=1920&h=1080',
      },
    ],
    tags: ['Astro', 'TypeScript', 'CSS Animations', 'PostCSS'],
    demoUrl: 'https://pancss.netlify.app/',
    githubUrl: 'https://github.com/DTcode22/PanningCSS',
    features: [
      'Animated hero section with panning background image',
      'Custom CSS overlay animation',
      'Optimized build with Astro framework',
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
