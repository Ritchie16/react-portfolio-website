// src/components/Footer/Footer.jsx
import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaArrowUp, FaCode, FaMapMarkerAlt } from 'react-icons/fa';
import socialLinks from '../../constants/socialLinks';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="!relative bg-gradient-to-b from-white/5! to-white/10!   dark:from-gray-900/80! dark:to-gray-950! !border-t !border-gray-200/50 dark:!border-gray-700/50">
      {/* Scroll to top button */}
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="!fixed !bottom-8 !right-8 !z-40"
      >
        <button
          onClick={scrollToTop}
          className="!flex !items-center !justify-center !w-12 !h-12 !bg-white dark:!bg-gray-800 !rounded-full !shadow-xl hover:!shadow-2xl !border !border-gray-200 dark:!border-gray-700 !transition-all !duration-300 group"
          aria-label="Scroll to top"
        >
          <Motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="!text-gray-700 dark:!text-gray-300 group-hover:!text-primary-600 dark:group-hover:!text-primary-400"
          >
            <FaArrowUp className="!w-5 !h-5" />
          </Motion.div>
        </button>
      </Motion.div>

      {/* Main footer content */}
      <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-12">
        <div className="!flex !flex-col md:!flex-row !justify-between !items-center !gap-8">
          
          {/* Brand & Copyright */}
          <div className="!text-center md:!text-left">
            <div className="!flex !items-center !gap-2 !mb-3">
              {/* <div className="!w-8 !h-8 !bg-gradient-to-r !from-primary-600 !to-primary-500 !rounded-lg !flex !items-center !justify-center">
                <FaCode className="!w-4 !h-4 !text-white" />
              </div> */}
              <span className="!text-xl !font-bold !bg-gradient-to-r !from-primary-600 !to-primary-500 !bg-clip-text !text-transparent">
                RITCHIE
              </span>
            </div>
            <p className="!text-sm !text-gray-600 dark:!text-gray-400 !mb-2">
              © {currentYear} Richard Munthali. All rights reserved.
            </p>
            <div className="!flex !items-center !gap-2">
              <FaMapMarkerAlt className="!text-primary-600 !w-3 !h-3" />
              <p className="!text-xs !text-gray-600 dark:!text-gray-500">
                Proudly Malawian
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="!flex !flex-wrap !justify-center !gap-6">
            {['home', 'about', 'services', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="!text-sm !text-gray-700 dark:!text-gray-300 hover:!text-primary-600 dark:hover:!text-primary-400 !font-medium !transition-colors !duration-200 !capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Links - Using imported social links */}
          <div className="!flex !items-center !gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!p-2 !text-gray-700 dark:!text-gray-300 hover:!text-primary-600 dark:hover:!text-primary-400 hover:!scale-110 !transition-all !duration-200"
                  aria-label={link.label}
                >
                  <Icon className="!w-5 !h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom divider with version */}
        <div className="!mt-10 !pt-8 !border-t !border-gray-200/30 dark:!border-gray-700/30">
          <div className="!flex !justify-center">
            <div className="!text-xs !text-gray-500 dark:!text-gray-500">
              <span className="!inline-block !px-3 !py-1.5 !bg-gray-100 dark:!bg-gray-800 !rounded-full">
                Version 1.0.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;