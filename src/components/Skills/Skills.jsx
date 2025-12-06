// src/components/Skills/Skills.jsx
import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import SkillsCard from './SkillsCard';
import { skills } from '../../constants/skills';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Filter skills if needed
  const filteredSkills = skills.filter(category => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'technical') {
      return !['Soft Skills'].includes(category.category);
    }
    if (activeFilter === 'soft') {
      return ['Soft Skills'].includes(category.category);
    }
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const filterButtons = [
    { id: 'all', label: 'All Skills' },
    { id: 'technical', label: 'Technical' },
    { id: 'soft', label: 'Soft Skills' }
  ];

  return (
    <section 
      id="skills" 
      className="relative py-20! px-4! sm:px-6! lg:px-8! overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-900/30 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16!"
        >
          
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4!">
            My <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="inline-flex items-center gap-2! px-4! py-2! bg-primary-50 dark:bg-primary-900/20 rounded-full mb-4!">
            <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">
              Expertise & Technologies
            </span>
          </div>
          

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3! mb-10!">
            {filterButtons.map((filter) => (
              <Motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5! py-2.5! rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-primary-600 to-blue-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm'
                }`}
              >
                {filter.label}
              </Motion.button>
            ))}
          </div>
        </Motion.div>

        {/* Skills Grid */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6! lg:px-6!"
        >
          {filteredSkills.map((skillCategory, index) => (
            <SkillsCard 
              key={skillCategory.category} 
              skillCategory={skillCategory} 
              index={index}
            />
          ))}
        </Motion.div>

        {/* Stats/Summary Section */}
        {/* <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20!"
        >
          <div className="bg-gradient-to-r from-white/80 to-white/50 dark:from-gray-800/80 dark:to-gray-900/50 backdrop-blur-sm rounded-2xl p-2! border border-gray-100 dark:border-gray-700/50 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6!">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2!">
                  {skills.length}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Categories
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2!">
                  {skills.reduce((acc, cat) => acc + cat.skills.length, 0)}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Technologies
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2!">
                  1
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2!">
                  ∞
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Learning Curve
                </div>
              </div>
            </div>
          </div>
        </Motion.div> */}

        {/* CTA Section */}
        {/* <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12! text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4! p-6! bg-gradient-to-r from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-primary-100 dark:border-primary-900/30">
            <div className="text-left">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1!">
                Ready to collaborate?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Let's build something amazing together
              </p>
            </div>
            <Motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6! py-3! bg-gradient-to-r from-primary-600 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Start a Project
            </Motion.a>
          </div>
        </Motion.div> */}
      </div>
    </section>
  );
};

export default Skills;