import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollIndicator = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Motion.button
      onClick={scrollToTop}
      className="!fixed !bottom-6 !right-6 !z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="!relative">
        {/* Pulsing background effect */}
        <Motion.div
          className="!absolute !inset-0 !bg-primary-500/20 !rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Main button */}
        <div className="!relative !w-12 !h-12 !bg-gradient-to-br !from-primary-600 !to-blue-500 !rounded-full !flex !items-center !justify-center !shadow-xl hover:!shadow-2xl !transition-all !duration-300">
          <Motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaArrowUp className="!w-5 !h-5 !text-white" />
          </Motion.div>
        </div>
      </div>
    </Motion.button>
  );
};

export default ScrollIndicator;