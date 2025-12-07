// src/components/Projects/ProjectCard.jsx
import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLock, FaEye, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const isPrivate = !project.is_public;
  const hasLiveDemo = project.live_demo !== null;
  const hasGithub = project.github_url !== null;
  const [showAllTools, setShowAllTools] = useState(false);
  
  // Determine if we have too many tools to show comfortably
  const hasManyTools = project.tools.length > 5;
  const displayedTools = showAllTools ? project.tools : project.tools.slice(0, 5);

  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -10 }}
      className="group relative h-full"
    >
      {/* Card Container */}
      <div className="h-full bg-white/80 dark:bg-dark-500 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-1 border-gray-100 dark:border-white/20 group-hover:border-primary-300 dark:group-hover:border-primary-500 flex flex-col">
        
        {/* Project Image */}
        <div className="relative h-48 md:h-56 overflow-hidden flex-shrink-0 bg-dark-text-400">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3! py-1.5! rounded-full text-xs font-medium ${
              isPrivate 
                ? 'bg-gray-800/90 text-gray-200' 
                : 'bg-primary-600/90 text-white'
            }`}>
              {project.category}
            </span>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3! py-1.5! bg-white dark:bg-gray-300 text-gray-700 dark:text-gray-800 rounded-full text-sm font-medium shadow-lg">
                Featured
              </span>
            </div>
          )}

          {/* Private Project Indicator */}
          {isPrivate && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="p-3! bg-black/60 rounded-full backdrop-blur-sm">
                <FaLock className="w-6 h-6 text-red-300" />
              </div>
            </div>
          )}
        </div>

        {/* Card Content - Flex container to push buttons to bottom */}
        <div className="p-6! flex-1 flex flex-col">
          {/* Project Header */}
          <div className="flex items-start justify-between mb-4!">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2! ">
                {project.name}
              </h3>
            </div>

            {/* Public/Private Indicator */}
            <div className={`flex-shrink-0 px-2! py-1! rounded-2xl ${isPrivate ? "bg-red-100/20 dark:bg-gray-700" : "bg-green-100 dark:bg-gray-700"} ml-2!`}>
              {isPrivate ? (
                <p className="text-red-400 text-sm! font-medium!">Private</p>
              ) : (
                <p className="text-green-400 text-sm! font-medium!">Public</p>
              )}
            </div>
          </div>

          {/* Tools Tags - With smart collapsing */}
          <div className="mb-4! flex-shrink-0">
            <div className="flex flex-wrap gap-2! mb-1!">
              {displayedTools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2! py-1! bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs! font-medium! rounded-full whitespace-nowrap"
                >
                  {tool}
                </span>
              ))}
              {hasManyTools && !showAllTools && (
                <span className="px-2! py-1! text-xs! font-medium! text-gray-500 dark:text-gray-400">
                  +{project.tools.length - 5}
                </span>
              )}
            </div>
            
            {/* Expand/Collapse button for tools */}
            {hasManyTools && (
              <button
                onClick={() => setShowAllTools(!showAllTools)}
                className="text-xs! text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium! flex items-center gap-1! mt-1!"
              >
                {showAllTools ? (
                  <>
                    Show less <FaChevronUp size={10} />
                  </>
                ) : (
                  <>
                    Show all {project.tools.length} tools <FaChevronDown size={10} />
                  </>
                )}
              </button>
            )}
          </div>

          {/* Project Description - Flexible space */}
          <div className="flex-1 min-h-0">
            <p className="text-gray-600 dark:text-gray-300 text-sm! leading-relaxed mb-4! line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Action Buttons - Fixed at bottom */}
          <div className="flex items-center justify-between pt-4! border-t border-gray-100 dark:border-gray-700/50 mt-auto">
            <div className="flex items-center gap-4">
              {/* GitHub Button */}
              {hasGithub ? (
                <Motion.a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4! py-2! bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 flex-shrink-0"
                >
                  <FaGithub />
                  <span className="text-sm! font-medium!">Code</span>
                </Motion.a>
              ) : (
                <div className="flex items-center gap-2 px-4! py-2! bg-red-100/20 dark:bg-gray-700 text-gray-400 dark:text-gray-400 rounded-lg cursor-not-allowed flex-shrink-0">
                  <FaGithub />
                  <span className="text-sm! font-medium!">Private</span>
                </div>
              )}

              {/* Live Demo Button */}
              {hasLiveDemo ? (
                <Motion.a
                  href={project.live_demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4! py-2! bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg hover:from-primary-700 hover:to-primary-600 transition-all duration-300 flex-shrink-0"
                >
                  <FaExternalLinkAlt />
                  <span className="text-sm! font-medium!">Live Demo</span>
                </Motion.a>
              ) : (
                <div className="flex items-center gap-2 px-4! py-2! bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 rounded-lg cursor-not-allowed flex-shrink-0">
                  <FaEye />
                  <span className="text-sm! font-medium!">No Demo</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-400/20 dark:group-hover:border-primary-500/20 rounded-2xl pointer-events-none transition-all duration-500"></div>
      </div>
    </Motion.div>
  );
};

export default ProjectCard;