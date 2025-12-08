// src/components/Skills/SkillsCard.jsx
import React from 'react';
import { motion as Motion } from 'framer-motion';

const SkillsCard = ({ skillCategory, index }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <div className="h-full bg-white/80 dark:bg-dark-500 backdrop-blur-sm rounded-2xl p-6! shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/20 hover:border-primary-300 dark:hover:border-primary-500 overflow-hidden group">
        {/* Category Header */}
        <div className="flex items-center gap-4 mb-6!">
          <div className={`relative p-3! rounded-xl bg-gradient-to-r ${skillCategory.gradient} group-hover:scale-110 transition-transform duration-300`}>
            <div className="absolute inset-0 bg-white/20 dark:bg-black/20 rounded-xl"></div>
            {skillCategory.categoryIcon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {skillCategory.category}
          </h3>
        </div>

        {/* Skills List */}
        <div className="space-y-3!">
          {skillCategory.skills.map((skill, idx) => (
            <Motion.div
              key={idx}
              
              viewport={{ once: true }}
              className="flex items-center justify-between p-3! rounded-xl bg-gray-50/50 dark:bg-gray-700/30 hover:bg-gray-100/70 dark:hover:bg-gray-700/50 transition-all duration-200 group/item"
            >
              <div className="flex items-center gap-3!">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                  {skill.icon}
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
              </div>
              
              
            </Motion.div>
          ))}
        </div>

       
      </div>
    </Motion.div>
  );
};

export default SkillsCard;