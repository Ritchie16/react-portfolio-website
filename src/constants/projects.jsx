// src/constants/projects.jsx
const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product management, shopping cart, and secure payment integration. Built with modern web technologies for optimal performance and user experience.",
    image: "/bg1.jpeg",
    tools: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS", "Stripe API"],
    is_public: true,
    github_url: "https://github.com/username/ecommerce-platform",
    live_demo: "https://ecommerce-demo.vercel.app",
    category: "Full Stack",
    featured: true
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with dark/light mode, smooth animations, and optimized performance. Built with React and Framer Motion for engaging user interactions.",
    image: "/bg2.jpeg",
    tools: ["React", "Framer Motion", "TailwindCSS", "Vite", "React Icons"],
    is_public: true,
    github_url: "https://github.com/username/portfolio",
    live_demo: "https://myportfolio.vercel.app",
    category: "Frontend",
    featured: true
  },
  {
    id: 3,
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and progress tracking.",
    image: "/bg1.jpeg",
    tools: ["React", "Firebase", "Material-UI", "React DnD", "Context API"],
    is_public: true,
    github_url: "https://github.com/username/task-manager",
    live_demo: "https://taskapp-demo.netlify.app",
    category: "Web App",
    featured: false
  },
  {
    id: 4,
    name: "Weather Dashboard",
    description: "A weather forecasting application with location detection, 7-day forecasts, historical data, and interactive maps. Features beautiful visualizations and responsive design.",
    image: "/bg2.jpeg",
    tools: ["React", "Weather API", "Chart.js", "Leaflet Maps", "Axios"],
    is_public: true,
    github_url: "https://github.com/username/weather-dashboard",
    live_demo: "https://weather-app-demo.vercel.app",
    category: "API Integration",
    featured: false
  },
  {
    id: 5,
    name: "Enterprise CRM System",
    description: "A comprehensive Customer Relationship Management system with analytics dashboard, customer tracking, sales pipeline management, and reporting features.",
    image: "/bg1.jpeg",
    tools: ["React", "Node.js", "PostgreSQL", "Redux", "Ant Design", "JWT"],
    is_public: false,
    github_url: null,
    live_demo: null,
    category: "Enterprise",
    featured: true
  },
  {
    id: 6,
    name: "Fitness Tracker App",
    description: "Mobile application for fitness tracking with workout plans, progress monitoring, nutrition tracking, and social features for community engagement.",
    image: "/bg2.jpeg",
    tools: ["React Native", "Firebase", "Expo", "Redux Toolkit", "NativeBase"],
    is_public: true,
    github_url: "https://github.com/username/fitness-tracker",
    live_demo: null,
    category: "Mobile",
    featured: false
  },
  {
    id: 7,
    name: "Blog Platform",
    description: "A modern blogging platform with rich text editor, user authentication, comment system, SEO optimization, and responsive design for all devices.",
    image: "/bg1.jpeg",
    tools: ["Next.js", "Sanity CMS", "TypeScript", "TailwindCSS", "Vercel"],
    is_public: true,
    github_url: "https://github.com/username/blog-platform",
    live_demo: "https://blog-platform-demo.vercel.app",
    category: "CMS",
    featured: true
  },
  {
    id: 8,
    name: "Financial Dashboard",
    description: "A real-time financial dashboard for tracking investments, expenses, and financial goals with data visualization, alerts, and reporting capabilities.",
    image: "/bg2.jpeg",
    tools: ["React", "D3.js", "Express", "MongoDB", "WebSocket", "Chart.js"],
    is_public: false,
    github_url: null,
    live_demo: "https://blog-platform-demo.vercel.app",
    category: "Finance",
    featured: false
  }
];

export { projects };