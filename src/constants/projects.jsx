// src/constants/projects.jsx
const projects = [
  
  {
    id: 2,
    name: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with dark/light mode, smooth animations, and optimized performance. Built with React and Framer Motion for engaging user interactions.",
    image: "/proj_myportfolio.png",
    tools: ["React", "Framer Motion", "TailwindCSS", "Vite", "React Icons"],
    is_public: true,
    github_url: "https://github.com/Ritchie16/react-portfolio-website",
    live_demo: "https://richardmunthali.vercel.app",
    category: "Frontend",
    featured: false
  },
 
 
  
  {
    id: 6,
    name: "Notes App",
    description: "Mobile application for editing and organizing notes with offline support, cloud sync, rich text formatting and pinning notes.",
    image: "/proj_notes-app.jpeg",
    tools: ["Kotlin", "JetPack Compose", "Firebase", "Education"],
    is_public: false,
    github_url: "",
    live_demo: null,
    category: "Mobile",
    featured: true
  },
  {
    id: 7,
    name: "Aunt Joy's Restraurant Website",
    description: "A modern website for managing and ordering of meals as well as business analytics.",
    image: "/bg1.jpeg",
    tools: ["ReactJS", "Framer Motion", "JavaScript", "TailwindCSS", "PHP", "MySQL"],
    is_public: false,
    github_url: null,
    live_demo: null,
    category: "Enterprise",
    featured: true
  },
  
];

export { projects };