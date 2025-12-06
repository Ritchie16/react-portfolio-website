// src/components/Projects/Projects.jsx
import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../../constants/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [showCount, setShowCount] = useState(6);

  // Filter projects based on selection
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'public') return project.is_public;
    if (filter === 'private') return !project.is_public;
    if (filter === 'featured') return project.featured;
    if (filter === 'with-demo') return project.live_demo !== null;
    return project.category.toLowerCase() === filter;
  });

  // Get unique categories
  const categories = ['all', 'featured', 'public', 'private', 'with-demo', 
    ...new Set(projects.map(p => p.category.toLowerCase()))
  ];

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

  const stats = {
    total: projects.length,
    public: projects.filter(p => p.is_public).length,
    featured: projects.filter(p => p.featured).length,
    withDemo: projects.filter(p => p.live_demo !== null).length
  };

  return (
    <section id="projects" className="relative py-20! px-4! sm:px-6! lg:px-8! overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-900/30 -z-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl -z-5"></div>

      <div className="max-w-7xl mx-auto!">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16!"
        >
          <div className="inline-flex items-center gap-2! px-4! py-2! bg-primary-50 dark:bg-primary-900/20 rounded-full mb-4!">
            <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">
              Portfolio Showcase
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4!">
            My <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto! mb-8!">
            A collection of my recent work, showcasing problem-solving skills and technical expertise
          </p>

          {/* Stats Bar */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6! mb-10!"
          >
            {[
              { label: 'Total Projects', value: stats.total, color: 'from-blue-500 to-cyan-500' },
              { label: 'Public', value: stats.public, color: 'from-green-500 to-emerald-500' },
              { label: 'Featured', value: stats.featured, color: 'from-yellow-500 to-orange-500' },
              { label: 'Live Demos', value: stats.withDemo, color: 'from-purple-500 to-pink-500' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1!`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </Motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3! mb-12!">
            {categories.slice(0, 6).map((category) => (
              <Motion.button
                key={category}
                onClick={() => {
                  setFilter(category);
                  setShowCount(6);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5! py-2.5! rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-primary-600 to-blue-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm'
                }`}
              >
                {category.replace('-', ' ')}
              </Motion.button>
            ))}
          </div>
        </Motion.div>

        {/* Projects Grid */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8!"
        >
          {filteredProjects.slice(0, showCount).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Motion.div>

        {/* Load More Button */}
        {showCount < filteredProjects.length && (
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12!"
          >
            <Motion.button
              onClick={() => setShowCount(prev => prev + 3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8! py-3! bg-gradient-to-r from-primary-600 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Load More Projects ({filteredProjects.length - showCount} remaining)
            </Motion.button>
          </Motion.div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16!"
          >
            <div className="inline-flex p-6! bg-gray-100 dark:bg-gray-800 rounded-2xl mb-6!">
              <div className="text-4xl">📁</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3!">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
              Try selecting a different filter to view projects in that category
            </p>
          </Motion.div>
        )}

        {/* CTA Section */}
        {/* <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20!"
        >
          <div className="bg-gradient-to-r from-white/80 to-white/50 dark:from-gray-800/80 dark:to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2!">
                  Have a project in mind?
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Let's discuss how we can bring your ideas to life
                </p>
              </div>
              <div className="flex gap-4">
                <Motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-primary-600 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  Start a Project
                </Motion.a>
                <Motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  View All Work
                </Motion.a>
              </div>
            </div>
          </div>
        </Motion.div> */}
      </div>
    </section>
  );
};

export default Projects;