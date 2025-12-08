import { 
  FaReact,           // Frontend
  FaNodeJs,          // Backend
  FaMobile,          // Mobile
  FaJava,            // Languages
  FaDatabase,        // Databases
  FaGitAlt,          // Tools
  FaHandshake,       // Soft Skills
  FaLaptopCode,      // Additional
  FaHtml5,           // HTML
  FaCss3Alt,         // CSS
  FaJs,              // JavaScript
  FaFire,            // Firebase/Framer
  FaGithub,          // GitHub
  FaCode,            // General code
  FaLanguage,        // Languages
  FaTools,           // Tools
  FaUsers,           // Team collaboration
  FaLightbulb,       // Problem solving
  FaComments,         // Communication
  FaLaravel,          // Laravel
  FaServer,         // Server
  FaLinux       // Linux
} from 'react-icons/fa';
import { 
  SiExpress,         // Express
  SiKotlin,          // Kotlin
  SiTailwindcss,     // Tailwind
  SiTypescript,      // TypeScript
  SiMongodb,         // MongoDB
  SiMysql,           // MySQL
  SiFirebase,        // Firebase
  SiVite,            // Vite
  SiWebpack,         // Webpack
//   SiVisualstudiocode, // VS Code
  SiFramer,          // Framer Motion
  SiPhp,             // PHP
  SiJavascript,      // JavaScript alternative
  SiReact,           // React alternative
  SiNodedotjs,        // Node.js alternative
  SiJetpackcompose  ,  // Jetpack Compose
} from 'react-icons/si';


import { VscVscode } from "react-icons/vsc"; //vs code

const skills = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-500" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    //   { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    //   { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-500" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> }
    ],
    categoryIcon: <FaLaptopCode className="text-cyan-500" size={28} />,
    gradient: "from-cyan-100 to-blue-100"
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-200" /> },
    //   { name: "Java", icon: <FaJava className="text-red-500" /> },
      {name: "Laravel", icon: <FaLaravel className="text-red-500" /> }
    ],
    categoryIcon: <FaServer className="text-green-500" size={28} />,
    gradient: "from-green-100 to-emerald-100"
  },
  {
    category: "Mobile Development",
    skills: [
      { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-purple-600" /> },
      { name: "Jetpack Compose", icon: <SiJetpackcompose className="text-blue-400" /> }
    ],
    categoryIcon: <FaMobile className="text-purple-500" size={28} />,
    gradient: "from-purple-100 to-pink-100"
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "PHP", icon: <SiPhp className="text-indigo-500" /> }
    ],
    categoryIcon: <FaLanguage className="text-yellow-500" size={28} />,
    gradient: "from-yellow-100 to-orange-100"
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> }
    ],
    categoryIcon: <FaDatabase className="text-red-500" size={28} />,
    gradient: "from-red-100 to-rose-100"
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-gray-200" /> },
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      { name: "Webpack", icon: <SiWebpack className="text-blue-500" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> }
    ],
    categoryIcon: <FaTools className="text-indigo-500" size={28} />,
    gradient: "from-indigo-100 to-violet-100"
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Team Collaboration", icon: <FaUsers className="text-teal-500" /> },
      { name: "Problem Solving", icon: <FaLightbulb className="text-yellow-500" /> },
      { name: "Communication", icon: <FaComments className="text-blue-500" /> }
    ],
    categoryIcon: <FaHandshake className="text-teal-500" size={28} />,
    gradient: "from-teal-100 to-cyan-100"
  },
  {
    category: "Additional Expertise",
    skills: [
      { name: "Computer Maintenance", icon: <FaLaptopCode className="text-gray-500" /> },
      { name: "Linux", icon: <FaLinux className="text-black" /> }
    ],
    categoryIcon: <FaLaptopCode className="text-gray-500" size={28} />,
    gradient: "from-gray-100 to-slate-100"
  }
];

export { skills };