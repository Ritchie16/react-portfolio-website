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
    is_public: true,
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
    tools: ["ReactJS" , "PHP", "Framer Motion", "JavaScript", "MySQL",  "TailwindCSS", "Education"],
    is_public: false,
    github_url: null,
    live_demo: null,
    category: "Enterprise",
    featured: true
  },
  {
    id: 8,
    name: "Digital Clock App",
    description: "A command-line based digital clock windows application with alarm functionality, resetting time build using C.",
    image: "/proj_digital-clock.png",
    tools: ["C", "Windows API", "Education"],
    is_public: true,
    github_url: "https://github.com/Ritchie16/Digital-clock",
    live_demo: null,
    category: "Desktop",
    featured: true
  },
  {
    id: 9,
    name: "Inventory Management System",
    description: "A desktop application for managing inventory, tracking stock levels, and generating reports. Built with Java and Text file as DB for small to medium-sized businesses.",
    image: "/proj_inventory-management.png",
    tools: ["Java", "Java Swing", "Text File", "Education"],
    is_public: true,
    github_url: "https://github.com/Ritchie16/Inventory-Management-System",
    live_demo: null,
    category: "Desktop",
    featured: true
  }
  
];

export { projects };