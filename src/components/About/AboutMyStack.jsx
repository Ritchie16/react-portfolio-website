import { RiReactjsFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiMongodb, SiTailwindcss, SiExpress, SiJavascript, SiTypescript,  SiKotlin, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { color } from "framer-motion";


const AboutMyStack = () => {
  const techStack = [
    { name: "React", icon: RiReactjsFill, color: "#61DAFB" },
    { name: "Node.js", icon: DiNodejs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    {name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Kotlin", icon: SiKotlin, color: "#0095D5" },
    { name: "Java", icon: FaJava, color: "#007396" },
  ];

  return (
    <div className="h-auto w-[80%] flex flex-col items-start bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:scale-102 transition-transform duration-300">
        {/* for tech stack header*/}
      <h4 className="w-full h-8 md:h-15 text-md lg:text-lg xl:text-xl flex items-center justify-center gap-2 font-bold text-primary-600 dark:text-white mb-6">
        My Tech Stack
      </h4>

      {/* Tech stack icons and names */}
      <div className="flex flex-wrap gap-2  justify-center w-full">
        {techStack.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-17 h-10 md:w-18 md:h-18 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <IconComponent size={16} color={tech.color} />
              <span className="mt-2 text-sm font-medium text-gray-900 dark:text-white"> {tech.name} </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMyStack;