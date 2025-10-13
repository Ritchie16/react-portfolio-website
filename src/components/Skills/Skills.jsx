import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const skillCategories = [
    { id: "ALL", label: "ALL" },
    { id: "FRONTEND", label: "Frontend" },
    { id: "BACKEND", label: "Backend" },
    { id: "LANGUAGES", label: "Languages" },
    { id: "DATABASES", label: "Databases" },
    { id: "TOOLS", label: "Tools" },
  ];

  const skills = {
    FRONTEND: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Vite.js", level: 80 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 75 },
    ],
    BACKEND: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Spring Boot", level: 70 },
      { name: "REST APIs", level: 88 },
      { name: "GraphQL", level: 65 },
    ],
    LANGUAGES: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 75 },
      { name: "Python", level: 70 },
      { name: "SQL", level: 80 },
    ],
    DATABASES: [
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "Redis", level: 65 },
    ],
    TOOLS: [
      { name: "Git", level: 88 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 75 },
      { name: "Jest", level: 72 },
      { name: "Webpack", level: 68 },
    ],
  };

  // Get all skills for "ALL" category
  const allSkills = Object.values(skills).flat();

  const displayedSkills =
    activeCategory === "ALL" ? allSkills : skills[activeCategory] || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 ${
                activeCategory === category.id
                  ? "bg-primary-600 border-primary-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          <AnimatePresence mode="wait">
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={`${activeCategory}-${skill.name}`}
                variants={itemVariants}
                layout
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-center">
                  {/* Skill Name */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {skill.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>

                  {/* Percentage */}
                  <div className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {skill.level}%
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {displayedSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No skills found in this category.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
